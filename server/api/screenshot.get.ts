import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

async function getBrowserInstance() {
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    // running locally
    return puppeteer.launch({
      args: chromium.args,
      headless: true,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      ignoreHTTPSErrors: true,
    });
  }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
}

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
  let browser = null;

  try {
    browser = await getBrowserInstance();
    let page = await browser.newPage();
    await page.goto(url);
    const screenshot = await page.screenshot(outPut);
    console.log(screenshot);

    if (download) {
      return screenshot;
    } else {
      setResponseStatus(event, 200);
      event.headers.set("Content-Type", `image/${type}`);
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as any).message,
    });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
});
