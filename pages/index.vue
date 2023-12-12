<script setup lang="ts">
const year = computed(() => {
  let date = new Date();

  return date.getFullYear();
});

const generatedScreen = useState("generatedScreen", () => "");

const loading = useState("loading", () => false);

const webUrl = useState("webUrl", () => "");
const queryType = useState("queryType", () => "png");

const takeScreenshot = async () => {
  loading.value = true;
  await fetch(`/api/screenshot?${webUrl.value}&type=${queryType.value}`)
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
  <!-- Content -->
  <div class="h-screen flex flex-col pb-6">
    <div class="h-full flex flex-col justify-center">
      <div
        class="-mt-48 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8"
      >
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
    </div>

    <footer class="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-xs text-gray-600 dark:text-gray-500">
        © {{ year }}. A product of
        <NuxtLink
          class="text-slate-900 decoration-2 hover:underline font-semibold dark:text-gray-300"
          href="https://the-coding-montana.vercel.app"
          target="_blank"
          >The Coding Montana</NuxtLink
        >.
      </p>
    </footer>
  </div>
  <!-- End Content -->
</template>
