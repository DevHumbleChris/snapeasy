import createBrowser from "browserless";
import Buffer from "buffer";

export default defineEventHandler(async (event) => {
  const {
    url,
    type = "png",
    download = false,
    fullscreen = false,
  } = getQuery(event);

  const outPut = { type, fullPage: fullscreen };

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

  console.log("Created Browser");

  try {
    // After that, you can create as many browser context
    // as you need. The browser contexts won't share cookies/cache
    // with other browser contexts.
    const browserless = await browser.createContext();
    console.log("Creating browser contexts");

    // Perform the action you want, e.g., getting the HTML markup
    const buffer = await browserless.screenshot(url, {
      device: "Macbook Pro 13",
    });

    return buffer;

    // After your task is done, destroy your browser context
    await browserless.destroyContext();
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  } finally {
    await browser.close();
  }
});
