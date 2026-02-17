<script setup lang="ts">
const { data: articlesData } = await useFetch("/api/articles");
const articlesList = computed(() => articlesData.value?.articles.slice(0, 4) || []);

const { getCinemaSelects } = useCinemaSelects();
const { data: cinemaSelects } = await useAsyncData('cinemaSelects', () => getCinemaSelects());

const { getFeaturedAlbum } = useFeaturedAlbum()
const { data: featuredAlbum } = await useAsyncData('featuredAlbums', () => getFeaturedAlbum());
</script>

<template>
  <section class="layout h-[640px] md:h-[800px] relative">
    <video autoplay muted loop playsinline class="rounded-lg h-full w-full object-cover">
      <source src="~/assets/video/mv-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <img src="~/assets/img/index/grain-archive-logo.svg" alt="Grain Archive"
      class="absolute w-full bottom-[20px] left-0 right-0 mx-auto px-[20px] md:px-[30px]" />
  </section>

  <section class="layout text-lg md:text-xl mt-[10px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
      <ArticleList v-for="article in articlesList" :key="article.id" :article="article" />
    </div>
    <NuxtLink to="/archive"
      class="block rounded-lg mt-[10px] bg-background-4 text-center text-paragraph-2 font-instrumentSerif italic py-4 md:py-6 lg:py-8 text-4xl md:text-[64px] lg:text-[80px] leading-none md:hover:bg-background-5 transition-colors duration-300 ease-out">
      View all
    </NuxtLink>
  </section>

  <section class="layout mt-[10px] rounded-lg">
    <div
      class="bg-[url('~/assets/img/index/featured-bg.jpg')] bg-cover bg-center bg-no-repeat pt-[60px] px-[10px] pb-10 md:py-[60px]">
      <h2
        class="text-[clamp(64px,20vw,160px)]/[80%] text-headline-1 font-tiltWarp mix-blend-plus-lighter tracking-tighter">
        Featured<br />
        Album
      </h2>
      <template v-for="value in featuredAlbum" :key="value.id">
        <div class="relative mx-auto max-w-[255px] md:max-w-[600px] lg:max-w-[840px] -mt-[10px] lg:-mt-[30px]">
          <img :src="value.albumFields.album_cover.node.sourceUrl" :alt="value.albumFields.album_cover.node.altText"
            class="w-full shadow-[0px_-20px_20px_0px_rgba(0,_0,_0,_0.25)]" />
          <div class="mt-8 text-lg md:text-xl text-center">
            <h3 class="mb-2">{{ value.title }} by {{ value.albumFields.album_artist }}</h3>
            <NuxtLink
              class="before:content[''] before:bg-[url('~/assets/img/index/featured-play.svg')] before:bg-no-repeat before:bg-contain before:inline-block before:w-[14px] before:h-[14px] inline-flex items-center md:hover:opacity-50 transition-opacity duration-300 ease-out"
              :to="value.albumFields.album_url" target="_blank" rel="ugc">Listen now</NuxtLink>
          </div>
        </div>
      </template>

    </div>
  </section>

  <section class="layout mt-[10px]">
    <div class="py-10 px-[10px] md:py-[60px] bg-background-3 rounded-lg">
      <h2
        class="text-[clamp(64px,20vw,160px)]/[80%] text-paragraph-2 font-tiltWarp font-bold mix-blend-plus-dark tracking-tight">
        Cinema<br />
        Selects
      </h2>
      <div class="overflow-y-scroll md:overflow-y-auto">
        <table
          class="table-fixed text-left text-lg md:text-xl mt-20 overflow-hidden md:overflow-auto w-[660px] md:w-full">
          <thead class="text-paragraph-2 border-b-[1px] border-divider-1 border-dashed">
            <tr class="grid grid-cols-[repeat(4,149px)] gap-4 md:grid-cols-[1fr,160px,344px,1fr]  opacity-60">
              <th class="pb-3">Film</th>
              <th class="pb-3">Year</th>
              <th class="pb-3">Mood</th>
              <th class="pb-3 text-right">Why watch</th>
            </tr>
          </thead>
          <tbody class="text-paragraph-2 font-semibold">
            <tr v-for="cinema in cinemaSelects" :key="cinema.id"
              class="grid grid-cols-[repeat(4,149px)] gap-4 md:grid-cols-[1fr,160px,344px,1fr] border-b-[1px] border-divider-1 border-dashed">
              <td class="py-4">{{ cinema.title }}</td>
              <td class="py-4">{{ cinema.cinemaFields.cinema_year }}</td>
              <td class="py-4">{{ cinema.cinemaFields.cinema_mood }}</td>
              <td class="py-4 text-right">{{ cinema.cinemaFields.cinema_why_watch }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
