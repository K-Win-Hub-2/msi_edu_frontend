<template>
  <h1 class="cus-heading text-center mb-[100px] text-cus-primary">
    Our Services
  </h1>

  <div class="flex flex-wrap gap-6 justify-center">
    <div
      class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card"
    >
      <img
        src="@/assets/img/Services/services-logo/1.png"
        class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
      />
      <h3 class="service-title">Education Counseling</h3>
      <p class="service-desc">
        MSI initiates a comprehensive and solid Education Counseling Guidance
        (ECG) mechanism for all students and parents with a view to completely
        understand, appreciate and conceive of Vision, Mission and Strategy of
        MSI and World Education System, being so far nourished.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card"
    >
      <img
        src="@/assets/img/Services/services-logo/2.png"
        class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
      />
      <h3 class="service-title">Admission Assistance</h3>
      <p class="service-desc">
        MSI manages to cooperate the students with a correct and complete
        accomplishment of necessary papers, forms and documents concerned for
        eligible admission processes of the respective academic institutions.
      </p>
    </div>

    <div
      class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card"
    >
      <img
        src="@/assets/img/Services/services-logo/3.png"
        class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
      />
      <h3 class="service-title">Student Choice Admissions</h3>
      <p class="service-desc">
        MSI cooperates with a basically solid arrangement for the admission of
        Academic Institutions, personally selected by the students themselves.
      </p>
    </div>

    <template v-if="showAll">
      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/4.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Aptitude Testing</h3>
        <p class="service-desc">
          MSI conforms to apply the Aptitude Test in MSI office for the students
          after submitting a prior registration in advance to MSI for a correct,
          decisive and effective studying and learning the subject with talent
          and mindset.
        </p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/5.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Scholarship Support</h3>
        <p class="service-desc">
          MSI consolidates in applying for the international scholarships and
          module exemption by submitting formally process of application to the
          Academic Institutions concerned.
        </p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/6.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Parental Visa Support</h3>
        <p class="service-desc">
          MSI materializes the heart-felt feeling of sending and accompanying
          the students to the Academic Institutions concerned regarding the
          parents for a visit visa
        </p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/7.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Airport Pick-Up and Accommodation</h3>
        <p class="service-desc">
          MSI arranges Airport pick-up and accommodation as well.
        </p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/8.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Medical Check-Up Partners</h3>
        <p class="service-desc">
          MSI connects and cooperates with ISO-certified Medical Centers for
          Medical Check-ups.
        </p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/9.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Air-ticket Assistance</h3>
        <p class="service-desc">MSI manages Air-ticket Booking.</p>
      </div>

      <div
        class="flex flex-col gap-6 text-center w-[30%] shadow-xl p-2 rounded-md bg-service-card mt-11"
      >
        <img
          src="@/assets/img/Services/services-logo/10.png"
          class="-mt-[60px] w-[150px] service-profile h-[150px] mx-auto rounded-[50%] border-8 border-[#2468A7] object-fill"
        />
        <h3 class="service-title">Medical Tourism Experiences</h3>
        <p class="service-desc">
          MSI organizes Worldly-worthy Tourism Programs for Medical Check-ups as
          well as touring and shopping with affordable expenditures and
          time-line worthy services.
        </p>
      </div>
    </template>
  </div>

  <div class="flex justify-center">
    <Button
      v-if="!showAll"
      @click="toggleShowAll"
      type="primary"
      class="rounded-full w-[150px] py-3 flex items-center justify-center"
      >More Info</Button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../partials/Button.vue";

const showAll = ref(true);

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<style lang="scss" scoped></style>
