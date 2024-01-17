<template>
  <div class="mt-[100px] container mb-20" id="registerForm">
    <form
      class="flex flex-col items-center gap-6 mt-4 w-[80%] mx-auto border-2 p-5 rounded-lg bg-white shadow-lg"
    >
      <h1 class="text-3xl text-center mt-5">
        <span class="text-cus-secondary"> SEG (MDY Page)</span>
      </h1>
      <div class="text-left w-[80%] mb-5 lg:w-[70%]">
        "Swiss Education Group (SEG) ၏ ျမန္မာေက်ာင္းသားမ်ား ေလၽွာက္ထားရယူ
        ႏိုင္မယ့္Switzerland Scholarship ႏွင့္ Postgraduate Education Pathway
        မ်ားအေၾကာင္း Online ေဆြးေႏြးပြဲ"
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Enter Your Name"
        />
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Phone</label>
        <input
          type="text"
          id="name"
          class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Enter Your Phone Number"
        />
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Facebook Name</label>
        <input
          type="text"
          id="name"
          class="rounded-lg bg-gray-100 border text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Enter your Facebook name"
        />
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Email</label>
        <input
          type="text"
          id="name"
          class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Enter Your Email"
        />
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Current Education Level </label>
        <ul class="my-2">
          <li><input type="radio" name="adsf" id="" /> University</li>
          <li><input type="radio" name="adsf" id="" /> ၁၀ တန်းေအာင်</li>
          <li><input type="radio" name="adsf" id="" /> ၉ တန်းေအာင်</li>
        </ul>
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Interested Course </label>
        <input
          type="text"
          id="name"
          class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Please indicate the courses you are interested in"
        />
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">English Proficiency</label>
        <ul class="my-2">
          <li><input type="radio" name="adsf" id="" /> IELTS / TOEFL</li>
          <li><input type="radio" name="adsf" id="" /> IELTS / TOEFL</li>
        </ul>
      </div>
      <div class="flex flex-col w-[80%] lg:w-[70%]">
        <label for="name">Address </label>
        <textarea
          name=""
          class="resize-none bg-gray-100 rounded-lg border text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          id=""
          cols="30"
          rows="3"
          placeholder="Enter your Address "
        ></textarea>
      </div>
      <div class="w-[80%] lg:w-[70%]">
        <Link type="primary"
          >Register
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
            /></svg
        ></Link>
      </div>
    </form>
  </div>
</template>
<script setup>
import Link from "@/components/partials/Link.vue";
</script>
