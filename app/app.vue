<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Gritty Culture Blog` : 'Gritty Culture Blog'
  },
});

useSeoMeta({
    title: 'Gritty Culture Blog',
    description: 'Your go-to source for in-depth articles on music, film, and culture. Explore our latest posts, featured albums, and cinema selects.',
    ogTitle: 'Gritty Culture Blog',
    ogDescription: 'Your go-to source for in-depth articles on music, film, and culture. Explore our latest posts, featured albums, and cinema selects.',
    ogImage: '/meta/ogp-img.jpg'
})
</script>
<template>
    <NuxtLoadingIndicator color="#FF5700" />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>