<template>
  <div>
    <h3 class="cus-heading text-cus-secondary text-center capitalize mb-12">
      Mission, Vision &amp; History
    </h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <template v-for="vision in visions">
        <template v-if="vision.span">
          <div class="flex flex-col gap-6 p-4 border cus-rounded" :class="vision.span">
            <div>
              <div
                class="w-[50px] h-[50px] bg-cus-primary-light rounded-full"
              ></div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6">{{ vision.name }}</h3>
              <p v-html="vision.content"></p>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex flex-col justify-between gap-6 p-4 border cus-rounded">
            <div>
              <div
                class="w-[50px] h-[50px] bg-cus-primary-light rounded-full"
              ></div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6">{{ vision.name }}</h3>
              <p v-html="vision.content"></p>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visions = ref([
  {
    name: "Mission",
    span: "row-span-2",
    content:
      "﻿၁။ လူ့စွမ်းအားအရင်းအမြစ်ကို မြင့်တင်ပေးခြင်း။<br/><br/> ၂။ အရည်အချင်းပြည့်ဝသော လူဦးရေ တိုးပွားလာခြင်း မှတစ်ဆင့် နိုင်ငံ၏ စီးပွားရေးကိုပါ တိုးတက်လာစေခြင်း။ <br/><br/> ၃။ စွန့်ဦးတည်ထောင်မှု အရည်အချင်း တိုးတက်လာစေခြင်း။ <br/><br/> ၄။ ပြောင်းလဲလာသော ခေတ်ရေစီးကြောင်း ပေါ်မူတည်၍ လိုက်လျောညီထွေစွာ လုပ်ဆောင်နိုင်စွမ်း မြှင့်တင်ခြင်း။ <br/><br/> ၅။ စဉ်ဆက်မပြတ် လေ့လာနိုင်စေရန် လမ်းညွန်အကြံပေးခြင်း။",
  },
  {
    name: "Vision",
    content: "လူ့စွမ်းအား အရင်းအမြစ် ကိုရင်းနှီးမြုပ်နှံခြင်း။",
  },
  {
    name: "Strategy",
    content:
      "စဉ်ဆက်မပြတ်လေ့လာ ခြင်းနှင့် <br/><br/> လေ့လာခြင်း၏ တန်ဖိုး ကို သိရှိနိုင်စေရန်။",
  },
  {
    name: "Tactics",
    span: 'col-span-2',
    content: "Knowledge, Career And Family",
  },
]);
</script>

<style lang="scss" scoped></style>
