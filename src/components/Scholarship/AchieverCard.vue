<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const UniName = ref();

const props = defineProps(["data"]);
console.log("img ", props.data)
const studentImage = ref("");
studentImage.value =
  "http://adminpanel.msieducation.edu.mm/postImage/" + props.data.student_image;

// {{ props.data?.scholar_type.uni_id }}
onMounted(() => {
  if (props.data) {
    const fetchUni = async () => {
      const res = await axios.get(
        "university-lists/university/" + props.data?.scholar_type.uni_id
      );
      UniName.value = res.data?.university[0]?.university_name;
    };
    fetchUni();
  }
});
</script>
<template>
  <div
    class="md:w-[517px] md:h-[320px] card-achiever md:py-[94px] ssm:py-[40px] md:px-[32px]"
  >
    <div class="flex items-center">
      <div class="w-[131px] h-[131px]">
        <img
          class="rounded-full w-[100%] h-[100%]"
          :src="studentImage"
          alt=""
        />
      </div>
      <div class="md:ml-[35px] ssm:ml-4">
        <h1
          class="text-[#205887] text-[15px] font-[600] uppercase shadow-title"
        >
          {{ props.data.scholar_type.scholar_name }}
        </h1>
        <h1
          class="text-[#205887] text-[15px] font-[600] uppercase shadow-title"
        >
          {{ props.data.student_name }}
        </h1>
        <h1 class="text-[#205887] mt-3 text-[13px]">
          <span
            class="text-[#FE005F] text-[12px] font-[700] uppercase shadow-title"
            >{{ props.data.course_name }} </span
          >
          <span class="text-[11px] font-[400] uppercase shadow-title"
            > ({{ props.data.country.name }}) </span
          >
          <!-- <span
            class="text-[11px] text-[#205887] mt-3 font-[400] uppercase shadow-title"
          >
            HORIZON INTL SCHOOL (YANGON)
          </span> -->
        </h1>
        <!-- <h1
          class="text-[#FE005F] font-[600] uppercase text-[11.5px] mt-3 shadow-title"
        >
          ({{ props.data?.university_name }})
        </h1> -->
      </div>
    </div>
  </div>
</template>
