<script setup>
import { ref } from "vue";

const flagImage = ref();
const props = defineProps(["data"]);
if (props.data) {
  flagImage.value =
    "http://adminpanel.msieducation.edu.mm/postImage/" + props.data.image;
}
</script>
<template>
  <router-link
    :to="{ name: 'study-pathway.country', params: { id: props.data.id } }"
    class="flex justify-center items-center"
    v-if="flagImage"
  >
    <div class="">
      <img
        class="border object-none rounded-[50%] w-[130px] h-[130px]"
        :src="flagImage"
      />

      <p class="mt-[20px] text-center text-[19px] text-[#205887] underline">
        {{ props.data.name }}
      </p>
    </div>
  </router-link>
</template>
