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
    <div
      v-if="navbar"
      class="md:w-[450px] sm:w-[300px] absolute top-0 left-0 transition-all duration-700 h-screen bottom-0 rounded-r-[50px] z-50 bg-slate-200"
    >
      <div class="fixed"></div>
    </div>
    <!-- md sm nav link end -->
  </div>
</template>
