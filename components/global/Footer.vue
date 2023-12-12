<script setup>
const year = computed(() => {
  let date = new Date();

  return date.getFullYear();
});
</script>

<template>
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
</template>
