<script setup>
import Button from "@/components/partials/Button.vue";
import { onMounted, ref } from "vue";
import { universities } from "../../mocks/universities";
import { programs } from "../../mocks/programs";
import Loading from "../general/Loading.vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import { useRouter } from "vue-router";
const countryData = ref();
const universityList = ref();
const programList = ref();
const selectedUniversity = ref();
const selectedProgram = ref();
const $toast = useToast();
const router = useRouter();
const selectedCountry = ref();

const isLoading = ref(true);

const filters = ref({
  // country: { name: 'Singapore', slug: 'singapore' },
});

const currentUniversities = ref([]);

const currentPrograms = ref([]);

const updateCurrentCountries = () => {
  currentUniversities.value = universities.filter(
    (university) => university.country === filters.value.country.slug
  );
};

const updateCurrentPrograms = () => {
  currentPrograms.value = programs.filter(
    (program) =>
      program.country === filters.value.country.slug &&
      program.university === filters.value.uni.slug
  );

  console.log(currentPrograms.value);
};

const updateSelectedUniversity = () => {
  filters.value.uni = currentUniversities.value[0];
};

const updateSelectedProgram = () => {
  filters.value.program = currentPrograms.value[0];
};

const handleCountrySelect = (payload) => {
  if (payload.index !== "country") {
    filters.value.country = payload;
    updateCurrentCountries();
    updateSelectedUniversity();
    updateCurrentPrograms();
    updateSelectedProgram();
  }
};

const handleUniversitySelect = (payload) => {
  if (payload.index !== "university") {
    console.log(payload);
    filters.value.uni = { name: payload.name, slug: payload.slug };
    updateCurrentPrograms();
    updateSelectedProgram();
  }
};

const handleProgramSelect = (payload) => {
  filters.value.program = { title: payload.title, slug: payload.slug };
};

// fetch country
const fetchCountry = async () => {
  const res = await axios.get("country-lists");
  selectedCountry.value = res.data.countries[0].id;
  countryData.value = res.data.countries;
};

// fetch university
const fetchUniversity = async () => {
  const res = await axios.get("university-lists/partner/yes");
  // console.log("uni", res.data.university);
  selectedUniversity.value = res.data.university[0].id;
  universityList.value = res.data.university;
};

// fetch  program
const fetchProgram = async () => {
  const res = await axios.get("program-lists");
  programList.value = res.data.programLists;
  selectedProgram.value = res.data.programLists[0].id;
};

// redirect Page

// fetch program

const searchCountry = async () => {
  const res = await axios.get(
    "university-lists/partner/yes/country/" + selectedCountry.value
  );
  if (res.data.university.length) {
    const uni = res.data.university.filter((data) => {
      return data.id == selectedUniversity.value;
    });
    // const program = programList.value.filter((p) => {
    //   return p.id == uni[0].program_id;
    // });
    // if (selectedProgram.value == program[0].id) {
    router.push({ name: "universities.detail", params: { id: uni[0].id } });
    // }
  } else {
    $toast.error("Not Found !", { position: "top-right" });
  }
};
const searchHandle = () => {
  searchCountry();
  // console.log(selectedCountry.value, selectedUniversity.value);
};

onMounted(() => {
  isLoading.value = false;
  fetchProgram();
  fetchCountry();
  fetchUniversity();
});
</script>

<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <div
      class="flex md:flex-col ssm:mt-3 md:mt-0 ssm:flex-col md:space-y-5 lg:space-y-0 lg:flex-row justify-between items-center"
    >
      <div class="flex flex-col select-none">
        <h1 class="cus-subheading text-cus-primary uppercase">
          find your right
        </h1>
        <h1 class="cus-subheading text-cus-secondary uppercase">
          education pathway
        </h1>
      </div>
      <div class="flex ssm:flex-col md:flex-row gap-6">
        <div class="lg:w-[180px]">
          <div class="relative" data-te-dropdown-ref>
            <select
              v-if="countryData"
              name=""
              v-model="selectedCountry"
              class="border min-w-[200px] md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            >
              <option
                class="text-[13px]"
                v-for="data in countryData"
                :key="data.id"
                :value="data.id"
              >
                {{ data.name }}
              </option>
            </select>
            <!-- <button
              class="w-full border md:text-md ssm:text-[16px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              type="button"
              id="dropdownMenuButton2"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {{ filters?.country?.name ?? "Country" }}
              <span class="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button> -->
            <!-- <ul
              class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-auto border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              <li v-for="(country, index) in countries" :key="index">
                <div
                  @click="handleCountrySelect({ name: country, slug: index })"
                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  data-te-dropdown-item-ref
                >
                  {{ country }}
                </div>
              </li>
            </ul> -->
          </div>
        </div>
        <div class="w-[200px]">
          <div class="relative" data-te-dropdown-ref>
            <select
              v-if="universityList"
              name=""
              v-model="selectedUniversity"
              class="border md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            >
              <option
                class="overflow-x-scroll text-[13px]"
                v-for="data in universityList"
                :key="data.id"
                :value="data.id"
              >
                {{ data.university_name }}
              </option>
            </select>
            <!-- <button
              class="w-full border cus-rounded bg-white flex items-center justify-between overflow-auto whitespace-nowrap px-6 pt-2.5 pb-2 md:text-md ssm:text-[16px] font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              href="#"
              type="button"
              id="dropdownMenuButton3"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {{ filters?.uni?.name ?? "University" }}
              <span class="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button> -->
            <!-- <ul
              class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-auto border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
              aria-labelledby="dropdownMenuButton3"
              data-te-dropdown-menu-ref
            >
              <li v-for="(uni, index) in currentUniversities" :key="index">
                <div
                  @click="handleUniversitySelect(uni)"
                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  data-te-dropdown-item-ref
                >
                  {{ uni.name }}
                </div>
              </li>
            </ul> -->
          </div>
        </div>
        <div class="lg:w-[170px] md:w-[200px] md:-ml-5">
          <div class="relative" data-te-dropdown-ref>
            <select
              v-if="programList"
              v-model="selectedProgram"
              name=""
              class="border md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            >
              <option
                class="text-[13px]"
                v-for="data in programList"
                :key="data.id"
                :value="data.id"
              >
                {{ data.name }}
              </option>
            </select>
            <!-- <a
              class="w-full border cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-6 pt-2.5 pb-2 md:text-md ssm:text-[16px] font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              href="#"
              type="button"
              id="dropdownMenuButton2"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {{ filters.program?.title ?? "Program" }}
              <span class="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a> -->
            <!-- <ul
              class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              <li v-for="(program, index) in currentPrograms" :key="index">
                <div
                  @click="handleProgramSelect(program)"
                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  data-te-dropdown-item-ref
                >
                  {{ program.title }}
                </div>
              </li>
            </ul> -->
          </div>
        </div>

        <Button
          @click="searchHandle"
          class="flex justify-center md:ml-4 md:px-6 items-center"
          type="gradient"
          >Search</Button
        >
      </div>
    </div>
  </template>
</template>
