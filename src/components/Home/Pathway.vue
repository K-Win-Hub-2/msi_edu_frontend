<script setup>
import Button from '@/components/partials/Button.vue';
import { onMounted, ref, watch } from 'vue';
import { universities } from '../../mocks/universities';
import { programs } from '../../mocks/programs';
import Loading from '../general/Loading.vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

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

const currentUniversities = ref([]);

const currentPrograms = ref([]);

// methods
const fetchCountries = async (setSelected = true) => {
  const res = await axios.get('country-lists');
  selectedCountry.value = setSelected ? res.data.countries[0]?.id : selectedCountry.value;
  countryList.value = res.data.countries;
};

const fetchPrograms = async () => {
  if (checkCountry()) {
    const res = await axios.get(
      'country-program-course-search/' + selectedCountry.value
    );
    programList.value = res.data.program_courses;

    if (programList.value.length > 0) {
      selectedProgramId.value = programList.value[0].id;
      selectedProgram.value = programList.value[0];

      return;
    }
  }
  selectedProgramId.value = "default";
  selectedProgram.value = {};
};

const getCourses = async () => {
  if (Object.keys(selectedProgram.value).length > 0) {
    const array = selectedProgram.value.pivot.course_name.split(",");
    const formattedArray = array.map((course) => course.trim());
    courseList.value = formattedArray;

    selectedCourse.value = "default";
    return;
  }
  selectedCourse.value = "default";
  courseList.value = [];
}

const handleCountrySelect = (event) => {
  selectedCountry.value = event.target.value;
  fetchPrograms();
};

const handleProgramSelect = (event) => {
  selectedProgramId.value = event.target.value;
  selectedProgram.value = programList.value.filter(program => program.id == selectedProgramId.value)?.[0];
};

const handleCourseSelect = (event) => {
  selectedCourse.value = event.target.value;
}

const checkCountry = () => {
  if (selectedCountry.value) {
    if (selectedCountry.value !== "default") {
      return true;
    }
  }

  return false;
}

const checkProgramId = () => {
  if (selectedProgramId.value) {
    if (selectedProgramId.value !== "default") {
      return true;
    }
  }

  return false;
}

const checkCourse = () => {
  if (selectedCourse.value) {
    if (selectedCourse.value !== "default") {
      return true;
    }
  }

  return false;
}

const handleSearch = async () => {
  try {
    let universityArray = [];
    uniLoading.value = true;

    if (selectedCountry.value) {
      if (selectedCountry.value !== "default") {
        const res = await axios.get(
          "university-lists/country/" + selectedCountry.value
        );
        universityArray = res.data.university;

        if (universityArray.length <= 0) {
          $toast.error('Not Found !', { position: 'top-right' });
          filteredUniversityList.value = universityArray;

          return;
        }

        if (checkCourse()) {
          const filterProgramArray = programList.value.filter(program => program.pivot.course_name.includes(selectedCourse.value));

          universityArray = handleUniversityFilteredByPrograms(filterProgramArray, universityArray);
        } else {
          if (checkProgramId()) {
            universityArray = handleUniversityFilteredByPrograms(programList.value, universityArray);
          }
        }

        filteredUniversityList.value = universityArray;

        return;
      }
    }
    $toast.error('Not Found !', { position: 'top-right' });
  } finally {
    uniLoading.value = false;
  }
}

const handleUniversityFilteredByPrograms = (programArray, universityArray) => {
  const universityIds = [...new Set(programArray.map(program => program.pivot.university_id))];

  return universityArray.filter(university => universityIds.includes(university.id));
}

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

const handleUniversitySelect = (payload) => {
  if (payload.index !== 'university') {
    console.log(payload);
    filters.value.uni = { name: payload.name, slug: payload.slug };
    updateCurrentPrograms();
    updateSelectedProgram();
  }
};

// fetch university
const fetchUniversities = async () => {
  const res = await axios.get(
    'university-lists/partner/yes/country/' + selectedCountry.value
  );
  // const res = await axios.get("university-lists/partner/yes");
  // console.log("uni", res.data.university);
  universityList.value = res.data.university;
  selectedUniversity.value = universityList[0]?.id;
};

