<script setup lang="ts">
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      property: "og:title",
      content: `SnapEasy`,
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

defineOgImageComponent("Nuxt", {
  headline: "Author: The Coding Montana",
  title: "SnapEasy",
  description: "Capture Webpage Screenshots With Easy😉.",
});
</script>

<template>
  <main class="max-w-[90rem] mx-auto">
    <slot />
    <Footer />
  </main>
</template>
