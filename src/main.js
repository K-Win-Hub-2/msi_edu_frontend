import { createApp } from "vue";
import { createPinia } from "pinia";
import "vue-toast-notification/dist/theme-bootstrap.css"; //notification
import WOW from "wow.js";
import "../src/axios/index";

import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification"; //notification

import * as te from "tw-elements";

import { setupCalendar, Calendar, DatePicker } from "v-calendar";

import "./assets/css/main.css";
import "v-calendar/style.css";
import { counterUp } from "counterup2";

const app = createApp(App);

// Use plugin defaults (optional)
app.use(setupCalendar, {});

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// Use the components
app.component("VCalendar", Calendar);
app.component("VDatePicker", DatePicker);
app.use(ToastPlugin); //notification
app.use(createPinia());
app.use(router);

app.mount("#app");
