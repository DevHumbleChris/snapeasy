<script setup lang="ts">
import UIType from "~/components/global/UIType.vue";

const generatedScreen = useState("generatedScreen", () => "");

const loading = useState("loading", () => false);

const webUrl = useState("webUrl", () => "");

const takeScreenshot = async () => {
  loading.value = true;
  await fetch(`/api/screenshot?url=${webUrl.value}`)
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
};

const handleSubmit = () => {
  takeScreenshot();
};
</script>

<template>
  <section>
    <div
      class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
    >
      <div class="max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center my-3 -ml-4">
          <div class="w-[12rem]">
            <client-only>
              <Vue3Lottie animationLink="/lotties/snap.json" />
            </client-only>
          </div>
          <h1 class="-ml-8 text-3xl font-semibold">SnapEasy.</h1>
        </div>

        <h1 class="text-3xl -mt-12 font-bold text-gray-800 sm:text-4xl">
          Welcome to SnapEasy
        </h1>
        <p class="mt-3 text-gray-600">
          Capture Webpage Screenshots With Easy😉.
        </p>
        <div class="flex items-center justify-center my-5 gap-2">
          <NuxtLink
            class="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-full"
            to="https://twitter.com/AmChrisKE"
            target="_blank"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
            <span class="block">Follow Me</span>
          </NuxtLink>
          <NuxtLink
            class="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-full"
            to="https://github.com/DevHumbleChris/snapeasy"
            target="_blank"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span class="block">Star On GitHub</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Search -->
      <div class="mt-4 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <form @submit.prevent="handleSubmit" class="relative">
          <input
            type="text"
            v-model="webUrl"
            class="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Type your webpage url..."
          />
          <div class="absolute top-1/2 end-2 -translate-y-1/2">
            <button
              type="submit"
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
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
      <UIType
        :generatedScreen="generatedScreen"
        :webUrl="webUrl ? webUrl : 'https://the-coding-montana.vercel.app'"
      />
    </div>
  </section>
</template>
