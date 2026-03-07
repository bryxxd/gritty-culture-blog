<script setup lang="ts">
const route = useRoute();
useHead({
  title: route.params.slug as string,
  meta: [
    {
      name: "description",
      content: `Read our latest article: ${route.params.slug as string}. Explore insights, trends, and expert opinions on our blog. Stay informed with our in-depth analysis and engaging content.`,
    },
  ],
});

const { getArticles, getArticleBySlug } = useArticles();
const { data: article } = await useAsyncData(
  `article-${route.params.slug}`,
  () => getArticleBySlug(route.params.slug as string),
);
const { data: moreArticles } = await useAsyncData(
  `articles-${route.params.slug}`,
  () =>
    getArticles(3, article.value?.databaseId ? [article.value.databaseId] : []),
);
</script>
<template>
  <div class="layout">
    <HeaderSection
      custom-class="text-[clamp(40px,10vw,110px)]/[95%] p-[89px_0_24px] md:pt-[118px]"
      :title="article?.title"
    />
    <p
      class="text-center font-instrumentSerif italic text-[clamp(25px,8vw,80px)] flex items-start justify-center gap-6"
    >
      <span>{{ article?.terms.nodes[0]?.name }}</span>
      <span>·</span>
      <NuxtTime
        :datetime="article?.date"
        year="numeric"
        month="long"
        day="numeric"
      />
    </p>
    <figure>
      <NuxtImg
        :src="article?.articleFields?.article_header?.node?.sourceUrl"
        :alt="article?.articleFields?.article_header?.node?.altText"
        placeholder
        class="w-full rounded-lg mt-[110px] object-cover md:mt-[170px] h-[320px] md:h-[600px] lg:h-[700px]"
      />
    </figure>
  </div>

  <section class="py-[74px] md:py-[130px]">
    <div class="layout">
      <div class="px-10 text-xl font-semibold flex flex-col md:flex-row gap-10">
        <p class="flex-shrink-0 w-auto md:w-[200px]">Why this exists</p>
        <p class="tracking-tight">
          {{ article?.articleFields?.article_intro }}
        </p>
      </div>
    </div>
  </section>

  <section class="text-paragraph-2">
    <div class="layout">
      <div class="bg-background-3 rounded-lg">
        <div class="md:max-w-[600px] mx-auto py-[64px] md:py-[120px] px-5">
          <div class="cms-rich-text" v-html="article?.content"></div>
          <div
            class="mt-[64px] md:mt-[120px] pt-10 border-t-[1px] border-dashed border-divider-1"
          >
            <img
              src="~/assets/img/article/footer-icons.png"
              class="max-w-[140px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-10px text-headline-1 mt-[10px]">
    <div class="layout">
      <div
        class="py-[64px] md:py-[120px] bg-background-2 rounded-lg px-[10px] md:px-10 grid grid-cols-1 lg:grid-cols-[175px_1fr] gap-6"
      >
        <h2 class="text-[clamp(20px,3vw,24px)] font-tiltWarp">More stories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <template v-for="article in moreArticles" :key="article.id">
            <NuxtLink
              :to="{ name: 'article-slug', params: { slug: article.slug } }"
              class="font-semibold group"
            >
              <div class="overflow-hidden">
                <img
                  :src="article.featuredImage?.node.sourceUrl"
                  :alt="article.featuredImage?.node.altText"
                  class="w-full h-full md:h-[380px] object-cover md:group-hover:scale-[1.1] md:group-hover:blur-md transition-blur transition-scale duration-300 ease-out"
                />
              </div>
              <div class="text-lg/[140%] md:text-xl mt-6">
                <h3>
                  {{ article.title }}
                </h3>
                <div class="flex gap-1 items-center text-paragraph-3">
                  <p>{{ article.terms.nodes[0]?.name }}</p>
                  <p>·</p>
                  <NuxtTime
                    :datetime="article.date"
                    year="numeric"
                    month="long"
                    day="numeric"
                  />
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </section>

  <Marquee
    marquee-text="End of reel   ·  Fin  ·  "
    custom-class="text-[40px] md:text-[64px] lg:text-[80px] py-[64px] md:py-[80px] lg:py-[120px] font-instrumentSerif italic"
  />
</template>
