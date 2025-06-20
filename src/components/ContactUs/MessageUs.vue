<template>
  <div class="pb-12 my-12 border-b">
    <ul class="flex justify-center gap-3 ml-3">
      <li class="md:flex ssm:space-y-3 md:space-y-0">
        <div class="">
          <button
            @click="yangon = true"
            class="px-5 py-3 mx-4 font-bold cursor-pointer hover:bg-cus-primary hover:text-white cus-standout"
            :class="[yangon ? 'bg-cus-primary text-white' : '']"
          >
            Yangon Head Office
          </button>
        </div>
        <div class="">
          <button
            @click="yangon = false"
            :class="[!yangon ? 'bg-cus-primary text-white' : '']"
            class="px-5 py-3 font-bold cursor-pointer hover:bg-cus-primary hover:text-white cus-standout"
          >
            Mandalay Head Office
          </button>
        </div>
      </li>
      <!-- <li
        v-for="(dat, i) in datas.data"
        :key="i"
        :class="{
          'bg-cus-primary text-white': i === datas.id,
          'bg-white': i !== datas.id,
        }"
        class="px-5 py-3 font-bold cursor-pointer hover:bg-cus-primary hover:text-white cus-standout"
        @click="changeId(i)"
      >
        {{ dat.city }}
      </li> -->
    </ul>
  </div>

  <div class="w-full lg:px-[290px] mb-8">
    <iframe
      v-if="yangon"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15280.079151261436!2d96.1561373!3d16.7756911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec80fae82d59%3A0x3c21ec7739941a7e!2sMSI%20Overseas%20Education!5e0!3m2!1sen!2smm!4v1706601580548!5m2!1sen!2smm"
      height="450 "
      class="w-full shadow-lg"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <iframe
      v-else
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d925.0554564396675!2d96.0841645!3d21.9644479!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU3JzUyLjEiTiA5NsKwMDUnMDIuOCJF!5e0!3m2!1sen!2smm!4v1706451947017!5m2!1sen!2smm"
      height="450 "
      class="w-full shadow-lg"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="flex justify-center mb-36">
    <div class="w-[851px] md:flex contact-form overflow-hidden">
      <div class="w-[363px] h-[453px]">
        <div class="py-5 px-7">
          <h1 class="text-md font-[600] text-cus-primary">
            Contact Information
          </h1>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="text-[16px] text-left font-[600] font-cus-primary mb-3">
              Phone
            </h1>
            <p class="text-[12px] text-left font-[600] text-[#9D0038]">
              {{
                yangon == true
                  ? "+95 1 389915 , +95 1 381 408"
                  : "+95 9 44444 3917"
              }}
            </p>
          </div>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="text-[16px] text-left font-[600] font-cus-primary mb-3">
              Email
            </h1>
            <p class="text-[12px] text-left font-[600] text-[#9D0038]">
              info@msieducation.edu.mm
            </p>
          </div>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="mb-3 text-sm font-semibold text-left font-cus-primary">
              Address
            </h1>
            <p
              class="text-[13px] font-semibold text-[#9D0038] leading-relaxed text-left"
              v-html="
                yangon
                  ? `No.234, 2nd Fl. (R),<br/> Shwebontha St. (MID BL),<br/>Pabedan Tsp, Yangon,<br/>Myanmar.`
                  : `No. 31/3, Between 79 St × 80 St,<br/>38th St, Mahar Aung Myay Township,<br/>Mandalay, Myanmar (Burma)`
              "
            ></p>

          </div>

        </div>
      </div>
      <div class="md:w-[488px] md:h-[520px] md:border-l-2">
        <form class="px-12 py-5 text-left">
          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">NAME</label>
            <br />
            <input
              type="text"
              placeholder="Name"
              class="w-full px-5 py-4 contact-card"
            />
          </div>
          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">EMAIL</label>
            <br />
            <input
              type="text"
              placeholder="Email"
              class="w-full px-5 py-4 contact-card"
            />
          </div>
          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">PHONE NUMBER</label>
            <br />
            <input
              type="text"
              placeholder="Phone number"
              class="w-full px-5 py-4 contact-card"
            />
          </div>
          <div class="mb-2">
            <textarea
              class="w-full px-5 pt-4 contact-card"
              placeholder="Write your thoughts here"
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div class="">
            <div class="flex items-center">
              <input type="checkbox" class="w-5 h-5" />
              <h1 class="ml-4 py-2 md:text-normal ssm:text-[12px]">
                You agreed to the terms and conditions
              </h1>
            </div>
          </div>
          <div class="float-right mb-5">
            <button class="px-8 py-2 sent-button">Sent</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <div class="container my-12">
    <div class="grid grid-cols-3 gap-6">
      <div class="p-3 bg-white cus-standout">
        <div class="text-left md:text-center">
          <div>
            <i
              class="p-3 mb-3 text-white rounded-full fa-solid fa-phone bg-cus-primary"
            ></i>
          </div>
          <h3 class="mb-3 font-bold">Phone</h3>
          <ul>
            <li>{{ datas.data[datas.id].phone[0] }}</li>
            <li>{{ datas.data[datas.id].phone[1] }}</li>
          </ul>
        </div>
      </div>
      <div class="p-3 break-words bg-white cus-standout">
        <div class="text-left md:text-center">
          <div>
            <i
              class="p-3 mb-3 text-white rounded-full fa-regular fa-message bg-cus-primary"
            ></i>
          </div>
          <h3 class="mb-3 font-bold">Email</h3>
          <p>
            {{ datas.data[datas.id].email }}
          </p>
        </div>
      </div>
      <div class="p-3 bg-white cus-standout">
        <div>
          <i
            class="p-3 mb-3 text-white rounded-full fa-solid fa-location-dot bg-cus-primary"
          ></i>
        </div>
        <div class="text-left w-[70%] md:text-center md:w-[100%]">
          <h3 class="mb-3 font-bold">Address</h3>
          <p>
            {{ datas.data[datas.id].address }}
          </p>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="container p-2">
    <img
      src="@/assets/img/contact.png"
      class="relative w-[100%] md:max-w-[500px] md:absolute"
      alt=""
    />
    <div class="mb-10 flex justify-center md:pl-[300px]">
      <div
        class="h-fit max-w-[700px] mx-auto shadow-xl border border-5 relative backdrop-blur-sm bg-gray-50 bg-opacity-60 rounded-t-lg overflow-hidden"
      >
        <h1 class="px-5 py-4 font-bold text-left bg-blue-500 text-slate-50">
          Email Us
        </h1>
        <div class="">
          
          <div class="w-100 my-[30px] px-5 items-center gap-3">
            <div class="flex flex-col">
              <div class="flex flex-wrap justify-between gap-3 lg:flex-nowrap">
              

                <div class="flex w-[100%] shadow-md md:w-[270px] lg:w[100%]">
                  <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-400 border border-r-0 border-gray-300 rounded-l-md"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-r-lg bg-blue-100 border text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    placeholder="User Name"
                  />
                </div>
                <div class="flex w-[100%] shadow-md md:w-[270px] lg:w[48%]">
                  <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-400 border border-r-0 border-gray-300 rounded-l-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-r-lg border bg-blue-100 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    placeholder="Email"
                  />
                </div>
                <div class="flex w-[100%] shadow-md md:w-[270px] lg:w[48%]">
                  <span
                    class="inline-flex items-center px-3 text-sm bg-blue-400 border border-r-0 border-gray-300 text-black-900 rounded-l-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-r-lg border bg-blue-100 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    placeholder="Phone Number"
                  />
                </div>

              
              </div>

              <textarea
                id="message"
                rows="4"
                class="block mt-5 p-2.5 resize-none shadow-lg w-full text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>

          <div
            class="flex items-start justify-start gap-3 h-[100px] px-3 ps-5 mx-auto"
          >
            <input type="checkbox" class="ml-3" name="" id="" />
            <span>
              By using this form you agree with the storage <wbr />
              and handling of your
            </span>
          </div>
          <br />

          <button
            class="absolute flex px-4 py-3 text-white rounded-full bg-cyan-500 bottom-3 left-3"
          >
            send message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 rounded-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="container my-12">
    <div class="flex items-center justify-around mt-5">
      <div
        class="border-black bg-white shadow-2xl px-[100px] py-[175px] rounded-lg border-r-2"
      >
        <h1 class="text-2xl font-bold text-black">Contact Information</h1>
        <div class="p-4 mt-5 bg-blue-200 rounded-lg">
          <p class="font-bold text-black text-md">Phone</p>
          <p class="text-red-400 font-bold text-[15px]">
            +95 1 389915, +95 1 381 408
          </p>
        </div>
        <div class="p-4 mt-5 bg-blue-200 rounded-lg">
          <p class="font-bold text-black text-md">Phone</p>
          <p class="text-red-400 font-bold text-[15px]">
            +95 1 389915, +95 1 381 408
          </p>
        </div>
        <div class="p-4 mt-5 bg-blue-200 rounded-lg">
          <p class="font-bold text-black text-md">Phone</p>
          <p class="text-red-400 font-bold text-[15px]">
            +95 1 389915, +95 1 381 408
          </p>
        </div>
      </div>
      <div class="-ml-[100px]">
        <div
          class="text-left bg-white border-black rounded-lg shadow-2xl px-11 py-11 border-l-5"
        >
          <p class="text-[18px] font-bold mb-2">Name</p>
          <input
            type="text"
            class="text-[14px] font-medium bg-blue-200 px-[100px] py-4 mt-2 rounded-lg mb-5"
            placeholder="Name"
          />
          <p class="text-[18px] font-bold mb-2">Email</p>
          <input
            type="text"
            class="text-[14px] mb-5 font-medium bg-blue-200 px-[100px] py-4 mt-2 rounded-lg"
            placeholder="Email"
          />
          <p class="text-[18px] font-bold mb-2">Phone Number</p>
          <input
            type="text"
            class="text-[14px] font-medium bg-blue-200 px-[100px] py-4 mt-2 rounded-lg"
            placeholder="Phone Number"
          />
          <div class="mt-5 text-left">
            <textarea
              rows="4"
              class="px-[100px] border-2 bg-blue-200 border-blue-300 mt-5 rounded-lg"
              placeholder="Write your thoughts here"
            >
              Write your thoughts here
            </textarea>
            <div class="mt-5">
              <input type="checkbox" class="w-5 h-5 px-5 py-2 rounded-sm" />
              <span class="mx-5 font-bold"
                >You agreed to the terms and conditions</span
              >
            </div>
            <div class="mt-5 text-right">
              <Button type="gradient" class="p-3 px-8 text-right">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <iframe
    :src="datas.data[datas.id].src"
    width="100%"
    height="450"
    style="border: 0"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe> -->
