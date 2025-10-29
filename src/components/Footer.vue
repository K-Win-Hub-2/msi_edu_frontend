<script setup>
import { RouterLink } from "vue-router";

const urls = [
  { name: "Home", url: "home" },
  { name: "About us", url: "about-us" },
  { name: "Services", url: "services" },
  { name: "Study Pathway", url: "study-pathway" },
  { name: "Events", url: "events" },
  { name: "Contact Us", url: "contact-us" },
];
</script>

<template>
  <footer
    class="text-white bg-[url('@/assets/img/home/footer.png')] bg-cover bg-bottom bg-no-repeat relative"
  >
    <div class="pt-20 pb-6 md:pt-40 lg:pt-80">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-7"
        >
          <div
            class="text-center lg:col-span-2 sm:text-left text-[#0F2948] sm:text-white"
          >
            <h2
              class="flex justify-center mb-6 text-sm font-semibold uppercase sm:justify-start"
            >
              <img
                src="@/assets/img/footer-logo.png"
                class="h-12 mr-0 md:h-16 sm:mr-2"
                alt="Footer Logo"
                loading="lazy"
              />
            </h2>

            <ul class="space-y-3 text-sm md:text-base">
              <li
                v-for="(url, index) in urls"
                :key="index"
                class="text-sm md:text-base"
              >
                <RouterLink
                  class="transition hover:underline hover:opacity-80"
                  :to="{ name: url.url }"
                  >{{ url.name }}</RouterLink
                >
              </li>
            </ul>
          </div>

          <div
            class="grid grid-cols-1 gap-10 lg:col-span-5 lg:grid-cols-2 text-[#0F2948] sm:text-white"
          >
            <div class="text-center sm:text-left">
              <h2 class="mt-24 mb-2 text-base font-semibold uppercase">
                Address
              </h2>
              <div class="space-y-4 text-sm leading-relaxed">
                <div>
                  <div class="font-semibold">Yangon (Head) Office</div>
                  <p>No.234, 2nd Fl.(R), Shwebontha St. (MID BL),</p>
                  <p>Pabedan Tsp, Yangon, Myanmar.</p>
                </div>

                <div>
                  <div class="font-semibold">Mandalay (Branch) Office</div>
                  <p>No. 31/3, Between 79 St × 80 St,</p>
                  <p>38th Street, Mahar Aung Myay Township,</p>
                  <p>Mandalay, Myanmar (Burma)</p>
                </div>
              </div>
            </div>

            <div class="text-center sm:text-left lg:ml-20">
              <h2 class="mt-4 mb-3 text-base font-semibold uppercase">
                Contact Us
              </h2>
              <ul class="space-y-3 text-sm">
                <li>
                  <span class="block font-semibold">Yangon (Head) Office</span>
                  <div>+95 1 838 991 5</div>
                  <div>+95 1 838 140 8</div>
                  <div>+95 1 837 346 1</div>
                  <div>+95 1 825 092 9</div>
                </li>

                <li>
                  <span class="block font-semibold whitespace-nowrap"
                    >Mandalay (Branch) Office</span
                  >
                  <div>+95 9 444 443 916</div>
                  <div>+95 9 444 443 917</div>
                </li>

                <li class="flex flex-col items-center space-y-1 sm:items-start">
                  <a
                    href="mailto:info@msieducation.edu.mm"
                    class="hover:underline"
                    >info@msieducation.edu.mm</a
                  >
                  <a
                    href="mailto:admission@msieducation.edu.mm"
                    class="hover:underline"
                    >admission@msieducation.edu.mm</a
                  >
                  <a
                    href="mailto:IR.department@msieducation.edu.mm"
                    class="hover:underline"
                    >IR.department@msieducation.edu.mm</a
                  >
                </li>

                <li class="flex justify-center mt-4 space-x-4 sm:justify-start">
                  <a
                    href="#"
                    aria-label="Instagram"
                    class="text-current hover:opacity-80"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 ..."
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    class="text-current hover:opacity-80"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 ..."
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    class="text-current hover:opacity-80"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 ..." />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-10 border-t border-gray-700">
          <div class="container">
            <div
              class="px-4 py-4 text-xs text-center sm:text-sm text-[#0F2948] sm:text-white"
            >
              <span>
                Copyright © 2023.
                <a href="#" class="hover:underline text-inherit"
                  >Myanmar Search International</a
                >. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>