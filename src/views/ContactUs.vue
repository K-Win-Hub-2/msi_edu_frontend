<template>
  <div class="text-center">
    <section>
      <div class="flex justify-center lg:mt-36 md:mt-24 ssm:mt-14 mb-10">
        <img
          src="@/assets/img/logo.png"
          class="md:w-[600px] ssm:w-[200px] md:h-[250px] ssm:h-[50px]"
          alt=""
        />
      </div>
    </section>
    <!-- <section class="w-100 h-[500px] bg-Logo"></section> -->
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
