<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const UniName = ref();

const props = defineProps(["data"]);
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
    <div class="card-achiever md:w-[517px] md:h-[200px] bg-white rounded-xl shadow-lg md:px-8 md:py-8 ssm:px-4 ssm:py-6">
      <div class="flex flex-col justify-center h-full space-y-4">
    
        <!-- Student Name -->
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#205887]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A4 4 0 007 21h10a4 4 0 001.879-3.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 class="text-[#205887] text-[16px] font-semibold uppercase shadow-title">
            {{ props.data.student_name }}
          </h1>
        </div>

        <!-- Course and Country -->
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FE005F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0L3 9m9 5l9-5" />
          </svg>
          <div class="text-[13px] font-bold uppercase text-[#FE005F] shadow-title">
            {{ props.data.course_name }}
          </div>
          <span class="text-[11px] font-medium uppercase text-[#205887] shadow-title">
            ({{ props.data.country.name }})
          </span>
        </div>

        <!-- Optional: School Name -->
        <!--
        <div class="flex items-center mt-1 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#205887]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1.664-1.664a4.992 4.992 0 016.936 0L13 10l-1.664 1.664a4.992 4.992 0 01-6.936 0L3 10z" />
          </svg>
          <span class="text-[11px] text-[#205887] font-medium uppercase shadow-title">
            Horizon Intl School (Yangon)
          </span>
        </div>
        -->

      </div>
    </div>


</template>
