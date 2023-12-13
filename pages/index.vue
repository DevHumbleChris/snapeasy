<script setup>
import Hero from "~/components/global/Hero.vue";
import FAQ from "~/components/global/FAQ.vue";
if (process.client) {
  console.log(window);
}
</script>

<template>
  <Hero />
  <FAQ />
</template>
