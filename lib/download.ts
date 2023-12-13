export default function download(webUrl: String) {
  return getWebUrlScreenshot(webUrl);
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
