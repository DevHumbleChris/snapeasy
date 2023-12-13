import createBrowser from "browserless";

export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: "URL parameter is required",
    });
  }

  // First, create a browserless factory
  // that it will keep a singleton process running
  const browser = createBrowser({
    timeout: 25000,
    lossyDeviceName: true,
    ignoreHTTPSErrors: true,
  });

  try {
    // After that, you can create as many browser context
    // as you need. The browser contexts won't share cookies/cache
    // with other browser contexts.
    const browserless = await browser.createContext();
    console.log("Creating browser contexts");

    const buffer = await screencast({
      getBrowserless: () => browserless,
      format: "webm",
      ffmpegPath: await execa
        .command("which ffmpeg")
        .then(({ stdout }) => stdout),
      gotoOpts: {
        url,
        animations: true,
        abortTypes: [],
        waitUntil: "load",
      },
      withPage: async (page) => {
        await page.waitForTimeout(7000);
      },
    });

    // After your task is done, destroy your browser context
    await browserless.destroyContext();

    return buffer;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  } finally {
    await browser.close();
  }
});
