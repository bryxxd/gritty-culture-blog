<script setup lang="ts">
useHead({
    title: 'Archive',
    meta: [
        {
            name: 'description',
            content: 'Explore the Gritty Culture Blog archive, featuring a comprehensive collection of articles on music, film, and culture. Dive into our extensive library of in-depth analyses, reviews, and cultural commentary.',
        },
    ],
});

const { getArticles } = useArticles();
const { data: articles } = await useAsyncData('articles-archive', () => getArticles());

</script>
<template>
    <HeaderSection title="Archive" />

    <section class=" text-lg md:text-xl mt-[10px]">
        <div class="layout">
            <template v-if="articles && articles.length > 0">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <ArticleList v-for="article in articles" :key="article.id" :article="article" />
                </div>
            </template>
            <template v-else>
                <NoPost message="No articles available." class="text-paragraph-2" />
            </template>
        </div>
    </section>

    <Marquee marquee-text="End of reel   ·  Fin  ·  "
        custom-class="text-[40px] md:text-[64px] lg:text-[80px] py-[64px] md:py-[80px] lg:py-[120px] font-instrumentSerif italic" />

</template>
