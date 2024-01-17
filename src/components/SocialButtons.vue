<template>
  <nav id="socialNav">
    <div class="nav-content">
      <div class="toggle-btn">
        <img src="../assets/img/message.png" class="p-3" alt="">
      </div>
      <span style="--i: 1">
        <a
          href="https://www.facebook.com/MyanmarSearchInternational?mibextid=ZbWKwL"
          target="_blank"
          ><i class="fa-brands fa-facebook"></i
        ></a>
      </span>
      <span style="--i: 2">
        <a href="https://t.me/msieducation" target="_blank"
          ><i class="fa-brands fa-telegram"></i
        ></a>
      </span>
      <span style="--i: 3">
        <a
          href="https://invite.viber.com/?g2=AQAtldgj44bKy1E%2B99iRJeGTwNTZkAat1yjGtaEf%2FrmfbyU6ljwpfXYnOAP2sDw0"
          target="_blank"
          ><i class="fa-brands fa-viber"></i
        ></a>
      </span>
      <span style="--i: 4">
        <a
          href="https://instagram.com/msi.education?igshid=ZGUzMzM3NWJiOQ=="
          target="_blank"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </span>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getting HTML elements
  const nav = document.querySelector("#socialNav");
  const toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // js code to make draggable nav
  //   function onDrag({ movementY }) {
  //     //movementY gets mouse vertical value
  //     const navStyle = window.getComputedStyle(nav), //getting all css style of nav
  //       navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
  //       navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
  //       windHeight = window.innerHeight; // getting window height

  //     nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  //     if (navTop > windHeight - navHeight) {
  //       nav.style.top = `${windHeight - navHeight}px`;
  //     }
  //   }

  //   //this function will call when user click mouse's button and  move mouse on nav
  //   nav.addEventListener("mousedown", () => {
  //     nav.addEventListener("mousemove", onDrag);
  //   });

  //   //these function will call when user relase mouse button and leave mouse from nav
  //   nav.addEventListener("mouseup", () => {
  //     nav.removeEventListener("mousemove", onDrag);
  //   });
  //   nav.addEventListener("mouseleave", () => {
  //     nav.removeEventListener("mousemove", onDrag);
  //   });
});
</script>

<style scoped>
nav{
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
nav .nav-content{
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
}
.nav-content .toggle-btn,
.nav-content span a{
  height: 60px;
  width: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}
.nav-content .toggle-btn{
  font-size: 35px;
  color: #0e2431;
  z-index: 100;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.6s ease;
}
nav.open .toggle-btn{
  transform: rotate(-315deg);
}
.nav-content span{
  position: absolute;
  transition: all 0.6s ease;
  opacity: 0;
}
nav.open .nav-content span{
  transform: rotate(calc(var(--i) * (360deg/8))) translateY(120px);
  opacity: 1;
}
.nav-content span a{
  text-decoration: none;
  transform: rotate(45deg);
}
.nav-content span a i{
  font-size: 24px;
  color: #0e2431;
  transform: rotate(calc(var(--i) * (360deg/ -8)));
  opacity: 0.8;
  transition: 0.2s;
}
.nav-content span a:hover i{
  opacity: 1;
}
</style>
