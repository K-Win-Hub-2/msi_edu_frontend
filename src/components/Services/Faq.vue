<template>
  <div>
    <div class="border-2 rounded-lg h-auto overflow-hidden">
      <h1
        class="md:cus-heading ssm:text-md ssm:font-semibold text-white bg-[#8BB5FC] text-center p-3"
      >
        Frequently Asked Questions
      </h1>
    <div v-if="faqs">
      <fwb-accordion>
        <fwb-accordion-panel v-for="faq in faqs" :key="faq.id">
          <fwb-accordion-header class="">
            <p class=" font-semibold">{{ faq.question }}</p>
          </fwb-accordion-header>
          <fwb-accordion-content>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              {{ faq.answer }}
            </p>
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>

      </div>
      <div class="text-center text-xl py-1 font-bold text-secondary-700" v-else>
        There is no data
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { CAccordion,CAccordionItem , CAccordionHeader,CAccordionBody} from '@coreui/vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
const faqs = ref();
const isOpen = ref(false) // Initial value

import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'

import { onMounted, ref } from "vue";
import FaqData from "./FaqData.vue";
import { watch } from "vue";
const props = defineProps(["id"]);

const fetchFaq = async (countryId) => {
  const res = await axios.get("/country-lists");
  faqs.value = res.data.countries.filter(el=>el.id == countryId)[0].faqs
};

watch(
  () => props.id, (newId) => {
    fetchFaq(newId);
  }
);

onMounted(() => {
  fetchFaq(props.id);
});
</script>


