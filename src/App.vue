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
  // fetchData(url.value);
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
    <div
      class="relative text-center bg-center bg-repeat bg-contain  bg-[url('@/assets/img/home/body.jpg')]"
    >
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
        class="md:w-[300px] flex animate__animated ssm:w-[300px] fixed top-0 left-0 transition-all duration-900 h-screen bottom-0 rounded-r-[50px] z-50 0"
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
              >About
              <!-- <i
                v-if="aboutDropdown"
                @click="aboutDropdown = !aboutDropdown"
                class="fa-solid fa-angle-up"
              ></i>
              <i
                v-else
                class="fa-solid fa-angle-down"
                @click="aboutDropdown = !aboutDropdown"
              ></i> -->
              <!-- <ul
                class="ml-4 animate__animated animate__fadeIn"
                v-if="aboutDropdown"
              >
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Our Office</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Who we are</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Speech</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Mission</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Our Partner</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Our Team</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Testimonial</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Why MSI</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Roadmap</router-link
                  >
                </li>
              </ul> -->
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'services' }"
              @click="navbar = !navbar"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'services',
              }"
              >Services
              <!-- <i
                v-if="serviceDropdown"
                @click="serviceDropdown = !serviceDropdown"
                class="fa-solid fa-angle-up"
              ></i>
              <i
                v-else
                class="fa-solid fa-angle-down"
                @click="serviceDropdown = !serviceDropdown"
              ></i> -->
              <!-- <ul
                class="ml-4 animate__animated animate__fadeIn"
                v-if="serviceDropdown"
              >
                <li>
                  <router-link :to="{ name: 'home' }" class="text-slate-600"
                    >Our Services</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'services#faq' }"
                    class="text-slate-600"
                    >Faq</router-link
                  >
                </li>
              </ul> -->
            </router-link>
          </li>
          <li>
            <router-link
              @click="navbar = !navbar"
              :to="{ name: 'study-pathway' }"
              :class="{
                'text-cus-secondary font-semibold relative mb-4':
                  $route.name == 'study-pathway',
              }"
              >StudyPathway
            </router-link>
            <div class="absolute right-28 top-[250px]">
              <i
                v-if="studyDropdown"
                @click="studyDropdown = !studyDropdown"
                class="fa-solid fa-angle-up"
              ></i>
              <i
                v-else
                class="fa-solid fa-angle-down"
                @click="studyDropdown = !studyDropdown"
              ></i>
            </div>
            <ul
              class="mt-2 ml-2 animate__animated animate__fadeIn"
              v-if="(data, studyDropdown)"
            >
              <li
                v-for="data in data.countries"
                :key="data.id"
                @click="navbar = !navbar"
              >
                <router-link
                  :to="{
                    name: 'study-pathway.country',
                    params: { id: data.id },
                  }"
                  >{{ data.name }}</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'scholarship' }" @click="navbar = !navbar"
              >Scholarship</router-link
            >
          </li>
          <!-- <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
            <router-link
              :to="{ name: 'scholarship' }"
              class="text-base disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
              data-te-nav-link-ref
              >Scholarship</router-link
            >
          </li> -->
          <li>
            <router-link
              @click="navbar = !navbar"
              :to="{ name: 'events' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'events',
              }"
              >Event</router-link
            >
          </li>
          <li>
            <router-link
              @click="navbar = !navbar"
              :to="{ name: 'contact-us' }"
              :class="{
                'text-cus-secondary font-semibold': $route.name == 'contact-us',
              }"
              >Contact Us</router-link
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
