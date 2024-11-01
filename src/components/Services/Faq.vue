<template>
  <div class="border-2 rounded-lg h-auto overflow-hidden">
    <h1
      class="md:cus-heading ssm:text-md ssm:font-semibold text-white bg-[#8BB5FC] text-center"
    >
      Frequently Asked Questions
    </h1>
   <div v-if="faqs">
    <CAccordion :active-item-key="2" class="p-3" always-open v-for="faq in faqs" :key="faq.id">
  <CAccordionItem :item-key="faq.id">
    <CAccordionHeader>
 <strong>   {{ faq.question }}</strong>
    </CAccordionHeader>
    <CAccordionBody>
 {{faq.answer}}
    </CAccordionBody>
  </CAccordionItem>
 </CAccordion>
 </div>
    <div class="text-center text-xl py-1 font-bold text-secondary-700" v-else>
      There is no data
    </div>
  </div>

</template>

<script setup>
import axios from "axios";
import { CAccordion,CAccordionItem , CAccordionHeader,CAccordionBody} from '@coreui/vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const faqs = ref();

import { onMounted, ref } from "vue";
import FaqData from "./FaqData.vue";
const props = defineProps(["id"]);


const fetchFaq = async () => {
  const res = await axios.get("/country-lists");
  faqs.value = res.data.countries.filter(el=>el.id == props.id)[0].faqs
  console.log(res.data.countries.filter(el=>el.id == props.id)[0].faqs
,'data')
};
onMounted(() => {
  fetchFaq();
});
</script>
