<template>
  <div>
    <div class="bg-white border">
      <img :src="props.event.image" alt="" class="border-b" />
      <div class="p-3 space-y-6">
        <h3 class="text-2xl font-semibold capitalize mb-3">
          {{ props.event.title }}
        </h3>
        <p>{{ props.event.brief }}</p>
        <div class="flex justify-end">
          <router-link class="inline-block p-2 border border-black" :to="{name:'events.detail', params: {id: props.event.id}}">See More ...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from '../partials/Link.vue';

const props = defineProps(["event"]);
</script>

<style lang="scss" scoped></style>
