<template>
  <div class="shrink-0 m-3">
    <router-link
      :to="{ name: 'events.detail', params: { id: props.event.id } }"
    >
      <div
        class="bg-white border cus-standout overflow-hidden hover:border-black transition"
      >
        <img :src="props.event.image" alt="" class="border-b select-none" />
        <div class="grid grid-cols-4 p-3 gap-3" v-if="detail">
          <div class="col-span-1">
            <div class="p-2 flex flex-col items-center">
              <div class="font-bold text-cus-primary-pale">
                {{ getShortMonth(props.event.date) }}
              </div>
              <div class="font-bold">{{ getDay(props.event.date) }}</div>
            </div>
          </div>
          <div class="col-span-3 space-y-2">
            <h3 class="text-md font-semibold capitalize truncate">
              {{ props.event.title }}
            </h3>

            <p class="text-sm truncate-two" v-html="props.event.brief"></p>
            <!-- <div class="flex justify-end">
            <router-link
              class="inline-block p-2 border border-black"
              :to="{ name: 'events.detail', params: { id: props.event.id } }"
              >See More ...</router-link
            >
          </div> -->
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { getShortMonth, getDay } from "@/utils/date.js";

const props = defineProps(["event", "detail"]);
</script>

<style lang="scss" scoped></style>
