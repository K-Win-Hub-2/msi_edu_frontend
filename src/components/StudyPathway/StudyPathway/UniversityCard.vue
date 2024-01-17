<template>
  <div class="w-[315px] h-[337px] px-3 py-2 rounded-lg shadow-lg bg-white">
    <img
      class="rounded-lg"
      src="https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=sph"
      alt=""
    />
    <h1 class="text-[16px] font-semibold mt-3">Carnegie Mellon University</h1>
    <p class="mt-2">This is intro</p>
    <div class="flex justify-center mt-3">
      <Button
        class="px-[26px] py-[6px] text-[16px] float-right"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      >
    </div>
  </div>
</template>

<script setup>
import Button from "../../../components/partials/Button.vue";
</script>

<style lang="scss" scoped></style>
