<script setup>
import axios from "axios";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Button from "../../../components/partials/Button.vue";
import { useAppStore } from "../../../stores/app";
const props = defineProps(["data"]);
const appStore = useAppStore();
const { emit } = defineEmits(["scholar"]);
const { scholarshipDetail, scholar } = storeToRefs(appStore);
const router = useRouter();
const scholarDetailModal = async (id) => {
  scholarshipDetail.value = true;
  scholar.value = [];
  const res = await axios.get(`scholarship-type-list/university/${id}`);
  if (res) {
    scholar.value = res.data.scholarshipTypeLists;
  }
  // localStorage.setItem(
  //   "scholar",
  //   JSON.stringify(res.data.scholarshipTypeLists)
  // );
};

const detail = () => {
  router.push({ name: "universities.detail", params: { id: props.data.id } });
};
</script>
<template>
  <div
    v-if="props.data"
    class="lg:w-[965px] md:w-[600px] w-[530px] flex lg:h-[500px] md:h-[400px] ssm:h-[320px] bg-carousel relative overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
  >
    <div class="lg:w-[407px] md:w-[280px] w-[280px] ssm:hidden md:block">
      <div class="-ml-16 md:-mt-10 lg:-mt-18 -mt-8">
        <img
          class="lg:w-[414.66px] md:w-[300px] md:h-[300.66px] w-[270px] h-[270px] lg:h-[414.66px] rounded-full"
          :src="props.data.imageURL"
          alt=""
        />
      </div>
    </div>
    <div class="lg:mt-[40px] mt-[14px] pl-2">
      <h1
        class="md:mt-5 ssm:text-[20px] ssm:mb-4 text-cus-primary text-shadow-lg lg:text-lg md:text-md text-[14px] lg:mb-[20px] md:mb-[4px] shadow-title"
      >
        {{ props.data.university_name }}
      </h1>
      <div class="flex items-center lg:mt-10 md:mt-5">
        <img
          class="md:mr-3 ssm:mr-1 md:w-8 md:h-8 ssm:w-5 ssm:h-5"
          src="@/assets/img/scholarship/Vector.svg"
          alt=""
        />
        <p
          class="md:text-[20px] ssm:text-[16px] font-semibold uppercase lg:min-w-[130px]"
        >
          Country:
          <span
            class="font-[500] lg:text-[20px] ssm:text-[16px] leading-[18px] text-black"
            >{{ props.data.country.name }}</span
          >
        </p>
      </div>

      <div class="flex items-center lg:my-7 my-3">
        <img
          src="@/assets/img/scholarship/MapPin.svg"
          class="md:mr-3 ssm:mr-1 md:w-8 md:h-8 ssm:w-5 ssm:h-5"
          alt=""
        />
        <p
          class="md:text-[20px] ssm:text-[16px] font-semibold uppercase lg:min-w-[130px]"
        >
          Location:
          <span
            class="font-[500] lg:text-[20px] ssm:text-[16px] leading-[18px] text-black"
          >
            {{ props.data.location }}</span
          >
        </p>
      </div>

      <div class="flex items-center my-3">
        <img
          src="@/assets/img/scholarship/Flag.svg"
          class="md:mr-3 ssm:mr-1 md:w-8 md:h-8 ssm:w-5 ssm:h-5"
          alt=""
        />
        <p
          class="md:text-[20px] ssm:text-[16px] font-semibold uppercase lg:min-w-[130px]"
        >
          <span> Founded:</span>
          <span
            class="font-[500] lg:text-[20px] md:text-[16px] leading-[18px] text-black"
            >{{ props.data.founded_year }}
          </span>
        </p>
      </div>
      <div class="float-right md:mr-[35px] mt-6 mr-[2px]">
        <div class="flex gap-x-1">
          <Button
            @click="scholarDetailModal(props.data.id)"
            class="text-md ssm:mr-7 ssm:px-[10px] ssm:py-[5px] md:px-[40px] px-[27px] lg:py-[15px] md:py-[10px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[9px] ssm:text-[14px]"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Scholarship Details</Button
          >
          <!-- <router-link
            :to="{
              name: 'universities.detail',
              params: { id: props.data.id },
            }"
          > -->
          <Button
            @click="detail"
            class="lg:px-[40px] text-md ssm:mr-7 sm:px-[30px] ssm:py-[5px] md:px-[40px] px-[27px] lg:py-[15px] md:py-[10px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[9px] ssm:text-[14px]"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >See More</Button
          >
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
