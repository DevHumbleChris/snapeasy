<script setup lang="ts">
import Chat from "~/components/global/Chat.vue";

const generatedScreen = useState("generatedScreen", () => "");

const loading = useState("loading", () => false);

const webUrl = useState("webUrl", () => "");
const queryType = useState("queryType", () => "png");

const takeScreenshot = async () => {
  loading.value = true;
  await fetch(`/api/screenshot?url=${webUrl.value}&type=${queryType.value}`)
    .then((response) => {
      if (response.status === 500) {
        loading.value = false;
        generatedScreen.value = "";
        return;
      }
      return response.blob();
    })
    .then((blob: any) => {
      const url = URL.createObjectURL(blob);
      generatedScreen.value = url;
    });
  loading.value = false;
  console.log(generatedScreen.value);
};

const handleSubmit = () => {
  takeScreenshot();
};
</script>

<template>
  <section>
    <div
      class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]"
    >
      <div class="max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtImg
          src="/the-coding-montana.png"
          alt="the-coding-montana logo"
          fromat="webp"
          quality="80"
          class="w-80 h-auto mx-auto"
        />

        <h1
          class="text-3xl -mt-12 font-bold text-gray-800 sm:text-4xl dark:text-white"
        >
          Welcome to SnapEasy
        </h1>
        <p class="mt-3 text-gray-600 dark:text-gray-400">
          Capture Webpage Screenshots With Easy😉.
        </p>
      </div>

      <!-- Search -->
      <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <form @submit.prevent="handleSubmit" class="relative">
          <input
            type="text"
            v-model="webUrl"
            class="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Type your webpage url..."
          />
          <div class="absolute top-1/2 end-2 -translate-y-1/2">
            <button
              type="submit"
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Icon
                name="material-symbols:camera"
                class="flex-shrink-0 h-4 w-4"
                :class="{ 'animate-spin': loading }"
              />
            </button>
          </div>
        </form>
      </div>
      <!-- End Search -->
      <div class="grid grid-cols-2 p-10 gap-20">
        <div class="border p-2 rounded-md shadow-lg">
          <Chat />
        </div>
        <div class="space-y-4">
          <button
            type="button"
            class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
          >
            <span class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span class="grow ms-6">
                <span
                  class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                  >Smart dashboards</span
                >
                <span
                  class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
                  >Quickly Preline sample components, copy-paste codes, and
                  start right off.</span
                >
              </span>
            </span>
          </button>
          <button
            type="button"
            class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
          >
            <span class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span class="grow ms-6">
                <span
                  class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                  >Smart dashboards</span
                >
                <span
                  class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200"
                  >Quickly Preline sample components, copy-paste codes, and
                  start right off.</span
                >
              </span>
            </span>
          </button>
        </div>
      </div>

      <img
        v-if="generatedScreen"
        className="object-cover w-full rounded-xl"
        :src="generatedScreen"
        :alt="'screenia screenshot of' + webUrl"
      />
    </div>
  </section>
</template>
