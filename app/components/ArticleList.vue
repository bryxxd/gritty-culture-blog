<script setup lang="ts">

defineProps<{
  article: {
    id: number;
    title: string;
    slug: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    };
    terms: {
      nodes: {
        name: string
      }[];
    };
  };
}>();
</script>

<template>
  <div>
    <NuxtLink :to="`/article/${article.slug}`"
      class="relative block h-[460px] md:h-[500px] lg:h-[700px] group rounded-lg overflow-hidden">
      <img :src="article.featuredImage?.node.sourceUrl" :alt="article.featuredImage?.node.altText"
        class="rounded-lg w-full h-full object-cover md:group-hover:scale-[1.1] md:group-hover:blur-md transition-blur transition-scale duration-300 ease-out" />
      <div
        class="absolute z-20 rounded-md bottom-[10px] mx-auto left-0 right-0 w-[calc(100%-20px)] bg-[#ffffff33] backdrop-blur-lg p-3">
        <h2 class="text-xl md:text-2xl font-semibold">{{ article.title }}</h2>
        <div class="flex gap-1 items-center">
          <p>{{ article.terms.nodes[0]?.name }}</p>
          <p>·</p>
          <NuxtTime :datetime="article.date" year="numeric" month="long" day="numeric" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>