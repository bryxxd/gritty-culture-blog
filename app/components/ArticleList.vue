<script setup lang="ts">
defineProps<{
  article: {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
  };
}>();
</script>

<template>
     <div >
        <a :href="`/articles/${article.id}`" class="relative block h-[460px] md:h-[500px] lg:h-[700px] group rounded-lg overflow-hidden">
          <img :src="article.image" alt=""
            class="rounded-lg w-full h-full object-cover md:group-hover:scale-[1.1] md:group-hover:blur-md transition-blur transition-scale duration-300 ease-out" />
          <div
            class="absolute z-20 rounded-md bottom-[10px] mx-auto left-0 right-0 w-[calc(100%-20px)] bg-[#ffffff33] backdrop-blur-lg p-3">
            <h2 class="text-xl md:text-2xl font-semibold">{{ article.title }}</h2>
            <div class="flex gap-1 items-center">
              <p>{{ article.category }}</p>
              <p>·</p>
              <p>{{ article.date }}</p>
            </div>
          </div>
        </a>
      </div>
</template>