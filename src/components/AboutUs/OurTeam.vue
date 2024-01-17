<template>
  <div class="container px-6">
    <div class="space-y-12">
      <h1 class="cus-heading text-cus-secondary">
        <span class="text-6xl !text-cus-primary">Our</span> Excellent Team
      </h1>
      <p class="cus-paragraph">
        Our team of experts has years of experience and in-depth knowledge of
        the education systems, institutions, and cultures of the countries where
        we provide our services. We offer a wide range of services, including
        counseling, admission support, visa assistance, and pre-departure
        briefings, ensuring that students have all the necessary information to
        make informed decisions about their academic futures.
      </p>
      <div
        class="flex flex-wrap justify-center items-start gap-3 overflow-hidden transition-all duration-500">
        <template v-if="team.length > 0">
          <div v-for="(member, index) in filteredTeam" :key="index" :style="{ 'background-image': 'url(' + member.image + ')' }"
            class="rounded-lg shadow bg-[length:100%_100%] bg-no-repeat flex flex-col justify-end h-[400px] w-[100%] sm:w-[40%] md:w-[27%] lg:w-[23%] sm:h-[340px] md:h-[340px] lg:h-[360px]">
            <div
              class="group member transition-all text-cus-primary p-3 backdrop-blur-sm bg-white bg-opacity-70 overflow-hidden space-y-1">
              <h2 class="text-cus-primary text-sm font-bold">
                {{ member.name }}
              </h2>
              <div>
                <h3 class="text-cus-primary text-sm font-bold">
                  {{ member.position }}
                </h3>
                <h3 class="text-cus-primary text-sm font-bold">
                  {{ member.subPosition }}
                </h3>
              </div>
              <div class="extra-content">
                <h3 class="text-cus-primary text-sm font-bold">
                  {{ member.phone }}
                </h3>
                <h3 class="text-cus-secondary text-sm font-bold break-all">
                  {{ member.email }}
                </h3>
                <h3 v-if="member.secondEmail" class="text-cus-primary text-sm font-bold">
                  {{ member.secondEmail }}
                </h3>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="text-center">
        <ChevronDownIcon :class="{ 'rotate-180': showAllMember }" @click="showAllToggle"
          class="transition w-12 h-12 mx-auto hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { baseNumbers } from "../../constants/base.js"
import koHtay from "@/assets/img/AboutUs/OurTeam/33.jpg";
import phyuphyuThant from "@/assets/img/AboutUs/OurTeam/10.jpg";
import soeMoeMin from "@/assets/img/AboutUs/OurTeam/31.jpg";
import myaTheingi from "@/assets/img/AboutUs/OurTeam/15.jpg";
import shweYee from "@/assets/img/AboutUs/OurTeam/15.jpg";
import noeNoeHlaHtay from "@/assets/img/AboutUs/OurTeam/15.jpg";
import soeYu from "@/assets/img/AboutUs/OurTeam/5.jpg";
import yamoneKhin from "@/assets/img/AboutUs/OurTeam/15.jpg";
import chueHayMann from "@/assets/img/AboutUs/OurTeam/15.jpg";
import soeSoeSan from "@/assets/img/AboutUs/OurTeam/15.jpg";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const showAllMember = ref(false);
const filteredTeam = ref([])

const showAllToggle = () => {
  showAllMember.value = !showAllMember.value;
  filterTeam()
};

const team = ref([
  {
    name: "Soe Moe Min",
    position: "Director",
    phone: "+ 95 9 263 662 172",
    email: "finance.affairs@msieducation.edu.mm",
    image: soeMoeMin,
  },
  {
    name: "Phyu Phyu Thant",
    position: "Operation Manager",
    phone: "+ 95 9 431 886 91",
    email: "admissions@msieducation.edu.mm",
    secondEmail: "IR.department@msieducation.edu.mm",
    image: phyuphyuThant,
  },
  {
    name: "Mya Theingi",
    position: "Admin Executive &",
    subPosition: "Academic Consultant",
    phone: "+ 95 9 402 517 549",
    email: "info@msieducation.edu.mm",
    image: myaTheingi,
  },
  {
    name: "Ko Htay",
    position: "Digital Marketing Analytic",
    phone: "+ 95 9 757 520 086",
    email: "info@msieducation.edu.mm",
    image: koHtay,
  },
  {
    name: "Shwe Yee",
    position: "Senior International Admissions",
    phone: "+ 95 9 769 167 768",
    email: "admissions@msieducation.edu.mm",
    image: shweYee,
  },
  {
    name: "Noe Noe Hla Htay",
    position: "Senior International Admissions",
    phone: "+ 95 9 671 723 315",
    email: "admissions@msieducation.edu.mm",
    image: noeNoeHlaHtay,
  },
  // {
  //   name: "Soe Yu",
  //   position: "Administrative Executive",
  //   phone: "+ 95 9 976 135 537",
  //   email: "info@msieducation.edu.mm",
  //   image: soeYu,
  // },
  {
    name: "Yamone Khin",
    position: "Junior Adminstrative",
    phone: "+ 95 9 978 753 787",
    email: "info@msieducation.edu.mm",
    image: yamoneKhin,
  },
  {
    name: "Chue Hay Mann",
    position: "Senior Academic Consultant",
    phone: "+ 95 9 424 022 511",
    email: "info@msieducation.edu.mm",
    image: chueHayMann,
  },
  {
    name: "Soe Soe San ",
    position: "Junior Academic Consultant",
    phone: "+ 95 9 254 409 649",
    email: "info@msieducation.edu.mm",
    image: soeSoeSan,
  },
]);

const filterTeam = () => {
  let cutter = 4
  if (window.innerWidth < baseNumbers.xl) cutter = 4
  if (window.innerWidth < baseNumbers.lg) cutter = 3
  if (window.innerWidth < baseNumbers.md) cutter = 2
  if (window.innerWidth < baseNumbers.sm) cutter = 1
  
  if (showAllMember.value) {
    filteredTeam.value = [
      ...team.value
    ]
  } else {
    filteredTeam.value =
      team.value.slice(0, cutter)
  }
}

onMounted(() => {
  filterTeam()
})
</script>

<style scoped>
.extra-content {
  transition: all 300ms;
  height: 0;
}

.member .extra-content {
  overflow: hidden;
}

.member:hover .extra-content {
  height: 60px;
}
</style>
