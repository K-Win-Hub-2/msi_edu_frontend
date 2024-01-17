<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
// import Link from "@/components/partials/Link.vue";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data: function () {
    return {
      calendarOptions: {
        headerToolbar: {
          left: "dayGridMonth timeGridDay listDay",
          center: "title",
          right: "prev today next",
        },
        buttonText: {
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
        },
        eventBorderColor: "rgba(145, 85, 253, 0.16)",
        eventTextColor: "#696cff",
        eventBackgroundColor: "rgba(145, 85, 253, 0.16)",
        eventDisplay: "block",
        nowIndicator: "true",
        dayMaxEventRows: true,
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        events: [{ title: "Meeting", start: new Date() }],
        eventClick: function (el) {
          let name = el.event._def.extendedProps.relatedPatient.name;
          let status = el.event._def.extendedProps.status;
          let id = el.event._def.extendedProps.relatedPatient._id;
          let phone = el.event._def.extendedProps.phone;
          let appointment_id = el.event._def.extendedProps._id;
          // if (status === "Old") {
          router.push({ name: "patient.detail", params: { id: id } });
          // }
          // else {
          //   router.push({
          //     path: "/editPatient",
          //     query: { name, phone, appointment_id },
          //   });
          // }
        },
        views: {
          dayGrid: {
            dayMaxEventRows: 3, // adjust to 6 only for timeGridWeek/timeGridDay
          },
        },
      },
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-4 mt-[110px] mb-20">
      <form
        class="flex flex-col items-center gap-6 mt-4 w-[90%] mx-auto border-2 p-5 rounded-lg bg-white shadow-lg"
      >
        <h1 class="text-3xl text-center mt-5">
          <span class="text-cus-secondary"> Book Appointment</span>
        </h1>

        <div class="flex flex-col w-[80%]">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="flex flex-col w-[80%]">
          <label for="name">Phone</label>
          <input
            type="text"
            id="name"
            class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div class="flex flex-col w-[80%]">
          <label for="name">Guidance Ph no. </label>
          <input
            type="text"
            id="name"
            class="rounded-lg bg-gray-100 border text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="
Please enter the contact phone number for guidance"
          />
        </div>
        <div class="flex flex-col w-[80%]">
          <label for="name">Email</label>
          <input
            type="text"
            id="name"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter Your Email"
          />
        </div>
        <div class="flex flex-col w-[80%]">
          <label for="name">Appointment Issue </label>
          <ul class="my-2">
            <li>
              <input type="radio" name="adsf" id="" /> Academic Counselling
            </li>
            <li><input type="radio" name="adsf" id="" /> Documentation</li>
          </ul>
        </div>

        <div class="w-[80%]">
          <div class="inline-block">
            <div
              class="text-center flex px-5 rounded-full py-3 border transition-all duration-75 shadow-md bg-cus-primary text-white hover:bg-white hover:text-cus-primary"
            >
              Register
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
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- <div class="col-span-8 mt-[110px] mb-20">
      <div class="w-[100%] bg-white border rounded-lg shadow-lg mt-4 p-5">
     
        <div class="flex justify-between font-bold">
     
          <div class="flex justify-between gap-3">
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Month
            </button>
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Day
            </button>
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              List
            </button>
          </div>
      
          <div class="text-2xl">August 2023</div>
          <div class="flex justify-between gap-3">
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              today
            </button>
            <button
              class="bg-cus-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
     

        <div class="h-[460px] mt-5 overflow-y-scroll bg-gray-100">
          <div class="flex justify-center border text-2xl font-bold">
            <div class="border w-40 text-center">Sun</div>
            <div class="border w-40 text-center">Mon</div>
            <div class="border w-40 text-center">Tue</div>
            <div class="border w-40 text-center">Wed</div>
            <div class="border w-40 text-center">Thu</div>
            <div class="border w-40 text-center">Fri</div>
            <div class="border w-40 text-center">Sat</div>
          </div>
          <div class="grid grid-cols-7 border">
            <div class="border min-h-[70px] text-right px-2">1</div>
            <div class="border min-h-[70px] text-right px-2">2</div>
            <div class="border min-h-[70px] text-right px-2">3</div>
            <div class="border min-h-[70px] text-right px-2">4</div>
            <div class="border min-h-[70px] text-right px-2">5</div>
            <div class="border min-h-[70px] text-right px-2">6</div>
            <div class="border min-h-[70px] text-right px-2">7</div>
            <div class="border min-h-[70px] text-right px-2">8</div>
            <div class="border min-h-[70px] text-right px-2">9</div>
            <div class="border min-h-[70px] text-right px-2">10</div>
            <div class="border min-h-[70px] text-right px-2">11</div>
            <div class="border min-h-[70px] text-right px-2">12</div>
            <div class="border min-h-[70px] text-right px-2">13</div>
            <div class="border min-h-[70px] text-right px-2">14</div>
            <div class="border min-h-[70px] text-right px-2">15</div>
            <div class="border min-h-[70px] text-right px-2">16</div>
            <div class="border min-h-[70px] text-right px-2">17</div>
            <div class="border min-h-[70px] text-right px-2">18</div>
            <div class="border min-h-[70px] text-right px-2">19</div>
            <div class="border min-h-[70px] text-right px-2">20</div>
            <div class="border min-h-[70px] text-right px-2">21</div>
            <div class="border min-h-[70px] text-right px-2">22</div>
            <div class="border min-h-[70px] text-right px-2">23</div>
            <div class="border min-h-[70px] text-right px-2">24</div>
            <div class="border min-h-[70px] text-right px-2">25</div>
            <div class="border min-h-[70px] text-right px-2">26</div>
            <div class="border min-h-[70px] text-right px-2">27</div>
            <div class="border min-h-[70px] text-right px-2">28</div>
            <div class="border min-h-[70px] text-right px-2">29</div>
            <div class="border min-h-[70px] text-right px-2">30</div>
            <div class="border min-h-[70px] text-right px-2">31</div>
            <div class="border min-h-[70px] text-right px-2">32</div>
            <div class="border min-h-[70px] text-right px-2">33</div>
            <div class="border min-h-[70px] text-right px-2">34</div>
            <div class="border min-h-[70px] text-right px-2">35</div>
            <div class="border min-h-[70px] text-right px-2">36</div>
            <div class="border min-h-[70px] text-right px-2">37</div>
            <div class="border min-h-[70px] text-right px-2">38</div>
            <div class="border min-h-[70px] text-right px-2">39</div>
            <div class="border min-h-[70px] text-right px-2">40</div>
            <div class="border min-h-[70px] text-right px-2">41</div>
            <div class="border min-h-[70px] text-right px-2">42</div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-span-8 mt-[110px] mb-20">
      <div class="w-[100%] bg-white border rounded-lg shadow-lg mt-4 p-5">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </div>
</template>
