<template>
  <div class="mt-5">
    <div class="text-center">
      <!-- <h1 class="text-black font-bold text-xl">University Detail</h1> -->
      <div class="mx-[300px] mt-5">
        <img
          :src="viewImage({ photo: universities.university_photo })"
          class="h-[400px] w-[1000px]"
        />
      </div>
    </div>
    <div class="mt-5 text-center">
      <h1 class="font-bold mt-5 text-xl">{{ universities.university_name }}</h1>
      <div class="text-center mx-[100px] border shadow-xl font-bold my-5 p-5">
        <p>{{ universities.introduction }}</p>
      </div>
    </div>
    <div class="mt-11">
      <h1 class="text-black font-bold text-xl ml-11">Available Program</h1>
      <div class="ml-[100px] mt-5">
        <ul class="">
          <li>{{ universities.program_list }}</li>
        </ul>
      </div>
    </div>
    <div class="mt-11">
      <h1 class="text-black font-bold text-xl ml-11">Scholorshiip offers</h1>
      <div class="ml-[100px] mt-5">
        <ul class="">
          <li>{{ universities.scholarship_percent }}</li>
        </ul>
      </div>
    </div>
    <div class="my-5 ml-5">
      <p class="text-black font-bold">
        Website:{{ universities.university_link }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { viewImage } from "../../utils";
import { useUniversityStore } from "../../stores/universities";
import { onMounted, ref } from "vue";
const universities = ref({});
const universityStore = useUniversityStore();
const props = defineProps(["id"]);
onMounted(() => {
  console.log(props.id);
});
const fetchData = async () => {
  const res = await universityStore.fetchUniversity(props.id);
  const { university } = res.data;
  universities.value = university;
  console.log("universities", universities);

  console.log(res.data);
};

//   const {university} = res.data
//   universities.value = university
//   console.log("universities",data)

onMounted(() => {
  fetchData();
  console.log(props.id);
});
</script>

<style scoped></style>
