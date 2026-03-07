<script setup lang="ts">

</script>

<template>
  <header class="layout sticky z-50 top-0 px-[10px]" id="header">
    <img src="~/assets/img/logo-header.png" id="logo" alt="Grain Archive logo"
      class="hidden md:block w-11 h-11 absolute top-0 left-[20px] bottom-0 my-auto" />
    <nav>
      <ul class="font-semibold text-paragraph-2 text-lg md:text-xl flex gap-2 flex-wrap justify-center py-4">
        <li>
          <NuxtLink to="/" activeClass="active"
            class="inline-block px-3 py-2 md:py-3 bg-background-5 md:hover:bg-background-4 transition-colors duration-300 ease-out">
            Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/archive" activeClass="active"
            class="inline-block px-3 py-2 md:py-3 bg-background-6 rounded-full md:hover:bg-background-4 transition-colors duration-300 ease-out">
            Archive</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" activeClass="active"
            class="inline-block px-3 py-2 md:py-3 bg-background-7 rounded-md md:hover:bg-background-4 transition-colors duration-300 ease-out">
            About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
