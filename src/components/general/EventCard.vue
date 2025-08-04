<template>
  <div class="m-3 shrink-0">
    <router-link
      :to="{ name: 'event.upcomingDetail', params: { id: props.event.id } }"
    >
      <div
        class="overflow-hidden transition bg-white border cus-standout hover:border-black"
      >
        <img
          :src="props.event.imageURL"
          alt=""
          class="border-b w-[600px] md:h-[300px] ssm:h-[150px] select-none"
        />
        <div class="grid grid-cols-4 gap-3 p-3" v-if="detail">
          <div class="col-span-1">
            <div class="flex flex-col items-center p-2">
              <div class="font-bold text-cus-primary-pale">
                {{ getShortMonth(props.event.date) }}
              </div>
              <div class="font-bold">{{ getDay(props.event.date) }}</div>
            </div>
          </div>
          <div class="col-span-3 space-y-2">
            <h3 class="font-semibold capitalize truncate text-md">
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
console.log('props ',props.event)
</script>

<style lang="scss" scoped></style>
