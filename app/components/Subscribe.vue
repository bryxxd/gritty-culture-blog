<script setup></script>

<template>
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

</template>