</template>
<script setup>
import { reactive, ref } from "vue";
import Button from "../partials/Button.vue";
const yangon = ref(true);
const datas = reactive({
  data: [
    {
      city: "Yangon Head Office",
      phone: ["+95 1 389915", "+95 1 381 408"],
      email: "info@msieducation.edu.mm",
      address:
        "No-234, 2nd Fl. (R), Shwebontha St. (MID BL), Pabedan Tsp, Yangon, Myanmar.",
      src: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7640.0309891305715!2d96.1509420367157!3d16.77590470831342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sYangon%20Head%20Office%3A%20No-234%2C%202nd%20Floor%20(Right)%2C%20Shwebontha%20Street%20(Middle%20Block)%2C%20Pabedan%20Township%2C%20Yangon%2C%20Myanmar.!5e0!3m2!1sen!2smm!4v1691051774967!5m2!1sen!2smm",
    },
    {
      city: "Mandalay Branch",
      phone: ["+95 9 444 443 916", "+95 9 444 443 917"],
      email: "info@msieducation.edu.mm",
      address:
        "No.113, 40-A St., Btn 78 St. x 79 St., Maharbeetan St., MaharAungMyay Tsp, Mandalay, Myanmar.",
      src: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d885.8609284302435!2d96.08400450030062!3d21.960457429028946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%20-%20113%2C%2078%20x%2079%2C%20Between%2040%20x%2041%2C!5e0!3m2!1sen!2smm!4v1691386145860!5m2!1sen!2smm",
    },
    // {
    //   city: "MSI Academy",
    //   phone: ["+959422557884", "+959765103915"],
    //   email: "info@msieducation.edu.mm",
    //   address:
    //     "Room 303, 3rd Fl., Grand Khattar Residence, Khattar St., Sanchaung Tsp, Yangon, Myanmar.",
    //   src: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3819.517659772376!2d96.12560507385312!3d16.8006563194451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRoom%20303%2C%20Grand%20Khattar%20Resident%2C%20Khattar%20Street%2C%20Sanchaung%20Township%2C%20Yangon%2C%20Myanmar.!5e0!3m2!1sen!2smm!4v1691052164597!5m2!1sen!2smm",
    // },
  ],
  id: 0,
});

const changeId = (i) => {
  datas.id = i;
  // console.log(datas.data[datas.id].email);
  // console.log(i);
};
</script>
<style scoped>
.bgDot {
  background-image: url("@/assets/img/bgDot.png");
  background-repeat: repeat;
  background-size: 100%;
}
</style>
