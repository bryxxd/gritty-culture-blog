<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="text-center p-[70px_0_150px] md:p-[120px_0_190px]">
        <h1 class="text-[clamp(64px,20vw,160px)]/[80%] font-tiltWarp font-normal">{{ title }}</h1>
    </div>
</template>