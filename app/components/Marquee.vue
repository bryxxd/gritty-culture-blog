<script setup lang="ts">
withDefaults(defineProps<{
    marqueeText: string,
    customClass?: string
}>(), {
    customClass: 'text-lg/normal md:text-xl text-paragraph-3 py-4 font-semibold'
})

</script>
<template>
    <div :class="customClass" class="whitespace-nowrap overflow-hidden">        
        <div
            class="animate-marquee-sm md:animate-marquee-md lg:animate-marquee hover:[animation-play-state:paused] flex gap-4 will-change-transform">
            <p v-for="n in 10" :key="n">
                {{ marqueeText }}
            </p>
        </div>
    </div>

</template>