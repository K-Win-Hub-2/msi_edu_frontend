<template>
  <div class="border-2 rounded-lg h-auto overflow-hidden">
    <h1
      class="md:cus-heading ssm:text-md ssm:font-semibold text-white bg-[#8BB5FC] text-center"
    >
      Frequently Asked Questions
    </h1>
    <div class="py-6 px-4">
      <FaqData />
    </div>
  </div>
  <!-- 
  <div id="accordionExample">
    <template v-for="question in questions">
      <div class="border border-neutral-200 bg-white rounded-2xl shadow-2xl">
        <h2 class="mb-0" :id="question.id">
          <button
            class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            :data-te-target="`#collapse${question.id}`"
            aria-expanded="false"
            :aria-controls="`collapse${question.id}`"
          >
            {{ question.heading }}
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          :id="`collapse${question.id}`"
          class="!visible hidden bg-gray-100"
          data-te-collapse-item
          :aria-labelledby="`heading${question.id}`"
          data-te-parent="#accordionExample"
        >
          <ul class="px-5 py-4 space-y-3">
            <template v-for="answer in question.answers">
              <li>- {{ answer }}</li>
            </template>
          </ul>
        </div>
      </div>
    </template>
  </div> -->
</template>

<script setup>
import FaqData from "./FaqData.vue";
const questions = [
  {
    id: "headingOne",
    heading: "၁၀ တန်းမအောင်သေးတဲ့သူတွေရော နိုင်ငံတကာပညာရေးကို ရှေ့ဆက်လို့ရလား?",
    answers: [
      "GED, IGCSE အစရှိတဲ့နိုင်ငံတကာအသိအမှတ်ပြုထားတဲ့ အထက်တန်းအောင်လက်မှတ် ပြင်ဆင်ပြီး ကမ္ဘာအနှံ့အပြားရှိ တက္ကသိုလ်များကို လျှောက်ထားနိုင်ပါတယ်။",
      "ဒါမှမဟုတ် ၉ တန်းအောင်လက်မှတ်ဖြင့် အမေရိကန်နိုင်ငံရှိ  Community College များသို့ လျှောက်ထားနိုင်ပါတယ်။",
    ],
  },
  {
    id: "headingThree",
    heading: "အချိန်ပိုင်းအလုပ်လုပ်ခွင့်ရတဲ့နိုင်ငံတွေက ဘယ်နိုင်ငံတွေရှိမလဲ?",
    answers: [
      `UK, US, Vietnam ကဲ့သို့သော အစိုးရ မှ တရားဝင် အချိန်ပိုင်းအလုပ်လုပ်ခွင့်ပေးထားတဲ့နိုင်ငံများရှိပါတယ်။`,
    ],
  },
  {
    id: "headingFour",
    heading: "ပြည်ပမှာရှိတဲ့ ဘယ်နိုင်ငံတွေနဲ့ ချိတ်ဆက်ထားလဲ?",
    answers: [
      `UK, U.S.A., Canada, Southeast Asia စတဲ့ နိုင်ငံများရှိ တက္ကသိုလ်များကို ချိတ်ဆက်လျှောက်ထားပေးနေတဲ့ အပြင် ကျောင်းသား/သူများ စိတ်တိုင်းကျရွေးချယ်ထားတဲ့ တက္ကသိုလ်များကိုလည်း လျှောက်ထားပေးနေပါတယ်။`,
    ],
  },
  {
    id: "headingFive",
    heading: "ပညာသင်ဆု (Scholarship) လျှောက်ထားပေးတဲ့ ဝန်ဆောင်မှုရှိလား?",
    answers: [
      `နိုင်ငံတကာရှိ အစိုးရ/ပုဂ္ဂလိက တက္ကသိုလ်များရှိ ပညာသင်ဆုများကို လျှောက်ထားပေးနေပါတယ်။ Myanmar Search International မှတဆင့် (2007) ခုနှစ် မှ (September, 2023) ထိ လျှောက်ထားပေးခဲ့သော ပညာသင်ဆုရကျောင်းသား/သူ (၃၅၀) ကျော် ရှိပါတယ်။`,
    ],
  },
  {
    id: "headingSix",
    heading: "MSIအနေနဲ့ကျောင်းလျှောက်ပေးတာအပြင်အခြားဘာဝန်ဆောင်မှုတွေရှိသေးလဲ?",
    answers: [
      `ကျောင်းသား၊ ကျောင်းသူများအနေဖြင့် မိမိဝါသနာပါတဲ့ ဘာသာရပ်များကို မှန်ကန်စွာဆုံးဖြတ်ပြီး လေ့လာသင်ကြားနိုင်ရန် 𝐀𝐩𝐭𝐢𝐭𝐮𝐝𝐞 𝐓𝐞𝐬𝐭 များကို 𝐌𝐒𝐈 ရုံးခန်းတွင် ကြိုတင်စာရင်းသွင်းခြင်းဖြင့် "အခမဲ့" ဖြေကြားနိုင်ခြင်း`,
      `ကျောင်းသားများဆေးစစ်ရန် ISO လက်မှတ်ရ Medical Centre များနှင့် ဆက်သွယ်ဆောင်ရွက်ပေးခြင်း/ လေယာဉ်လက်မှတ် Booking ဝန်ဆောင်မှုပေးခြင်း `,
      `မိဘအုပ်ထိန်းသူများနှင့်ကျောင်းသား/သူများအား သက်ဆိုင်ရာ နိုင်ငံများရှိကျောင်းများသို့ Campus Tour Program စီစဉ်ဆောင်ရွက်ပေးခြင်း `,
    ],
  },
];
</script>

<style lang="scss" scoped></style>
