<script setup>
import VCodeBlock from "@wdns/vue-code-block";
import { Button } from "~/components/ui/button";
import download from "~/lib/download";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const props = defineProps({
  generatedScreen: String,
  webUrl: String,
});

const code = ref(`
await fetch("/api/screenshot?url=https://the-coding-montana.vercel.app")
  .then((response: any) => {
    if (response.status === 500) {
      return "";
    }
    return response.blob();
  })
  .then((blob: any) => {
    console.log(blob);
    if (process.client) {
      return window.URL.createObjectURL(blob);
    }
  });
`);

const generatedScreen = computed(() => {
  return props?.generatedScreen;
});

const webUrl = computed(() => {
  return props?.webUrl;
});
const isFileDownloading = useState("isFileDownloading", () => false);

const downloadFile = async (type) => {
  isFileDownloading.value = true;
  const file = await download(webUrl.value);
  const link = document.createElement("a");

  // Append the link to the document
  document.body.appendChild(link);

  link.download = `SnapEasy_${webUrl.value}.${type}`;

  // Create a URL for the Blob and set it as the href attribute of the link
  link.href = file;

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();
  isFileDownloading.value = false;

  // Remove the link from the document
  document.body.removeChild(link);
};
</script>

<template>
  <div
    class="flex flex-col-reverse sm:grid sm:grid-cols-2 p-5 sm:p-10 gap-20 mt-4 sm:items-center"
  >
    <div class="space-y-3">
      <div class="relative border p-2 rounded-md shadow-lg">
        <div class="absolute w-56 text-right top-4 right-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button class="disabled:bg-red-400 disabled:cursor-no-drop">
                <Icon
                  :name="
                    isFileDownloading
                      ? 'line-md:downloading-loop'
                      : 'solar:gallery-download-line-duotone'
                  "
                  class="h-5 w-5 mx-2"
                />
                Download
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <!-- <DropdownMenuSeparator /> -->
              <DropdownMenuItem @click="downloadFile('jpeg')"
                >jpeg</DropdownMenuItem
              >
              <DropdownMenuItem @click="downloadFile('png')"
                >png</DropdownMenuItem
              >
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <img
          className="object-cover w-full rounded-xl h-full"
          :src="generatedScreen ? generatedScreen : 'images/montana.png'"
          :alt="'screenia screenshot of' + webUrl"
        />
      </div>
    </div>
    <div
      class="space-y-4 hover:bg-gray-200 p-4 md:p-5 rounded-xl bg-white shadow-md hover:border-transparent"
    >
      <button
        type="button"
        class="text-start"
        id="tabs-with-card-item-2"
        data-hs-tab="#tabs-with-card-2"
        aria-controls="tabs-with-card-2"
        role="tab"
      >
        <span class="flex">
          <Icon
            name="carbon:api"
            class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-blue-600"
          />
          <span class="grow ms-6">
            <span class="block text-lg font-semibold text-blue-600"
              >SnapEasy API</span
            >
            <span class="block mt-1 text-gray-800"
              >You can also use the SnapEasy API in your project and integrate
              it with any service you may wish to. SnapEasy is built on Nuxt
              3.</span
            >
          </span>
        </span>
      </button>
      <client-only>
        <div>
          <VCodeBlock
            :code="code"
            highlightjs
            lang="javascript"
            theme="github-dark"
            label="API Code"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>
