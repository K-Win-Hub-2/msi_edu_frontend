<script setup>
import Button from "../components/partials/Button.vue";
</script>
<template>
  <div class="container flex justify-center">
    <div class="md:w-[926px] ssm:w-[320px] shadow-xl md:my-36 ssm:my-8 border">
      <h1 class="md:text-md ssm:text-[20px] font-semibold py-6 px-16">
        Consultation Form
      </h1>
      <hr class="text-black" />

      <div class="md:py-6 ssm:py-4 ssm:px-5 md:px-16 md:w-full">
        <!--  -->
        <div
          class="flex ssm:flex-col md:flex-row md:space-x-5 ssm:space-y-3 md:space-y-0 justify-evenly"
        >
          <div class="w-full">
            <label for="" class="">Name</label> <br />
            <input
              type="text"
              placeholder=" Enter your name"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
          <div class="md:w-full">
            <label for="" class="">Date Of Bath</label> <br />
            <input
              type="date"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
        </div>
        <!-- email  -->
        <div class="w-full mt-5">
          <label for="" class="">Email Address</label> <br />
          <input
            type="email"
            placeholder=" Enter your email address"
            class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
            name=""
            id=""
          />
        </div>
        <!-- address  -->
        <div class="w-full mt-5">
          <label for="" class="">Phone</label> <br />
          <input
            type="number"
            placeholder=" Enter your phone number"
            class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
            name=""
            id=""
          />
        </div>
        <!-- phone  -->
        <div class="w-full mt-8">
          <label for="" class="">Guidance's Phone</label> <br />
          <input
            type="number"
            placeholder=" Enter your guidance's phone number"
            class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
            name=""
            id=""
          />
        </div>
        <div
          class="flex ssm:flex-col md:flex-row md:space-x-5 ssm:space-y-3 mt-8 justify-evenly"
        >
          <div class="w-full">
            <label for="" class="">Home No</label> <br />
            <input
              type="text"
              placeholder=" Enter your name"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
          <div class="w-full">
            <label for="" class="">street/Road</label> <br />
            <input
              type="date"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
        </div>
        <div
          class="flex ssm:flex-col md:flex-row md:space-x-5 ssm:space-y-3 mt-5 justify-evenly"
        >
          <div class="w-full">
            <label for="" class="">Quarter/Village</label> <br />
            <input
              type="text"
              placeholder=" Enter your name"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
          <div class="w-full">
            <label for="" class="">Township</label> <br />
            <input
              type="text"
              class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
              name=""
              id=""
            />
          </div>
        </div>
        <div class="w-full mt-5">
          <label for="" class="">Inquiry Message</label> <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            class="py-3 px-4 w-full bg-[#EBEAEA] rounded-md"
            placeholder="Enter your question"
          >
          </textarea>
        </div>

        <div class="mt-8">
          <div
            class="flex ssm:flex-col md:flex-row md:justify-rounded ssm:space-y-4 md:space-y-0 md:space-x-56"
          >
            <div class="">
              <p>Do you have passport?</p>
              <ul class="mt-3 space-y-3">
                <li class="flex items-center space-x-3">
                  <input type="radio" name="" id="" class="w-5 h-5" />
                  <p>Yes</p>
                </li>
                <li class="flex items-center space-x-3">
                  <input type="radio" name="" id="" class="w-5 h-5" />
                  <p>No</p>
                </li>
              </ul>
            </div>
            <div class="">
              <p>Do you have passport?</p>
              <ul class="mt-3 space-y-3">
                <li class="flex items-center space-x-3">
                  <input type="radio" name="" id="" class="w-5 h-5" />
                  <p>Yes</p>
                </li>
                <li class="flex items-center space-x-3">
                  <input type="radio" name="" id="" class="w-5 h-5" />
                  <p>No</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="md;mt-16 md:mb-56 ssm:mb-14">
          <Button
            class="lg:px-[40px] ssm:mr-7 ssm:px-[30px] ssm:mt-4 md:mt-0 ssm:py-[8px] md:px-[40px] px-[17px] lg:py-[8px] md:py-[8px] py-[2px] rounded-[20px] md:text-[24px]text-[15px] ssm:float-right md:mr-[35px] mr-[2px]"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Submit</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
