<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import TopBar from "@/components/TopBar.vue";
import SocialButtons from "./components/SocialButtons.vue";
import { onMounted, ref } from "vue";
import ConsultationModal from "./components/general/ConsultationModal.vue";
import AppointmentModal from "./components/general/AppointmentModal.vue";
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";
import getData from "./axios/getData";
const { data, fetchData } = getData();

const appStore = useAppStore();
const url = ref("country-lists");
const { navbar } = storeToRefs(appStore);

const main = ref(null);

const aboutDropdown = ref(false);
const serviceDropdown = ref(false);
const studyDropdown = ref(false);

onMounted(() => {
  fetchData(url.value);
  let navbar = document.getElementById("navbar");
  let mainView = main.value;
  let sticky = navbar.offsetTop;

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.remove("absolute", "top-[50px]");
      navbar.classList.add("fixed", "top-0", "bg-white", "shadow-lg");
      // mainView.classList.add("mt-[50px]");
      // mainView.classList.remove("mt-0");
    } else {
      navbar.classList.add("absolute", "top-[50px]");
      navbar.classList.remove("fixed", "top-0", "bg-white", "shadow-lg");
      // mainView.classList.remove("mt-[50px]");
      // mainView.classList.add("mt-0");
    }
  }
});
</script>

<template>
  <div class="relative text-center bg-center bg-repeat bg-contain">
    <header>
      <div class="p-3 border-b bg-cus-primary">
        <div class="container">
          <TopBar />
        </div>
      </div>
      <Navbar></Navbar>
    </header>
    <div ref="main" id="main">
      <RouterView />
    </div>
    <Footer></Footer>
    <SocialButtons />
    <ConsultationModal />
    <AppointmentModal />

    <!-- md sm nav link start -->

    <div class="relative">
      <div
        v-if="navbar"
        class="bg-white shadow-2xl fixed top-0 left-0 transition-all duration-900 h-screen bottom-0 w-full  z-50 flex animate__animated"
        :class="[
          navbar == true ? 'animate__fadeInLeft' : 'animate__fadeInRight',
        ]"
      >
        <ul class="mt-20 ml-10 space-y-8">
          <li>
            <router-link
              :to="{ name: 'home' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'home',
              }"
              @click="navbar = !navbar"
              >Home</router-link
            >
          </li>
          <li class="relative">
            <router-link
              :to="{ name: 'about-us' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'about-us',
              }"
              @click="navbar = !navbar"
              >About MSI</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'services' }"
              @click="navbar = !navbar"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'services',
              }"
              >Services</router-link
            >
          </li>
          <li class="relative">
            <router-link
              @click="studyDropdown = !studyDropdown"
              :to="{ name: 'study-pathway' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'study-pathway',
              }"
              >Study Pathways
              <i
                v-if="studyDropdown"
                class="fa-solid fa-angle-up ml-2"
              ></i>
              <i
                v-else
                class="fa-solid fa-angle-down ml-2"
              ></i>
            </router-link>
            <ul
              class="mt-2 ml-4 animate__animated animate__fadeIn"
              v-if="data && studyDropdown"
            >
              <li
                v-for="country in data.countries"
                :key="country.id"
                @click="navbar = !navbar"
              >
                <router-link
                  :to="{
                    name: 'study-pathway.country',
                    params: { id: country.id },
                  }"
                  >{{ country.name }}</router-link
                >
              </li>
              <li @click="navbar = !navbar">
                <a href="/study-pathway#mission">More Countries</a>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              :to="{ name: 'scholarship' }"
              @click="navbar = !navbar"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'scholarship',
              }"
              >Scholarships</router-link
            >
          </li>
          <li>
            <router-link
              @click="navbar = !navbar"
              :to="{ name: 'events' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'events',
              }"
              >Events</router-link
            >
          </li>
          <li>
            <router-link
              @click="navbar = !navbar"
              :to="{ name: 'contact-us' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'contact-us',
              }"
              >Contact MSI</router-link
            >
          </li>
        </ul>
        <div class="absolute top-7 right-7" @click="navbar = !navbar">
          <i class="fa-regular fa-circle-xmark text-md"></i>
        </div>
      </div>
    </div>
    <!-- md sm nav link end -->
  </div>
</template>
<style>
body {
  background-image: url("@/assets/img/home/body.jpg");
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>

