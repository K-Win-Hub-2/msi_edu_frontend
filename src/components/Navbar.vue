<script setup>
import NavItem from '@/components/partials/NavItem.vue';
import TopBar from './TopBar.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useAppStore } from '../stores/app';
import { storeToRefs } from 'pinia';
import getData from '../axios/getData';
const appStore = useAppStore();
const { navbar } = storeToRefs(appStore);
const url = ref('country-lists');
const { data, fetchData } = getData();
const handleNavbar = () => {
  navbar.value = true;
};

const urls = [
  {
    name: 'Home',
    url: 'home',
  },
  {
    name: 'About us',
    url: 'about-us',
    dropdown: [
      {
        name: 'Our Office',
        url: 'about-us',
        hash: '#our-office',
      },
      {
        name: 'Who we are',
        url: 'about-us',
        hash: '#about',
      },
      {
        name: 'Speech',
        url: 'about-us',
        hash: '#speech',
      },
      {
        name: 'Mission',
        url: 'about-us',
        hash: '#mission',
      },
      {
        name: 'Our Partner',
        url: 'about-us',
        hash: '#our-partner',
      },
      {
        name: 'Our Team',
        url: 'about-us',
        hash: '#our-team',
      },
      {
        name: 'Testimonial',
        url: 'about-us',
        hash: '#testimonial',
      },
      {
        name: 'Why MSI',
        url: 'about-us',
        hash: '#why-msi',
      },
      {
        name: 'Roadmap',
        url: 'about-us',
        hash: '#roadmap',
      },
    ],
  },
  {
    name: 'Services',
    url: 'services',
    dropdown: [
      {
        name: 'Our Services',
        url: 'services',
        hash: '#our-services',
      },
      {
        name: 'Faq',
        url: 'services',
        hash: '#faq',
      },
    ],
  },
  {
    name: 'StudyPathway',
    url: 'study-pathway',
    dropdown: [
      {
        name: 'Main Page',
        url: 'study-pathway',
      },
      {
        name: 'Singapore',
        url: 'study-pathway.countries.singapore',
      },
      {
        name: 'Thailand',
        url: 'study-pathway.countries.thailand',
      },
      {
        name: 'Malaysia',
        url: 'study-pathway.countries.malaysia',
      },
      {
        name: 'Canada',
        url: 'study-pathway.countries.canada',
      },
      {
        name: 'UK',
        url: 'study-pathway.countries.uk',
      },
      {
        name: 'Switzerland',
        url: 'study-pathway.countries.switzerland',
      },
      {
        name: 'Vietnam',
        url: 'study-pathway.countries.vietnam',
      },
      {
        name: 'Italy',
        url: 'study-pathway.countries.italy',
      },
      {
        name: 'USA',
        url: 'study-pathway.countries.usa',
      },
    ],
  },
  { name: 'Scholarship', url: 'scholarship' },
  { name: 'Events', url: 'events' },
  { name: 'Contact Us', url: 'contact-us' },
];

onMounted(() => {
  fetchData(url.value);
});

const route = useRoute();

