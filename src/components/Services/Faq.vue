<template>
  <div>
    <div class="h-auto overflow-hidden border-2 rounded-lg">
      <h1
        class="md:cus-heading ssm:text-md ssm:font-semibold text-white bg-[#8BB5FC] text-center p-3"
      >
        Frequently Asked Questions
      </h1>

      <div v-if="faqs && faqs.length > 0">
        <fwb-accordion>
          <fwb-accordion-panel v-for="faq in faqs" :key="faq.id">
            <fwb-accordion-header>
              <p class="font-semibold">{{ faq.question }}</p>
            </fwb-accordion-header>
            <fwb-accordion-content>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                {{ faq.answer }}
              </p>
            </fwb-accordion-content>
          </fwb-accordion-panel>
        </fwb-accordion>
      </div>

      <div class="py-1 text-xl font-bold text-center text-secondary-700" v-else>
        There is no data
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";

import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from "flowbite-vue";

const props = defineProps(["id"]);

const faqs = ref([]);

// Fallback/hardcoded FAQs
const fallbackFaqs = [
  {
    id: 1,
    question:
      "Can students who haven't finished high school continue their international education?",
    answer:
      "You can apply to universities around the world by preparing international high school certificates such as GED and IGCSE. Otherwise, you can apply to community colleges in the United States with a Grade 9 certificate.",
  },
  {
    id: 2,
    question: "Which countries allow part-time jobs?",
    answer:
      "There are countries such as the UK, US, Australia, and Vietnam that allow part-time jobs by the government.",
  },
  {
    id: 3,
    question: "Which foreign countries have a valuable partnership with MSI?",
    answer:
      "We are applying to universities in countries such as the UK, US, Canada, Australia, Switzerland, and Southeast Asia. And we are also applying to universities chosen by students.",
  },
  {
    id: 4,
    question: "Is there a scholarship application service?",
    answer:
      "We are applying for scholarships at international public and private universities.",
  },
  {
    id: 5,
    question: "What other services does MSI offer besides school applications?",
    answer:
      "Students can take aptitude tests for free at the MSI office so that they can correctly decide on the subjects in which they are interested.",
  },
];

const fetchFaq = async (countryId) => {
  try {
    const res = await axios.get("/country-lists");
    const country = res.data.countries.find((el) => el.id == countryId);
    faqs.value = country?.faqs?.length ? country.faqs : fallbackFaqs;
  } catch (error) {
    faqs.value = fallbackFaqs;
  }
};

watch(
  () => props.id,
  (newId) => {
    fetchFaq(newId);
  }
);

onMounted(() => {
  fetchFaq(props.id);
});
</script>
