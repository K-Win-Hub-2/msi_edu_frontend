<template>
  <div class="grid grid-cols-2 gap-6">
    <div>
      <div class="border bg-white cus-standout overflow-hidden">
        <div
          class="border-b p-2 text-xl font-semibold bg-cus-primary-pale   -white"
        >
          Key Facts to Study in <span class="capitalize">{{ country }}</span>
        </div>
        <template v-for="(list, index) in lists">
          <div class="flex" :class="{ 'bg-gray-50': (index + 1) % 2 === 0 }">
            <div
              class="w-[200px] break-words p-2 border-r font-semibold shrink-0"
            >
              {{ list.title }}
            </div>
            <div class="p-2 break-words">{{ list.description }}</div>
        
          </div>
        </template>
      </div>
    </div>

    <div>
      <h3 class="text-xl mb-6 font-semibold">Quick Facts</h3>
      <div class="space-y-3">
        <template v-for="fact in facts">
          <div class="flex items-center gap-3">
            <div class="w-[50px] shrink-0">
              <div
                class="flex items-center justify-center bg-white p-3 border rounded-full w-[50px] h-[50px] shadow"
              >
                <i class="fa-regular fa-star text-yellow-500"></i>
              </div>
            </div>
            <p>
              {{ fact.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  country: {
    type: String,
    default: "singapore",
  },
});

