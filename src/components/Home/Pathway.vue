<script setup>
import Button from "@/components/partials/Button.vue";
import { onMounted, ref, watch } from "vue";
import { universities } from "../../mocks/universities";
import { programs } from "../../mocks/programs";
import Loading from "../general/Loading.vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import { useRouter } from "vue-router";

const $toast = useToast();
const router = useRouter();

const isLoading = ref(true);
const uniLoading = ref(false);
// option list
const countryList = ref();
const programList = ref();
const courseList = ref();

// selected data
const selectedCourse = ref("default");
const selectedProgramId = ref("default");
const selectedCountry = ref("default");
const selectedUniversity = ref();
const selectedProgram = ref();

const filteredUniversityList = ref([]);
const itemsPerShow = ref(6);
const currentIndex = ref(6);

const currentUniversities = ref([]);

const currentPrograms = ref([]);

// methods
const fetchCountries = async (setSelected = true) => {
  const res = await axios.get("country-lists");
  selectedCountry.value = setSelected
    ? res.data.countries[0]?.id
    : selectedCountry.value;
  countryList.value = res.data.countries;
};

const fetchPrograms = async () => {
  if (checkCountry()) {
    const res = await axios.get(
      "country-program-course-search/" + selectedCountry.value
    );
    const resProgramList = res.data.program_courses;
    programList.value = resProgramList.filter(
      (value, index, self) =>
        self.findIndex((item) => item.id === value.id) === index
    );
  }
  selectedProgramId.value = "default";
  selectedProgram.value = {};
};

const fetchCourses = async () => {
  if (checkCountry() && checkProgramId()) {
    let payload = {
      country_id: checkCountry() ? selectedCountry.value : null,
      program_id: checkProgramId() ? selectedProgramId.value : null,
    };

    const res = await axios.post(
      "courses?country_id=" +
        payload.country_id +
        "&program_id=" +
        payload.program_id
    );

    if (res.data.status == "success") {
      let courses = [];
      const courseArray = res.data.courses;
      courseArray.forEach((course) => {
        courses = [...courses, ...course.course_name.split(",")];
      });

      const formattedArray = courses.map((course) => course.trim());

      courseList.value = [
        ...new Set(formattedArray.filter((value) => value != "")),
      ];
      selectedCourse.value = "default";

      return;
    }
  }

  selectedCourse.value = "default";
  courseList.value = [];
};

const handleCountrySelect = (event) => {
  selectedCountry.value = event.target.value;
  fetchPrograms();
};

const handleProgramSelect = (event) => {
  selectedProgramId.value = event.target.value;
  selectedProgram.value = programList.value.filter(
    (program) => program.id == selectedProgramId.value
  )?.[0];
};

const handleCourseSelect = (event) => {
  selectedCourse.value = event.target.value;
};

const checkCountry = () => {
  if (selectedCountry.value) {
    if (selectedCountry.value !== "default") {
      return true;
    }
  }

  return false;
};

const checkProgramId = () => {
  if (selectedProgramId.value) {
    if (selectedProgramId.value !== "default") {
      return true;
    }
  }

  return false;
};

const checkCourse = () => {
  if (selectedCourse.value) {
    if (selectedCourse.value !== "default") {
      return true;
    }
  }

  return false;
};

const handleSearch = async () => {
  try {
    let universityArray = [];
    uniLoading.value = true;

    let url = "universities";
    if (checkCountry()) {
      url += "?country_id=" + selectedCountry.value;

      if (checkProgramId()) {
        url += "&program_id=" + selectedProgramId.value;

        if (checkCourse()) {
          url += "&course_name=" + encodeURIComponent(selectedCourse.value);
        }
      }
    }

    const res = await axios.post(url);

    if (res.data.status == "success") {
      universityArray = res.data.universities;

      filteredUniversityList.value = universityArray;
      currentIndex.value = itemsPerShow.value; // Reset index on new search

      return;
    }

    filteredUniversityList.value = [];
    $toast.error("Not Found !", { position: "top-right" });
  } catch {
    filteredUniversityList.value = [];
    $toast.error("Not Found !", { position: "top-right" });
  } finally {
    uniLoading.value = false;
  }
};

