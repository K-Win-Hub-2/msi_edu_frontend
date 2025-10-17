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
    <!-- Content Section -->
    <div class="pt-64 pb-2 md:pt-80 lg:pt-96 ">
      <div class="container">
        <div class="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-7">
          <!-- Left Menu -->
          <div class="lg:col-span-2">
            <h2 class="mb-6 text-sm font-semibold uppercase">
              <img
                src="@/assets/img/footer-logo.png"
                class="h-20 mr-2"
                alt="Footer Logo"
                loading="lazy"
              />
            </h2>
            <ul class="space-y-2 ml-7">
              <li v-for="(url, index) in urls" :key="index" class="text-left">
                <RouterLink
                  class="hover:underline"
                  :to="{ name: url.url }"
                  >{{ url.name }}</RouterLink
                >
              </li>
            </ul>
          </div>

          <!-- Right Side: Address + Contact -->
          <div class="grid grid-cols-1 gap-5 lg:col-span-5 lg:grid-cols-2">
            <!-- Address -->
            <div class="text-left">
              <h2 class="mt-[100px] mb-1 text-sm font-semibold uppercase">Address</h2>
              <div class="text-sm">
                <div class="mb-5">
                  <div class="font-semibold">Yangon (Head) Office</div>
                  <div class="leading-relaxed text-white">
                    <p>No.234, 2nd Fl.(R), Shwebontha St.&nbsp;(MID BL),</p>
                    <p>Pabedan Tsp, Yangon, Myanmar.</p>
                  </div>
                </div>

                <div>
                  <div class="font-semibold">Mandalay (Branch) Office</div>
                  <div class="leading-relaxed text-white">
                    <p>No. 31/3, Between 79 St × 80 St,</p>
                    <p>38th Street, Mahar Aung Myay Township,</p>
                    <p>Mandalay, Myanmar (Burma)</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="text-left lg:ml-40">
              <h2 class="mt-2 mb-2 text-sm font-semibold uppercase">Contact Us</h2>
              <ul class="space-y-3 text-sm">
                <li>
                  <span class="block font-semibold">Yangon (Head) Office</span>
                  <div>+95 1 838 991 5</div>
                  <div>+95 1 838 140 8</div>
                  <div>+95 1 837 346 1</div>
                  <div>+95 1 825 092 9</div>
                </li>
                <li>
                  <span class="block font-semibold whitespace-nowrap">Mandalay (Branch) Office</span>
                  <div>+95 9 444 443 916</div>
                  <div>+95 9 444 443 917</div>
                </li>

                <li class="flex flex-col space-y-1">
                  <a href="mailto:info@msieducation.edu.mm" class="hover:underline">
                    info@msieducation.edu.mm
                  </a>
                  <a href="mailto:admission@msieducation.edu.mm" class="hover:underline">
                    admission@msieducation.edu.mm
                  </a>
                  <a href="mailto:IR.department@msieducation.edu.mm" class="hover:underline">
                    IR.department@msieducation.edu.mm
                  </a>
                </li>

                <!-- Social Icons -->
                <li class="flex space-x-3">
                  <a href="#" aria-label="Instagram">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 ..."
                      />
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 ..."
                      />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 ..." />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Bottom Bar -->
        <div class="mt-0 text-white">
          <div class="container">
            <div class="px-4 py-3 text-center">
              <span class="text-sm sm:text-left">
                Copyright © 2023.
                <a href="#" class="hover:underline">Myanmar Search International</a>.
                All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </footer>
</template>

<style lang="scss" scoped></style>