const data = {
  singapore: {
    lists: [
      {
        title: "languages spoken",
        description: "English, Mandarin, Malay, Tamil",
      },
      {
        title: "Cost of study",
        description: "Varies based on university and course",
      },
      {
        title: "Exams Required",
        description: "IELTS, TOEFL, GRE, SAT",
      },
      {
        title: "Degrees",
        description: "Diploma, Bachelor's, Master's, PhD",
      },
      {
        title: "Intakes",
        description: "January, August",
      },
      {
        title: "Visa",
        description: "Student Pass",
      },
    ],

    facts: [
      {
        description:
          "Higher living standards among Southeast Asian countries",
      },
      {
        description:
          "Located among the safest countries, Indonesia and Malaysia",
      },
      {
        description:
          "Taking higher education quality for international students",
      },
      {
        description:
          "Chance to study at the highest-ranking university in Singapore",
      }
    ],
  },
  thailand: {
    lists: [
      {
        title: "languages spoken",
        description: "Thai, English",
      },
      {
        title: "Cost of study",
        description: "Varies by Program",
      },
      {
        title: "Exams Required",
        description: "TOEFL, IELTS",
      },
      {
        title: "Degrees",
        description: "UG, PG, PhD",
      },
      {
        title: "Intakes",
        description: "Multiple",
      },
      {
        title: "Visa",
        description: "Required",
      },
    ],

    facts: [
      {
        description:
          "Rich cultural and historical legacy",
      },
      {
        description:
          "Incredible opportunities to learn",
      },
      {
        description:
          "affordable living costs for international students",
      },
      {
        description:
          "Global recognition and standardization education",
      },
      {
        description:
          "more opportunity for cultural immersion",
      },
    ],
  },
  malaysia: {
    lists: [
      {
        title: "languages spoken",
        description: "Malay, English",
      },
      {
        title: "Cost of study",
        description: "Variable based on course and university",
      },
      {
        title: "Exams Required",
        description: "IELTS, TOEFL",
      },
      {
        title: "Degrees",
        description: "Bachelor's, Master's, Doctorate",
      },
      {
        title: "Intakes",
        description: "February, July",
      },
      {
        title: "Visa",
        description: "Student Visa",
      },
    ],

    facts: [
      {
        description:
          "Rapidly improving quality higher education",
      },
      {
        description:
          "Lower cost of living",
      },
      {
        description:
          "Affordable tuition fees",
      },
      {
        description:
          "Easier visa processing than in other European countries",
      },
      {
        description:
          "Opportunities to transfer to other universities in Western countries",
      },
    ],
  },
  canada: {
    lists: [
      {
        title: "languages spoken",
        description: "English, French",
      },
      {
        title: "Cost of study",
        description: "$15,000 - $40,000",
      },
      {
        title: "Exams Required",
        description: "IELTS, TOEFL, GRE,GMAT",
      },
      {
        title: "Degrees",
        description: "Bachelor's, Master's, PhD",
      },
      {
        title: "Intakes",
        description: "Fall, Spring, Winter",
      },
      {
        title: "Visa",
        description: "Student Visa (PGWP)",
      },
    ],

    facts: [
      {
        description:
          "Multicultural classroom and workforce Canadian universities",
      },
      {
        description:
          "Better quality of life offering high quality education and research opportunities",
      },
      {
        description:
          "Chance to get work-permit visa after graduate",
      }
    ],
  },
  uk: {
    lists: [
      {
        title: "languages spoken",
        description: "English",
      },
      {
        title: "Cost of study",
        description: "Varies by University",
      },
      {
        title: "Exams Required",
        description: "IELTS, TOEFL",
      },
      {
        title: "Degrees",
        description: "Undergraduate, Postgraduate, Doctoral",
      },
      {
        title: "Intakes",
        description: "Fall and Spring",
      },
      {
        title: "Visa",
        description: "Tire 4",
      },
    ],

    facts: [
      {
        description:
          "Short-duration courses",
      },
      {
        description:
          "Undeniable advantages to learn",
      },
      {
        description:
          "Rich cultural heritage",
      },
      {
        description:
          "Exploration of high-standard education and high-ranking universities",
      },
      {
        description:
          "The international students community is large. You can also get 2 years post- study work visa",
      }
    ],
  },
  switzerland: {
    lists: [
      {
        title: "languages spoken",
        description: "Swiss German, French, Italian, Romansh, English",
      },
      {
        title: "Cost of study",
        description: "Varies by Program",
      },
      {
        title: "Exams Required",
        description: "UG (Undergraduate), PG (Postgraduate), PhD",
      },
      {
        title: "Degrees",
        description: "language spoken, language spoken, language spoken,",
      },
      {
        title: "Intakes",
        description: "Multiple (often in September and February)",
      },
      {
        title: "Visa",
        description: "Required for non-European Union students",
      },
    ],

    facts: [
      {
        description:
          "World-class education system",
      },
      {
        description:
          "A high quality of life and a high living standard",
      },
      {
        description:
          "Offering high salaries and low unemployment rates",
      },
      {
        description:
          "Advanced skills, which are so valuable for future careers",
      }
    ],
  },
  italy: {
    lists: [
      {
        title: "languages spoken",
        description: "Swiss German, French, Italian, Romansh, English",
      },
      {
        title: "Cost of study",
        description: "Varies by Program",
      },
      {
        title: "Exams Required",
        description: "UG (Undergraduate), PG (Postgraduate), PhD",
      },
      {
        title: "Degrees",
        description: "language spoken, language spoken, language spoken,",
      },
      {
        title: "Intakes",
        description: "Multiple (often in September and February)",
      },
      {
        title: "Visa",
        description: "Required for non-European Union students",
      },
    ],

    facts: [
      {
        description:
          "World-class education system",
      },
      {
        description:
          "A high quality of life and a high living standard",
      },
      {
        description:
          "Offering high salaries and low unemployment rates",
      },
      {
        description:
          "Advanced skills, which are so valuable for future careers",
      }
    ],
  },
  vietnam: {
    lists: [
      {
        title: "languages spoken",
        description: "Swiss German, French, Italian, Romansh, English",
      },
      {
        title: "Cost of study",
        description: "Varies by Program",
      },
      {
        title: "Exams Required",
        description: "UG (Undergraduate), PG (Postgraduate), PhD",
      },
      {
        title: "Degrees",
        description: "language spoken, language spoken, language spoken,",
      },
      {
        title: "Intakes",
        description: "Multiple (often in September and February)",
      },
      {
        title: "Visa",
        description: "Required for non-European Union students",
      },
    ],

    facts: [
      {
        description:
          "World-class education system",
      },
      {
        description:
          "A high quality of life and a high living standard",
      },
      {
        description:
          "Offering high salaries and low unemployment rates",
      },
      {
        description:
          "Advanced skills, which are so valuable for future careers",
      }
    ],
  },
  usa: {
    lists: [
      {
        title: "languages spoken",
        description: "Swiss German, French, Italian, Romansh, English",
      },
      {
        title: "Cost of study",
        description: "Varies by Program",
      },
      {
        title: "Exams Required",
        description: "UG (Undergraduate), PG (Postgraduate), PhD",
      },
      {
        title: "Degrees",
        description: "language spoken, language spoken, language spoken,",
      },
      {
        title: "Intakes",
        description: "Multiple (often in September and February)",
      },
      {
        title: "Visa",
        description: "Required for non-European Union students",
      },
    ],

    facts: [
      {
        description:
          "World-class education system",
      },
      {
        description:
          "A high quality of life and a high living standard",
      },
      {
        description:
          "Offering high salaries and low unemployment rates",
      },
      {
        description:
          "Advanced skills, which are so valuable for future careers",
      }
    ],
  },
};

const lists = ref([])
const facts = ref([])

onMounted(() => {
    lists.value = data[props.country]['lists']
    facts.value = data[props.country]['facts']
})
</script>

<style lang="scss" scoped></style>
