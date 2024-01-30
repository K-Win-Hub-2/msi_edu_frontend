<script setup>
import Button from "../../components/partials/Button.vue";
import ScholarshipOfferCard from "../../components/Scholarship/ScholarshipOfferCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import { onMounted, ref } from "vue";
import axios from "axios";
const modules = [Navigation, Pagination];
const start = ref(true);
const end = ref(false);

// swiper start

const onSlideChange = (event) => {
  if (event.isEnd) {
    end.value = true;
  } else {
    end.value = false;
  }

  if (event.isBeginning) {
    start.value = true;
  } else {
    start.value = false;
  }
};
const swiperOptions = {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-scholarship-school-lists-button-next-unique",
    prevEl: ".swiper-scholarship-school-lists-button-prev-unique",
  },
};

// university data
const props = defineProps(["id"]);
const university = ref();
const bannerImage = ref("");
const prizeImage = ref("");
const fetchData = async () => {
  const res = await axios.get("university-lists/partner/yes");
  if (res) {
    console.log(res.data);
    res.data.university.map((uni) => {
      if (uni.id == props.id) {
        university.value = uni;
        bannerImage.value =
          "http://adminpanel.msieducation.edu.mm/postImage/" +
          uni.uni_banner_image;
        prizeImage.value =
          "http://adminpanel.msieducation.edu.mm/postImage/" + uni.prize_image;
      }
    });
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div>
    <div class="lg:my-28 ssm:my-4" v-if="university">
      <img
        v-if="bannerImage"
        class="w-full lg:h-[693px] md:h-[500px]"
        :src="bannerImage"
        alt=""
      />
      <div class="flex justify-center">
        <div class="md:w-[1290px] ssm:w-[320px]">
          <!-- detail -->

          <div class="flex justify-between">
            <div class="">
              <div
                class="flex items-center md:mt-6 ssm:mx-3 md:mx-0 ssm:mt-3 md:px-10"
              >
                <img
                  class="mr-3 md:w-8 ssm:w-5 ssm:h-5 md:h-8"
                  src="@/assets/img/scholarship/Vector.svg"
                  alt=""
                />
                <p
                  class="md:text-[20px] ssm:text-[15px] text-cus-primary font-semibold uppercase lg:min-w-[130px]"
                >
                  <span>Country:</span>
                  <span
                    class="font-[500] md:text-[20px] ssm:text-[15px] leading-[18px] text-black"
                    >Malaysia
                  </span>
                </p>
              </div>

              <div
                class="flex items-center md:mt-6 ssm:mx-3 md:mx-0 ssm:mt-3 md:px-10"
              >
                <img
                  src="@/assets/img/scholarship/MapPin.svg"
                  class="mr-3 md:w-8 ssm:w-5 ssm:h-5 md:h-8"
                  alt=""
                />
                <p
                  class="md:text-[20px] ssm:text-[15px] text-cus-primary font-semibold uppercase lg:min-w-[130px]"
                >
                  <span> Location:</span>
                  <span
                    class="font-[500] md:text-[20px] ssm:text-[15px] leading-[18px] text-black"
                    >{{ university.location }}
                  </span>
                </p>
              </div>

              <div
                class="flex items-center md:mt-6 ssm:mx-3 md:mx-0 ssm:mt-3 md:px-10"
              >
                <img
                  src="@/assets/img/scholarship/Flag.svg"
                  class="mr-3 md:w-8 md:h-8 ssm:w-5 ssm:h-5"
                  alt=""
                />

                <p
                  class="md:text-[20px] ssm:text-[15px] text-cus-primary font-semibold uppercase lg:min-w-[130px]"
                >
                  <span>Founded:</span>
                  <span
                    class="font-[500] md:text-[20px] ssm:text-[15px] leading-[18px] text-black"
                    >{{ university.founded_year }}</span
                  >
                </p>
              </div>
            </div>
            <div class="">
              <Button
                class="lg:px-[40px] mt-32 sm:mr-7 ssm:px-[20px] ssm:py-[5px] md:px-[40px] px-[17px] lg:py-[13px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[20px] md:text-[9px] text-[7px] float-right md:mr-[35px] mr-[2px]"
                type="gradient"
                data-te-toggle="modal"
                data-te-target="#appointmentFormModal"
                data-te-ripple-init
                data-te-ripple-color="light"
                >Get Free Counselling</Button
              >
            </div>
          </div>
          <h1
            class="md:text-md md:text-center ssm:text-start ssm:text-[16px] font-[480] lg:mt-12 ssm:mt-6 md:px-10 ssm:px-2"
          >
            {{ university.introduction }}
          </h1>

          <hr class="mt-6" />

          <!-- prize award -->
          <div class="md:mt-20 ssm:mt-8 md:px-10 ssm:px-2">
            <div class="flex justify-between items-center">
              <div class="">
                <h1 class="md:text-lg ssm:text-md">Prize Award</h1>
                <p class="text-[20px] mb-7 font-semibold text-primary-600">
                  Our MSI Award
                </p>
              </div>
              <div class="">
                <img
                  src="../../assets/img/StudyPathway/prize.png"
                  class="w-60 h-60 ssm:hidden md:block"
                  alt=""
                />
              </div>
            </div>
            <div
              class="md:px-5 ssm:px-1 py-8 flex md:flex-row ssm:flex-col gap-x-7 items-center bg-[#F5FBFC]"
            >
              <div class="bg-primary-600 md:w-[370px] md:h-[370px] p-2">
                <div class="border-2 border-blue-600">
                  <img
                    v-if="prizeImage"
                    :src="prizeImage"
                    class="md:h-[348px] ssm:h-[250px] w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div class="md:space-y-14 ssm:space-y-5 ssm:mt-4 md:mt-0">
                <div class="">
                  <div class="flex text-md">
                    <p
                      class="text-[#205887] ssm:text-[20px] md:text-md font-semibold"
                    >
                      <span>Prize Names</span>
                      <!-- <span class="ml-16 mr-8">-</span> -->
                    </p>
                    <p
                      class="text-[#FE005F] ssm:text-[20px] md:text-md font-semibold"
                    >
                      -{{ university.prize_name }}
                    </p>
                  </div>
                </div>
                <div class="">
                  <div class="flex text-md">
                    <p
                      class="text-[#205887] ssm:text-[20px] md:text-md font-semibold"
                    >
                      University Name
                      <!-- <span class="ml-4 mr-8">-</span> -->
                    </p>
                    <p
                      class="text-[#FE005F] ssm:text-[20px] md:text-md font-semibold"
                    >
                      -{{ university.university_name }}
                    </p>
                  </div>
                </div>
                <div class="">
                  <div class="flex text-md">
                    <p
                      class="text-[#205887] ssm:text-[20px] md:text-md font-semibold"
                    >
                      Year awarded
                      <!-- <span class="ml-14 mr-8">-</span> -->
                    </p>
                    <p
                      class="text-[#FE005F] ssm:text-[20px] md:text-md font-semibold"
                    >
                      -{{ university.awarded_year }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- program -->
          <div class="mb-14 mt-9 md:px-10 ssm:px-2">
            <h1 class="my-5 md:text-lg ssm:text-md font-semibold">
              Available Programs
            </h1>
            <div class="flex justify-between">
              <div class="">
                <h1 class="text-md text-primary-600 my-8 font-[600]">
                  Undergraduate Program
                </h1>
                <ul
                  class="md:text-[24px] smm:text-[20px] space-y-2 mt-5 font-[500]"
                >
                  <li>- Business & Management</li>
                  <li>- Engineering & Tecnology</li>
                  <li>- Medicine & Health</li>
                  <li>- Arts, Designs & Architecture</li>
                  <li>- Hospitality, Leisure & Sports</li>
                  <li>- Computer Science & IT</li>
                  <li>- Journalism & Media</li>
                  <li>- Natural Science & mathematics</li>
                  <li>- Education & Training</li>
                  <li>- Social Science</li>
                  <li>- Humanities</li>
                  <li>- Law</li>
                </ul>
              </div>
              <div class="">
                <img
                  src="../../assets/img/StudyPathway/program.png"
                  class="w-[296px] h-[296px] ssm:hidden md:block"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="bg-[#F4FAFF] md:px-10 smm:px-8 md:py-7 ssm:py-4">
            <h1
              class="text-[24px] smm:px-3 md:px-0 text-primary-600 font-[600]"
            >
              Master Degree Program
            </h1>
            <div class="flex justify-between">
              <ul
                class="md:text-[24px] smm:text-[20px] space-y-2 mt-5 font-[500]"
              >
                <li>-Software Engineering</li>
                <li>-Artificial Intelligence</li>
                <li>-Artificial Intelligence (ODL)</li>
                <li>-Cyber Security</li>
                <li>-Data Science & Business Analytics (ODL)</li>
                <li>-Information Technology management</li>
                <li>-Technology Management</li>
                <li>-Digital Transformation</li>
                <li>-Business Administration</li>
                <li>
                  -Business administration with a specialism in Digital
                  Leadership(ODL)
                </li>
                <li>-Business administration (Euro Asia Business)</li>
                <li>-International Business Communications</li>
                <li>-Global Marketing Management</li>
                <li>-Project management</li>
                <li>-Accounting</li>
                <li>-Accounting in Forensic Analysis</li>
                <li>-Finance</li>
                <li>-Finance with a specialism in fintech</li>
                <li>-Design Innovation Management</li>
                <li>-Engineering</li>
                <li>-Management</li>
                <li>-Computing</li>
              </ul>
              <div class="mt-[500px]">
                <img
                  src="../../assets/img/StudyPathway/degree.png"
                  class="w-[347px] h-[347px] ssm:hidden md:block"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="relative">
            <h1
              class="md:my-10 md:ml-14 lg:ml-0 ssm:my-3 md:text-lg ssm:text-md font-semibold"
            >
              Scholarship offers
            </h1>
            <div
              class="bg-[url(../../assets/img/StudyPathway/offer.png)] ssm:hidden md:hidden lg:block w-[320px] h-[320px] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] md:top-[-12px] md:right-[-550px] right-[-400px] top-[-8px] lg:right-[-20px]"
            ></div>
            <!-- <img src="../../assets/img/StudyPathway/offer.png" alt="" /> -->
            <div class="flex justify-center">
              <div class="relative container">
                <swiper
                  :pagination="{
                    clickable: true,
                  }"
                  @slideChange="onSlideChange"
                  :breakpoints="swiperOptions.breakpoints"
                  :navigation="swiperOptions.navigation"
                  :modules="modules"
                  class="mySwiper"
                >
                  <!-- slider one -->
                  <swiper-slide
                    class="flex justify-center px-4 md:max-w-[1000px] py-12"
                  >
                    <ScholarshipOfferCard :university="university" />
                  </swiper-slide>

                  <!-- slider two  -->
                  <!-- <swiper-slide class="flex justify-center">
                    <ScholarshipOfferCard />
                  </swiper-slide> -->

                  <!-- slider three  -->
                  <!-- <swiper-slide class="flex justify-center">
                    <ScholarshipOfferCard />
                  </swiper-slide> -->
                </swiper>
                <div
                  class="swiper-scholarship-school-lists-button-prev-unique absolute left-20 top-1/2 -translate-y-1/2"
                >
                  <ChevronLeftIcon
                    :class="{ 'opacity-50': start }"
                    class="w-12 h-12 text-cus-primary ssm:hidden md:block"
                  />
                </div>
                <div
                  class="swiper-scholarship-school-lists-button-next-unique absolute right-20 top-1/2 -translate-y-1/2"
                >
                  <ChevronRightIcon
                    :class="{ 'opacity-50': end }"
                    class="w-12 h-12 text-cus-primary ssm:hidden md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
