<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      property: "og:title",
      content: `Christopher Odhiambo (The Coding Montana)`,
    },
    {
      name: "description",
      content: "Capture Webpage Screenshots With Easy😉.",
    },
    {
      property: "og:description",
      content: "Capture Webpage Screenshots With Easy😉.",
    },
    { property: "og:url", content: "https://snapeasy.vercel.app/" },
    {
      name: "twitter:title",
      content: "Capture Webpage Screenshots With Easy😉.",
    },
    {
      name: "twitter:description",
      content: "Capture Webpage Screenshots With Easy😉.",
    },
    { name: "twitter:site", content: "https://snapeasy.vercel.app/" },
    {
      property: "og:image",
      content: "/icons/favicon-32x32.png",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
  ],
  title: `SnapEasy`,
});

defineOgImage({
  title: `SnapEasy`,
});
</script>

<template>
  <main class="max-w-[90rem] mx-auto">
    <slot />
  </main>
</template>
