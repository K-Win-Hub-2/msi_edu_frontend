<template>
  <div class="flex flex-col space-x-2 lg:flex-row space-y-4">
    <div class="">
      <div
        class="lg:w-[600px] h-[610px] lg:h-[500px] bg-cus-primary rounded-tr-[5rem] relative -translate-x-10"
      >
        <img
          src="../../assets/img/AboutUs/partner.jpg"
          class="rounded-tr-[5rem] absolute translate-x-10 translate-y-14"
          alt=""
        />
      </div>
    </div>
    <div class="space-y-3 pl-10">
      <h1 class="mt-5 text-4xl text-cus-secondary font-bold ">Why MSI?</h1>
      <p class="cus-paragraph mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
        quisquam enim ipsa nihil, dolore velit architecto consequuntur
        blanditiis? Beatae explicabo excepturi corrupti ipsa eveniet labore
        architecto iusto dolores adipisci!
      </p>
      <ul class="grid grid-cols-2">
        <li v-for="school in schools" class="flex my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-3 text-cus-primary rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >{{ school.name }}
        </li>
      </ul>
      <Link type="primary" :link="{name: 'services'}">Know More</Link>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Link from "@/components/partials/Link.vue";

const schools = ref([
  {
    name: 'Webster University (U.S.A)'
  },
  {
    name: 'KDU University (Malaysia)'
  },
  {
    name: 'PSB Academy (Singapore)'
  },
  {
    name: 'SIM Global Education (Singapore)'
  },
  {
    name: "Taylor's University(Malaysia)"
  },
  {
    name: "TMC Academy (Singapore)"
  },
  {
    name: "B.H.M.S (Switzerland)"
  },
  {
    name: "MDIS (Singapore Campus)"
  },
  {
    name: "Asia Pacific University (Malaysia)"
  },
  {
    name: "James Cook University (Australia, Singapore Campus)"
  },
])
</script>