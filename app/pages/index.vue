<template>
  <section class="layout h-[640px] md:h-[800px] relative">
      <video autoplay muted loop playsinline class="rounded-lg h-full w-full object-cover">
          <source src="~/assets/video/mv-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <img src="~/assets/img/index/grain-archive-logo.svg" alt="Grain Archive" class="absolute w-full bottom-[20px] left-0 right-0 mx-auto px-[20px] md:px-[30px]">
  </section>

  <section class="layout text-lg md:text-xl mt-[10px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
      <div v-for="n in 4" :key="n">
        <a href="#" class="relative block h-[460px] md:h-[500px] lg:h-[700px] group rounded-lg overflow-hidden">
          <img src="~/assets/img/img-dummy.jpg" alt="" class="rounded-lg w-full h-full object-cover md:group-hover:scale-[1.1] md:group-hover:blur-md transition-blur transition-scale duration-300 ease-out">
          <div class="absolute z-20 rounded-md bottom-[10px] mx-auto left-0 right-0 w-[calc(100%-20px)] bg-[#ffffff33] backdrop-blur-lg p-3">
            <h2 class="text- font-semibold">Listening to Films That Drift</h2>
            <div class="flex gap-1 items-center">
              <p>Film</p>
              <p>·</p>
              <p>August 21, 2028</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <NuxtLink to="/archive" class="block rounded-lg mt-[10px] bg-background-4 text-center text-paragraph-2 font-instrumentSerif italic py-4 md:py-6 lg:py-8 text-4xl md:text-[64px] lg:text-[80px] leading-none md:hover:bg-background-5 transition-colors duration-300 ease-out">
      View all
    </NuxtLink> 
  </section>
  
</template>
