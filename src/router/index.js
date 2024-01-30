import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Services from "@/views/Services.vue";
import Courses from "@/views/Courses.vue";
import StudyPathway from "@/views/StudyPathway/StudyPathway.vue";
import Events from "@/views/Events.vue";
import ContactUs from "@/views/ContactUs.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetail from "@/views/EventDetail.vue";
import EventRegisterForm from "@/components/Forms/EventRegisterForm.vue";
import EventRegisterFormSEG from "@/components/Forms/EventRegisterFormSEG.vue";
import BookAppointmentForm from "@/components/Forms/BookAppointmentForm.vue";
import ConsultationForm from "@/components/Forms/ConsultationForm.vue";
import Singapore from "@/views/StudyPathway/Singapore.vue";
import Thailand from "@/views/StudyPathway/Thailand.vue";
import Malaysia from "@/views/StudyPathway/Malaysia.vue";
import UK from "@/views/StudyPathway/UK.vue";
import Canada from "@/views/StudyPathway/Canada.vue";
import Switzerland from "@/views/StudyPathway/Switzerland.vue";
import Vietnam from "@/views/StudyPathway/Vietnam.vue";
import Italy from "@/views/StudyPathway/Italy.vue";
import Usa from "@/views/StudyPathway/Usa.vue";
import Scholarship from "@/views/Scholarship.vue";
// import UniversityDetail from "@/views/Universities/UniversityDetail.vue";
import UniversityDetail from "../views/StudyPathway/UniversityDetail.vue";
import UpcomingEvent from "@/views/UpcomingEvent.vue";
import UpcomingEventDetail from "@/views/UpComingEventDetail.vue";
import BookAppointmentForm2 from "../components/Forms/AppointmentForm2.vue";
import AppointmentConfirm from "../components/Forms/AppointmentConfirm.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1));

      return {
        el: element,
        behavior: "smooth",
        top: 100,
      };
    } else {
      return {
        top: 0,
        behavior: "auto",
      };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
      children: [
        {
          path: "/services#faq",
          name: "services#faq",
          component: Services,
        },
      ],
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutView,
    },
    {
      path: "/study-pathway",
      children: [
        {
          path: "",
          name: "study-pathway",
          component: StudyPathway,
        },
        {
          path: "countries/singapore",
          name: "study-pathway.countries.singapore",
          component: Singapore,
        },
        {
          path: "countries/thailand",
          name: "study-pathway.countries.thailand",
          component: Thailand,
        },
        {
          path: "countries/malaysia",
          name: "study-pathway.countries.malaysia",
          component: Malaysia,
        },
        {
          path: "countries/canada",
          name: "study-pathway.countries.canada",
          component: Canada,
        },
        {
          path: "countries/uk",
          name: "study-pathway.countries.uk",
          component: UK,
        },
        {
          path: "countries/switzerland",
          name: "study-pathway.countries.switzerland",
          component: Switzerland,
        },
        {
          path: "countries/vietnam",
          name: "study-pathway.countries.vietnam",
          component: Vietnam,
        },
        {
          path: "countries/italy",
          name: "study-pathway.countries.italy",
          component: Italy,
        },
        {
          path: "countries/usa",
          name: "study-pathway.countries.usa",
          component: Usa,
        },
      ],
    },
    {
      path: "/events",
      children: [
        {
          path: "",
          name: "events",
          component: Events,
        },
        {
          path: ":id",
          name: "events.detail",
          props: true,
          component: EventDetail,
        },
        {
          path: "/upcoming",
          name: "events.upcoming",
          props: true,
          component: UpcomingEvent,
        },
        {
          path: "/upcomingDetail/:id",
          name: "event.upcomingDetail",
          props: true,
          component: UpcomingEventDetail,
        },
      ],
    },
    {
      path: "/universities",
      children: [
        {
          // path: ":id",
          // name: "universities.detail",
          // props: true,
          // component: UniversityDetail,
          path: "/detail/:id",
          name: "universities.detail",
          component: UniversityDetail,
          props: true,
        },
      ],
    },
    // {
    //   path: "/events-detail",
    //   name: "events-detail",
    //   component: EventDetail,
    // },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/event-register-form/:id",
      name: "event-register-form",
      component: EventRegisterForm,
      props: true,
    },
    {
      path: "/event-register-form-SEG",
      name: "event-register-form-SEG",
      component: EventRegisterFormSEG,
    },
    // {
    //   path: "/book-appointment-form",
    //   name: "book-appointment-form",
    //   component: BookAppointmentForm,
    // },
    {
      path: "/appointment-form",
      name: "appointment-form",
      component: BookAppointmentForm,
    },
    {
      path: "/appointment-form-2",
      name: "appointment-form2",
      component: BookAppointmentForm2,
    },
    {
      path: "/appointment-confirm",
      name: "appointment-confirm",
      component: AppointmentConfirm,
    },
    {
      path: "/consultation-form",
      name: "consultation-form",
      component: ConsultationForm,
    },
    {
      path: "/scholarship",
      name: "scholarship",
      component: Scholarship,
    },
    // {
    // 	path: "/about",
    // 	name: "about",
    // 	// route level code-splitting
    // 	// this generates a separate chunk (About.[hash].js) for this route
    // 	// which is lazy-loaded when the route is visited.
    // 	component: () => import("../views/AboutView.vue"),
    // },import { AboutView } from '@';
  ],
});

export default router;
