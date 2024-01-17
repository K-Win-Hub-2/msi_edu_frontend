<template>
  <div class="grid items-center text-center">
    <section class="w-100 h-[500px] bg-Logo"></section>
    <section>
      <MessageUs />
    </section>
  </div>
</template>

<script setup>
import MessageUs from "@/components/ContactUs/MessageUs.vue";
</script>

<style scoped>
.bg-Logo {
  background: url("@/assets/img/logo.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: 50% 60%;
}
</style>
