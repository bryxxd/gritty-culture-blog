<script setup>
const route = useRoute();
const isTopPage = computed(() => route.path === "/");
const marqueeText =
  "Independent writing on music, film, and visual culture—one deep cut at a time.";
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999] bg-[url('~/assets/img/bg-noise.png')] bg-repeat bg-[length:100%_60px] mix-blend-difference opacity-50"
    aria-hidden="true" />

  <Marquee :marquee-text="marqueeText" :class="isTopPage ? 'block' : 'hidden'" />
  <Header />

  <main :class="isTopPage ? 'mt-[-84px]' : 'mt-0'">
    <slot />
  </main>

  <Subscribe />
  <Footer />

</template>