const visibleUniversities = () => {
  return filteredUniversityList.value.slice(0, currentIndex.value);
};

const handleShowMore = () => {
  const nextIndex = currentIndex.value + itemsPerShow.value;
  currentIndex.value =
    nextIndex < filteredUniversityList.value.length
      ? nextIndex
      : filteredUniversityList.value.length;
};

// ... (other unused helper functions removed for brevity)

onMounted(() => {
  isLoading.value = false;
  fetchCountries(false);
});

watch(
  () => selectedProgram.value,
  (newProgram) => {
    fetchCourses();
  }
);
</script>

<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <div class="flex flex-col gap-8 px-4 sm:px-6 lg:px-10">
      <div
        class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8"
      >
        <div class="flex flex-col">
          <h1
            class="text-xs text-white uppercase cus-subheading sm:text-sm md:text-base"
          >
            find your right
          </h1>
          <h1
            class="text-lg font-bold text-white uppercase sm:text-xl md:text-2xl"
          >
            education pathway
          </h1>
        </div>

        <div
          class="flex flex-wrap w-full gap-3 sm:flex-row sm:gap-4 md:gap-6 sm:w-auto"
        >
          <select
            v-model="selectedCountry"
            @change="handleCountrySelect"
            class="w-full px-3 py-2 font-medium border rounded-lg text-cus-primary focus:outline-none focus:ring-2 focus:ring-cus-primary sm:w-40"
          >
            <option value="default">Country</option>
            <template v-if="countryList">
              <option
                v-for="data in countryList"
                :key="data.id"
                :value="data.id"
              >
                {{ data.name }}
              </option>
            </template>
          </select>

          <select
            v-model="selectedProgramId"
            @change="handleProgramSelect"
            class="w-full px-3 py-2 font-medium border rounded-lg text-cus-primary focus:outline-none focus:ring-2 focus:ring-cus-primary sm:w-40"
          >
            <option value="default">Program</option>
            <template v-if="programList">
              <option
                v-for="data in programList"
                :key="data.id"
                :value="data.id"
              >
                {{ data.name }}
              </option>
            </template>
          </select>

          <select
            v-model="selectedCourse"
            @change="handleCourseSelect"
            class="w-full px-3 py-2 font-medium border rounded-lg text-cus-primary focus:outline-none focus:ring-2 focus:ring-cus-primary sm:w-40"
          >
            <option value="default">Course</option>
            <template v-if="courseList">
              <option
                v-for="(course, idx) in courseList"
                :key="idx"
                :value="course"
              >
                {{ course }}
              </option>
            </template>
          </select>

          <Button
            @click="handleSearch"
            class="w-full px-4 py-2 sm:w-auto md:px-6 md:py-2"
            type="gradient"
          >
            Search
          </Button>
        </div>
      </div>

      <template v-if="uniLoading">
        <Loading />
      </template>
      <template v-else>
        <template v-if="filteredUniversityList.length > 0">
          <div
            class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
          >
            <template
              v-for="university in visibleUniversities()"
              :key="university.id"
            >
              <router-link
                :to="{
                  name: 'universities.detail',
                  params: { id: university.id },
                }"
                target="_blank"
                class="block bg-white w-full h-[120px] xs:h-[150px] sm:h-[180px] lg:h-[200px] group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  :src="university.imageURL"
                  class="object-contain w-full h-full p-2 sm:p-3"
                  alt="University Logo"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center transition bg-gray-900 bg-opacity-0 group-hover:bg-opacity-40"
                >
                  <span
                    class="p-2 text-xs text-center text-white transition opacity-0 sm:text-sm group-hover:opacity-100"
                  >
                    {{ university.university_name }}
                  </span>
                </div>
              </router-link>
            </template>
          </div>

          <div
            v-if="currentIndex < filteredUniversityList.length"
            class="flex justify-center mt-6"
          >
            <button
              @click="handleShowMore"
              class="px-6 py-2 text-sm text-white transition border-2 border-gray-400 rounded-lg hover:bg-cus-primary hover:text-white"
            >
              Show More ({{ filteredUniversityList.length - currentIndex }})
            </button>
          </div>
        </template>
        <div v-else class="py-10 text-center text-white">
          No University Found!
        </div>
      </template>
    </div>
  </template>
</template>