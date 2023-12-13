export default function download(downloadReq: String, webUrl: String) {
  if (downloadReq === "screenshot") {
    return getWebUrlScreenshot(webUrl);
  } else if (downloadReq === "screencast") {
    return getWebUrlScreencast(webUrl);
  }
}

const getWebUrlScreenshot = async (url: String) => {
  const file = await fetch(`/api/screenshot?url=${url}`)
    .then((response: any) => {
      if (response.status === 500) {
        return "";
      }
      return response.blob();
    })
    .then((blob: any) => {
      if (process.client) {
        return window.URL.createObjectURL(blob);
      }
    });

  return file;
};

const getWebUrlScreencast = async (url: String) => {
  const file = await fetch(`/api/screencast?url=${url}`)
    .then((response: any) => {
      if (response.status === 500) {
        return "";
      }
      return response.blob();
    })
    .then((blob: any) => {
      if (process.client) {
        return window.URL.createObjectURL(blob);
      }
    });

  return file;
};
