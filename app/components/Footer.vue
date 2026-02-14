<script setup></script>

<template>
    
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