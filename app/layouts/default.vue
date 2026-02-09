<script setup>
const route = useRoute();
const isTopPage = computed(() => route.path === "/");
const marqueeText =
  "Independent writing on music, film, and visual culture—one deep cut at a time.";

</script>
<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999] bg-[url('~/assets/img/bg-noise.png')] bg-repeat bg-[length:100%_60px] mix-blend-difference opacity-50"
    aria-hidden="true"
  />

  <div class="whitespace-nowrap overflow-hidden" :class="isTopPage ? 'block' : 'hidden'">
    <div
      class="animate-marquee-sm md:animate-marquee-md lg:animate-marquee hover:[animation-play-state:paused] flex gap-4 will-change-transform">
      <p class="text-lg/normal md:text-xl text-paragraph-3 font-semibold py-4" v-for="n in 10" :key="n">
        {{ marqueeText }}
      </p>
    </div>
  </div>

  <header class="layout sticky z-50 top-0 px-10px">
    <img src="~/assets/img/logo-header.png" alt="Grain Archive logo"
      class="hidden md:block w-11 h-11 absolute top-0 left-[20px] bottom-0 my-auto" />
    <nav>
      <ul class="font-semibold text-paragraph-2 text-lg md:text-xl flex gap-2 flex-wrap justify-center py-4">
        <li>
          <NuxtLink to="/"
            class="inline-block px-3 py-2 md:py-3 bg-background-5 md:hover:bg-background-4 transition-colors duration-300 ease-out">
            Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/archive"
            class="inline-block px-3 py-2 md:py-3 bg-background-6 rounded-full md:hover:bg-background-4 transition-colors duration-300 ease-out">
            Archive</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about"
            class="inline-block px-3 py-2 md:py-3 bg-background-7 rounded-md md:hover:bg-background-4 transition-colors duration-300 ease-out">
            About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <main :class="isTopPage ? 'mt-[-84px]' : 'mt-0'">
    <slot />
  </main>

  <footer></footer>
</template>
