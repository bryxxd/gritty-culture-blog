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

  <div
    class="bg-[url('~/assets/img/index/subscribed-bg.png')] bg-cover bg-top bg-no-repeat pt-[180px] pb-[40px] md:pb-[80px]">
    <div class="layout">
      <div class="px-[30px]">
        <div
          class="bg-[url('~/assets/img/index/sp/subscribed-bgcontainer.png')] md:bg-[url('~/assets/img/index/subscribed-bgcontainer.png')] bg-cover bg-center bg-no-repeat text-paragraph-2 text-center md:flex md:justify-between">

          <div
            class="border-b-2 md:border-r-2 md:border-b-0 border-paragraph-2 border-dashed px-5 py-4 md:py-[50px] flex justify-between items-center md:flex-col">
            <span class="inline-block w-5 h-5 bg-paragraph-2 rounded-full" v-for="n in 3"></span>
          </div>

          <div class="py-16 px-10 md:py-[80px] lg:py-[124px]">
            <p class="font-instrumentSerif italic text-[40px]/[90%] md:text-[64px] lg:text-[80px]">Tune into the signal
            </p>
            <p class="text-lg/[140%] md:text-xl mt-4">No noise—just deep cuts on music, film, and culture</p>
            <NuxtLink
              class="bg-background-1 text-paragraph-1 font-semibold p-4 md:py-4 md:px-8 inline-block mt-8 md:hover:bg-background-2 transition-colors duration-300 ease-out"
              to="#">Subscribe</NuxtLink>
          </div>

          <div
            class="border-t-2 md:border-l-2 md:border-t-0 border-paragraph-2 border-dashed px-5 py-4 md:py-[50px] flex justify-between items-center md:flex-col">
            <span class="inline-block w-5 h-5 bg-paragraph-2 rounded-full" v-for="n in 3"></span>
          </div>

        </div>
      </div>
    </div>
  </div>

  <footer class="px-5 pt-10 pb-5 text-paragraph-1">
    <div class="lg:flex lg:justify-between">
      <h2 class="text-footer-heading font-tiltWarp font-bold leading-none mix-blend-plus-lighter">Grain<br class="hidden lg:block"> Archive</h2>

      <div class="w-full text-paragraph-4 mt-20 md:flex md:justify-between lg:flex-col lg:gap-[100px] lg:max-w-[360px]">
        <div class="grid grid-cols-2 md:grid-cols-[140px_140px] gap-10">
          <div class="lg:text-right">
            <span
              class="text-[10px] font-semibold border border-solid border-y-paragraph-4 p-1 px-2 rounded-full uppercase">Links</span>
            <ul class="mt-[6px] text-lg/[140%] md:text-xl">
              <li>
                <NuxtLink to="/" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/archive" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">
                  Archive</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">About
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="lg:text-right">
            <span
              class="text-[10px] font-semibold border border-solid border-y-paragraph-4 p-1 px-2 rounded-full uppercase">Connect</span>
            <ul class="mt-[6px] text-lg/[140%] md:text-xl">
              <li>
                <NuxtLink to="/" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">Instagram
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/archive" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">
                  Threads</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">
                  YouTube
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="underline hover:opacity-25 transition-opacity duration-300 ease-out">Email
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-sm md:text-right mt-20 md:mt-0">©2025 Grain Archive<br>Words, images, and signals from the edge</p>
      </div>

    </div>
  </footer>
</template>
