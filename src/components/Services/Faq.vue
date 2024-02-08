<template>
  <div class="border-2 rounded-lg h-auto overflow-hidden">
    <h1
      class="md:cus-heading ssm:text-md ssm:font-semibold text-white bg-[#8BB5FC] text-center"
    >
      Frequently Asked Questions
    </h1>
    <div class="" v-if="faqs">
      <div class="py-2 px-4" v-for="faq in faqs" :key="faq.id">
        <FaqData :faq="faq" />
      </div>
    </div>
    <div class="text-center text-xl py-1 font-bold text-secondary-700" v-else>
      There is no data
    </div>
  </div>
  <!-- 
  <div id="accordionExample">
    <template v-for="question in questions">
      <div class="border border-neutral-200 bg-white rounded-2xl shadow-2xl">
        <h2 class="mb-0" :id="question.id">
          <button
            class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            :data-te-target="`#collapse${question.id}`"
            aria-expanded="false"
            :aria-controls="`collapse${question.id}`"
          >
            {{ question.heading }}
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          :id="`collapse${question.id}`"
          class="!visible hidden bg-gray-100"
          data-te-collapse-item
          :aria-labelledby="`heading${question.id}`"
          data-te-parent="#accordionExample"
        >
          <ul class="px-5 py-4 space-y-3">
            <template v-for="answer in question.answers">
              <li>- {{ answer }}</li>
            </template>
          </ul>
        </div>
      </div>
    </template>
  </div> -->
</template>

<script setup>
import axios from "axios";
const faqs = ref();
import { onMounted, ref } from "vue";
import FaqData from "./FaqData.vue";
const props = defineProps(["id"]);
const fetchFaq = async () => {
  const res = await axios.get("/faqs/country/" + props.id);
  faqs.value = res.data.faqs;
};
onMounted(() => {
  fetchFaq();
});
</script>