// redirect Page

// fetch program

const searchCountry = async () => {
  const res = await axios.get(
    'university-lists/partner/yes/country/' + selectedCountry.value
  );
  if (res.data.university.length) {
    const uni = res.data.university.filter((data) => {
      return data.id == selectedUniversity.value;
    });
    // const program = programList.value.filter((p) => {
    //   return p.id == uni[0].program_id;
    // });
    // if (selectedProgram.value == program[0].id) {
    router.push({ name: 'universities.detail', params: { id: uni[0].id } });
    // }
  } else {
    $toast.error('Not Found !', { position: 'top-right' });
  }
};
const searchHandle = () => {
  // searchCountry();
  // handle search course
};

onMounted(() => {
  isLoading.value = false;
  fetchCountries(false);
  // fetchUniversities();
});

watch(
  () => selectedProgram.value, (newProgram) => {
    getCourses();
  }
);

</script>

<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <div class="flex flex-col gap-12">
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
        <div class="flex sm:flex-col md:flex-row gap-6">
          <div class="lg:w-[180px]">
            <div class="relative" data-te-dropdown-ref>
              <select
                name=""
                v-model="selectedCountry"
                @change="handleCountrySelect"
                class="border min-w-[200px] md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              >
                <option
                  class="overflow-x-scroll text-[13px]"
                  value="default"
                >
                  - Country -
                </option>
                <template 
                  v-if="countryList"
                >
                  <option
                    class="text-[13px]"
                    v-for="data in countryList"
                    :key="data.id"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </template>
              </select>
            </div>
          </div>
          <div class="w-[200px]">
            <div class="relative" data-te-dropdown-ref>
              <select
                v-model="selectedProgramId"
                name=""
                @change="handleProgramSelect"
                class="border md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              >
                <option
                  class="overflow-x-scroll text-[13px]"
                  value="default"
                >
                  - Program -
                </option>
                <template
                  v-if="programList"
                >
                  <option
                    class="text-[13px]"
                    v-for="data in programList"
                    :key="data.id"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </template>
              </select>
            </div>
          </div>
          <div class="lg:w-[170px] md:w-[200px] md:-ml-5">
            <div class="relative" data-te-dropdown-ref>
              <select
                name=""
                v-model="selectedCourse"
                @change="handleCourseSelect"
                class="border md:text-md ssm:text-[16px] max-w-[200px] cus-rounded bg-white flex items-center justify-between whitespace-nowrap px-2 pt-2.5 pb-2 font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
              >
                <option
                  class="overflow-x-scroll text-[13px]"
                  value="default"
                >
                  - Course -
                </option>
                <template 
                  v-if="courseList"
                >
                  <option
                    class="overflow-x-scroll text-[13px]"
                    v-for="(course, idx) in courseList"
                    :key="idx"
                    :value="course"
                  >
                    {{ course }}
                  </option>
                </template>
              </select>
            </div>
          </div>

          <Button
            @click="handleSearch"
            class="flex justify-center md:ml-4 md:px-6 items-center"
            type="gradient"
            >Search</Button
          >
        </div>
      </div>

      <template v-if="uniLoading">
        <Loading />
      </template>
      <template v-else>
        <div v-if="filteredUniversityList.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 first-letter justify-items-center gap-12">
          <template v-for="university in filteredUniversityList" :key="university">
            <a :href="university.university_link" target="_blank" class="block  bg-white w-full h-[150px] group relative cus-standout overflow-hidden">
              <img class="w-full h-full object-contain p-3" :src="university.imageURL" />
              <div class="flex items-center justify-center absolute top-0 left-0 group-hover:bg-gray-900 group-hover:bg-opacity-40 w-full h-full transition">
                <span class="opacity-0 group-hover:opacity-100 transition z-10 text-white text-center">{{ university.university_name }}</span>
              </div>
            </a>
          </template>
        </div>
        <div v-else class="flex md:flex-col ssm:mt-3 md:mt-0 ssm:flex-col md:space-y-5 justify-between items-center">
          No University Found!
        </div>
      </template>
    </div>
  </template>
</template>
