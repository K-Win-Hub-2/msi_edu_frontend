<template>
  <div class="">
    <div class="ssm:mb-4 md:mb-[100px] relative">
      <h1
        class="md:cus-heading relative ssm:text-md ssm:text-cus-primary ssm:font-semibold text-center"
      >
        Our Services
        <div
          class="bg-[url(@/assets/img/Services/confettiblue.png)] md:left-[300px] ssm:left-14 w-[130px] h-[120px] bg-no-repeat bg-[length:100%_100%] absolute md:top-[-15px] lg:left-[480px]"
        ></div>
      </h1>
    </div>

    <!-- carousel start -->
    <div
      class="container flex justify-center md:mt-20 xl:mt-14 sm:mt-10 relative"
    >
      <div class="">
        <swiper
          :pagination="{
            clickable: true,
          }"
          space-between="30
                  "
          :breakpoints="swiperOptions.breakpoints"
          @slideChange="onSlideChange"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper flex justify-center xl:w-[1040px] md:w-[590px] ssm:w-[320px] sm:w-[375px]"
        >
          <!-- slider one -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-3 text-center w-[245px] h-[290px] shadow-xl bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/1.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] service-profile border-[#2468A7] service-profile rounded-[50%] -mt-8"
              />
              <h3 class="service-title">Education Counseling</h3>
              <p class="service-desc p-2">
                MSI initiates a comprehensive and solid Education Counseling
                Guidance (ECG) mechanism for all students and parents with a
                view to completely understand, appreciate and conceive of
                Vision, Mission and Strategy of MSI and World Education System,
                being so far nourished.
              </p>
            </div>
          </swiper-slide>
          <!-- slider two -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/4.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Aptitude Testing</h3>
              <p class="service-desc p-2">
                MSI conforms to apply the Aptitude Test in MSI office for the
                students after submitting a prior registration in advance to MSI
                for a correct, decisive and effective studying and learning the
                subject with talent and mindset.
              </p>
            </div>
          </swiper-slide>
          <!-- slider -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/5.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Scholarship Support</h3>
              <p class="service-desc p-2">
                MSI consolidates in applying for the international scholarships
                and module exemption by submitting formally process of
                application to the Academic Institutions concerned.
              </p>
            </div>
          </swiper-slide>

          <!-- slider -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/6.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Parental Visa Support</h3>
              <p class="service-desc p-2">
                MSI materializes the heart-felt feeling of sending and
                accompanying the students to the Academic Institutions concerned
                regarding the parents for a visit visa
              </p>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <div
        class="swiper-service-card-button-prev-unique absolute left-0 lg:-left-32 top-1/2 -translate-y-1/2"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div>
      <div
        class="swiper-service-card-button-next-unique absolute right-0 lg:-right-32 top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div> -->
      </div>
    </div>
    <!-- carousel end -->

    <!-- <div class="grid grid-cols-4 gap-x-6 justify-center">
    <div
      class="flex flex-col gap-3 text-center w-[245px] h-[290px] shadow-xl bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/1.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] service-profile border-[#2468A7] service-profile rounded-[50%] -mt-8"
      />
      <h3 class="service-title">Education Counseling</h3>
      <p class="service-desc p-2">
        MSI initiates a comprehensive and solid Education Counseling Guidance
        (ECG) mechanism for all students and parents with a view to completely
        understand, appreciate and conceive of Vision, Mission and Strategy of
        MSI and World Education System, being so far nourished.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/4.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Aptitude Testing</h3>
      <p class="service-desc p-2">
        MSI conforms to apply the Aptitude Test in MSI office for the students
        after submitting a prior registration in advance to MSI for a correct,
        decisive and effective studying and learning the subject with talent and
        mindset.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/5.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Scholarship Support</h3>
      <p class="service-desc p-2">
        MSI consolidates in applying for the international scholarships and
        module exemption by submitting formally process of application to the
        Academic Institutions concerned.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/6.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Parental Visa Support</h3>
      <p class="service-desc p-2">
        MSI materializes the heart-felt feeling of sending and accompanying the
        students to the Academic Institutions concerned regarding the parents
        for a visit visa
      </p>
    </div>
  </div> -->

    <div class="flex justify-center mt-[70px]">
      <div class="flex flex-wrap justify-center">
        <!-- card 1 -->
        <div
          class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl mt-5"
        >
          <img
            src="@/assets/img/Services/services-logo/7.png"
            class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
          />
          <h3 class="service-title">Airport Pick-Up and Accommodation</h3>
          <p class="service-desc">
            MSI arranges Airport pick-up and accommodation as well.
          </p>
        </div>

        <!-- card 2 -->
        <div
          class="flex mx-3 flex-col gap-6 text-center md:mt-[100px] ssm:my-14 w-[278px] h-[124px] p-2"
        >
          <img src="@/assets/img/MSI Logotext.png" class="mx-auto" />
        </div>

        <!-- card 3 -->
        <div
          class="flex flex-col gap-6 text-center md:mt-20 lg:mt-5 w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl mt-5"
        >
          <img
            src="@/assets/img/Services/services-logo/10.png"
            class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
          />
          <h3 class="service-title">Medical Tourism Experiences</h3>
          <p class="service-desc">
            MSI organizes Worldly-worthy Tourism Programs for Medical Check-ups
            as well as touring and shopping with affordable expenditures and
            time-line worthy services.
          </p>
        </div>
      </div>
    </div>

    <!-- carousel start -->
    <div
      class="container flex justify-center md:mt-20 xl:mt-14 sm:mt-10 relative"
    >
      <div class="">
        <swiper
          :pagination="{
            clickable: true,
          }"
          space-between="30
                  "
          :breakpoints="swiperOptions.breakpoints"
          @slideChange="onSlideChange"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper flex justify-center xl:w-[1040px] md:w-[590px] ssm:w-[320px] sm:[370px]"
        >
          <!-- slider one -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-3 text-center w-[245px] h-[290px] shadow-xl bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/1.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-8"
              />
              <h3 class="service-title">Education Counseling</h3>
              <p class="service-desc p-2">
                MSI initiates a comprehensive and solid Education Counseling
                Guidance (ECG) mechanism for all students and parents with a
                view to completely understand, appreciate and conceive of
                Vision, Mission and Strategy of MSI and World Education System,
                being so far nourished.
              </p>
            </div>
          </swiper-slide>
          <!-- slider two -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/4.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Aptitude Testing</h3>
              <p class="service-desc p-2">
                MSI conforms to apply the Aptitude Test in MSI office for the
                students after submitting a prior registration in advance to MSI
                for a correct, decisive and effective studying and learning the
                subject with talent and mindset.
              </p>
            </div>
          </swiper-slide>
          <!-- slider three -->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/5.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Scholarship Support</h3>
              <p class="service-desc p-2">
                MSI consolidates in applying for the international scholarships
                and module exemption by submitting formally process of
                application to the Academic Institutions concerned.
              </p>
            </div>
          </swiper-slide>

          <!-- slider four-->
          <swiper-slide class="flex justify-center py-12 w-full">
            <div
              class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
            >
              <img
                src="@/assets/img/Services/services-logo/6.png"
                class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
              />
              <h3 class="service-title">Parental Visa Support</h3>
              <p class="service-desc p-2">
                MSI materializes the heart-felt feeling of sending and
                accompanying the students to the Academic Institutions concerned
                regarding the parents for a visit visa
              </p>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <div
        class="swiper-service-card-button-prev-unique absolute left-0 lg:-left-32 top-1/2 -translate-y-1/2"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div>
      <div
        class="swiper-service-card-button-next-unique absolute right-0 lg:-right-32 top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div> -->
      </div>
    </div>
    <!-- carousel end -->

    <!-- <div class="grid grid-cols-4 gap-x-6 justify-center mt-[80px]">
    <div
      class="flex flex-col gap-3 text-center w-[245px] h-[290px] shadow-xl bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/1.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-8"
      />
      <h3 class="service-title">Education Counseling</h3>
      <p class="service-desc p-2">
        MSI initiates a comprehensive and solid Education Counseling Guidance
        (ECG) mechanism for all students and parents with a view to completely
        understand, appreciate and conceive of Vision, Mission and Strategy of
        MSI and World Education System, being so far nourished.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/4.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Aptitude Testing</h3>
      <p class="service-desc p-2">
        MSI conforms to apply the Aptitude Test in MSI office for the students
        after submitting a prior registration in advance to MSI for a correct,
        decisive and effective studying and learning the subject with talent and
        mindset.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/5.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Scholarship Support</h3>
      <p class="service-desc p-2">
        MSI consolidates in applying for the international scholarships and
        module exemption by submitting formally process of application to the
        Academic Institutions concerned.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[245px] h-[290px] shadow-xl p-2 bg-service-card rounded-2xl"
    >
      <img
        src="@/assets/img/Services/services-logo/6.png"
        class="w-[139px] h-[139px] mx-auto border-[10px] border-[#2468A7] service-profile rounded-[50%] -mt-11"
      />
      <h3 class="service-title">Parental Visa Support</h3>
      <p class="service-desc p-2">
        MSI materializes the heart-felt feeling of sending and accompanying the
        students to the Academic Institutions concerned regarding the parents
        for a visit visa
      </p>
    </div>
  </div> -->
  </div>
</template>

<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
const modules = [Navigation, Pagination];
import MySwiper from "@/components/MySwiper.vue";
import { ref } from "vue";
// swiper
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
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-service-card-button-next-unique",
    prevEl: ".swiper-service-card-button-prev-unique",
  },
};
</script>

<style lang="scss" scoped></style>
