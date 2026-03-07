<script setup lang="ts">
withDefaults(defineProps<{
    title: string
    customClass?: string
}>(), {
    customClass: 'text-[clamp(64px,20vw,160px)]/[80%] p-[70px_0_150px] md:p-[120px_0_190px]'
})
</script>

<template>
    <div :class="customClass" class="text-center">
        <h1 class="font-tiltWarp font-normal">{{ title }}</h1>
    </div>
</template>