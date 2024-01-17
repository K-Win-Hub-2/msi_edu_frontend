<script setup>
import NavItem from "@/components/partials/NavItem.vue";
import TopBar from "./TopBar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const urls = [
  {
    name: "Home",
    url: "home",
  },
  {
    name: "About us",
    url: "about-us",
    dropdown: [
      {
        name: "Our Office",
        url: "about-us",
        hash: "#our-office",
      },
      {
        name: "Who we are",
        url: "about-us",
        hash: "#about",
      },
      {
        name: "Speech",
        url: "about-us",
        hash: "#speech",
      },
      {
        name: "Mission",
        url: "about-us",
        hash: "#mission",
      },
      {
        name: "Our Partner",
        url: "about-us",
        hash: "#our-partner",
      },
      {
        name: "Our Team",
        url: "about-us",
        hash: "#our-team",
      },
      {
        name: "Testimonial",
        url: "about-us",
        hash: "#testimonial",
      },
      {
        name: "Why MSI",
        url: "about-us",
        hash: "#why-msi",
      },
      {
        name: "Roadmap",
        url: "about-us",
        hash: "#roadmap",
      },
    ],
  },
  {
    name: "Services",
    url: "services",
    dropdown: [
      {
        name: "Our Services",
        url: "services",
        hash: "#our-services",
      },
      {
        name: "Faq",
        url: "services",
        hash: "#faq",
      },
    ],
  },
  {
    name: "StudyPathway",
    url: "study-pathway",
    dropdown: [
      {
        name: "Main Page",
        url: "study-pathway",
      },
      {
        name: "Singapore",
        url: "study-pathway.countries.singapore",
      },
      {
        name: "Thailand",
        url: "study-pathway.countries.thailand",
      },
      {
        name: "Malaysia",
        url: "study-pathway.countries.malaysia",
      },
      {
        name: "Canada",
        url: "study-pathway.countries.canada",
      },
      {
        name: "UK",
        url: "study-pathway.countries.uk",
      },
      {
        name: "Switzerland",
        url: "study-pathway.countries.switzerland",
      },
      {
        name: "Vietnam",
        url: "study-pathway.countries.vietnam",
      },
      {
        name: "Italy",
        url: "study-pathway.countries.italy",
      },
      {
        name: "USA",
        url: "study-pathway.countries.usa",
      },
    ],
  },
  { name: "Scholarship", url: "scholarship" },
  { name: "Events", url: "events" },
  { name: "Contact Us", url: "contact-us" },
];

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
    class="absolute z-50 flex-no-wrap flex w-full items-center justify-between lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="container">
      <div class="flex w-full flex-wrap items-center justify-end px-6 lg:px-0">
        <button
          class="block border-0 bg-transparent py-2 px-2.5 t hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
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
        <div
          class="!visible hidden flex-grow basis-[100%] items-center justify-between lg:flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            class="mt-2 py-3 mb-8 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0 lg:mb-0"
            href="#"
          >
            <img
              src="@/assets/img/logo.png"
              class="h-20"
              alt=""
              loading="lazy"
            />
          </a>
          <!-- Left links -->
          <ul
            class="space-y-4 h-[80px] items-center list-style-none mb-5 mr-auto lg:mr-0 flex flex-col pl-0 lg:mb-0 lg:flex-row lg:space-x-2 lg:space-y-0"
            data-te-navbar-nav-ref
          >
            <template v-for="url in urls">
              <template v-if="url.dropdown">
                <NavItem
                  :url="url"
                  :key="url.url"
                  :isActive="isActive(url)"
                  class="group h-full"
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
            </template>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
