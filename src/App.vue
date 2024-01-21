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

const appStore = useAppStore();
const { navbar } = storeToRefs(appStore);

const main = ref(null);

const aboutDropdown = ref(false);
const serviceDropdown = ref(false);
const studyDropdown = ref(false);

onMounted(() => {
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
  <div class="relative">
    <header>
      <div class="p-3 bg-white border-b">
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
        class="md:w-[300px] flex animate__animated ssm:w-[300px] fixed top-0 left-0 transition-all duration-900 h-screen bottom-0 rounded-r-[50px] z-50 bg-slate-200"
        :class="[
          navbar == true ? 'animate__fadeInLeft' : 'animate__fadeInRight',
        ]"
      >
        <ul class="space-y-8 mt-20 ml-10">
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
                'text-cus-secondary font-semibold':
                  $route.name == 'study-pathway',
              }"
              >StudyPathway
              <!-- <i
                v-if="studyDropdown"
                @click="studyDropdown = !studyDropdown"
                class="fa-solid fa-angle-up"
              ></i>
              <i
                v-else
                class="fa-solid fa-angle-down"
                @click="studyDropdown = !studyDropdown"
              ></i> -->
              <!-- <ul
                class="ml-4 animate__animated animate__fadeIn"
                v-if="studyDropdown"
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