const isActive = (url) => {
  if (url.hash && route.hash === `${url.hash}`) {
    return true;
  } else if (!url.hash && route.name === url.url) {
    return true;
  }
};
</script>
<template>
  <nav
    id="navbar"
    class="absolute z-50 flex flex-no-wrap items-center justify-between w-full !bg-white lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="container">
      <div class="flex flex-wrap items-center justify-end w-full px-6 lg:px-0">
        <button
          v-if="!navbar"
          @click="handleNavbar"
          class="block border-0 bg-transparent py-2 px-2.5 t hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-500 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button
          v-else
          class="block border-0 animate__animated animate__fadeIn bg-transparent py-2 px-2.5 t hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-500 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div
          class="!visible hidden flex-grow basis-[100%] items-center justify-between lg:flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
       
          <!-- Left links -->
          <ul
            class="space-y-4 h-[80px] items-center list-style-none mb-5 mr-auto lg:mr-0 flex flex-col pl-0 lg:mb-0 lg:flex-row lg:space-x-2 lg:space-y-0"
            data-te-navbar-nav-ref
          >
            <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
              <router-link
                :to="{ name: 'home' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Home</router-link
              >
            </li>
            <li
              class="relative flex items-center py-8 lg:pr-2 group"
              data-te-nav-item-ref
            >
              <router-link
                :to="{ name: 'about-us' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >About Us</router-link
              >
              <div
                class="hidden p-3 w-[140px] bg-white absolute top-[85px] shadow border cus-standout group-hover:block"
              >
                <ul class="space-y-2">
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#our-office"> Our Office </a>
                  </li>
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#our-leaders"> MSI's Leaders </a>
                  </li>
                  <!-- <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#speech"> Speech </a>
                  </li> -->
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#strategy"> Strategy </a>
                  </li>
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#why-msi"> Why MSI? </a>
                  </li>
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#our-partner"> MSI's Partnerships</a>
                  </li>
                  <!-- <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#our_partner"> Our Team</a>
                  </li> -->
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/about-us#achievements">Achievements</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="relative flex items-center py-8 group lg:pr-2"
              data-te-nav-item-ref
            >
              <router-link
                :to="{ name: 'services' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Services</router-link
              >
              <div
                class="hidden p-3 bg-white absolute top-[85px] shadow border cus-standout group-hover:block w-[150px]"
              >
                <ul class="space-y-2">
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/services#our-services"> MSI Services </a>
                  </li>
                  <li
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <a href="/services#faqs"> FAQs </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="relative flex items-center py-8 group lg:pr-2"
              data-te-nav-item-ref
            >
              <router-link
                :to="{ name: 'study-pathway' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30 lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Study Pathway</router-link
              >
              <div
                class="hidden p-3 bg-white absolute top-[85px] shadow border cus-standout group-hover:block"
              >
                <ul v-if="data" class="space-y-2">
                  <li
                    v-for="data in data.countries"
                    :key="data"
                    class="px-2 text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                  >
                    <router-link
                      :to="{
                        name: 'study-pathway.country',
                        params: { id: data.id },
                      }"
                    >
                      {{ data.name }}
                    </router-link>
                  </li>
                </ul>
                <!-- <template
                  v-for="(dropdownUrl, index) in url.dropdown"
                  :key="dropdownUrl.url"
                >
                  <NavItem
                    :url="dropdownUrl"
                    :isActive="isActive(dropdownUrl)"
                    :class="{ 'mb-2': index !== url.dropdown.length - 1 }"
                  ></NavItem>
                </template> -->
              </div>
            </li>

            <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
              <router-link
                :to="{ name: 'scholarship' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Scholarship</router-link
              >
            </li>
            <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
              <router-link
                :to="{ name: 'events' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Events</router-link
              >
            </li>
            <li class="relative flex items-center lg:pr-2" data-te-nav-item-ref>
              <router-link
                :to="{ name: 'contact-us' }"
                class="text-cus-primary text-base font-semibold disabled:text-black/30lg:px-2 hover:text-cus-secondary [&.active]:text-black/90"
                data-te-nav-link-ref
                >Contact Us</router-link
              >
            </li>
            <!-- <template v-for="url in urls">
              <template v-if="url.dropdown">
                <NavItem
                  :url="url"
                  :key="url.url"
                  :isActive="isActive(url)"
                  class="h-full group"
                >
                  <template #childElement>
                    <div
                      class="hidden p-3 bg-white absolute top-[79px] shadow border cus-standout group-hover:block"
                    >
                      <template
                        v-for="(dropdownUrl, index) in url.dropdown"
                        :key="dropdownUrl.url"
                      >
                        <NavItem
                          :url="dropdownUrl"
                          :isActive="isActive(dropdownUrl)"
                          :class="{ 'mb-2': index !== url.dropdown.length - 1 }"
                        ></NavItem>
                      </template>
                    </div>
                  </template>
                </NavItem>
              </template>
              <NavItem
                v-else
                :url="url"
                :key="url.url"
                :isActive="isActive(url)"
              ></NavItem>
            </template> -->
          </ul>
          <!-- Left links -->

          <a
          class="flex items-center py-3 mt-2 mb-8 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0 lg:mb-0"
          href="#"
        >
        <img
        src="../assets/img/msiLogo.png"
        class="object-cover h-20 lg:h-18"
        alt=""
        loading="lazy"
      />

        </a>
        </div>
        <!-- Collapsible wrapper -->
      </div>
    </div>
  </nav>
</template>
<style>
a.router-link-active {
  color: rgb(209, 10, 10);
}
</style>
