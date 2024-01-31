<template>
  <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
    <router-link
      :to="{ name: url.url, hash: url.hash }"
      class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
      :class="{ 'text-cus-secondary': isActive }"
      data-te-nav-link-ref
      >{{ url.name }}</router-link
    >
    <slot name="childElement"></slot>
  </li>
</template>
<!-- / dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:[&.active]:text-zinc-400 -->
<script setup>
defineProps(["url", "isActive"]);
</script>
