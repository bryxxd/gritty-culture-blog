<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>
<template>
      <p class="text-center text-3xl md:text-6xl py-8">{{ message }}</p>
</template>
