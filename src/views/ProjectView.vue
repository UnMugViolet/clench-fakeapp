<script setup>
import { ref } from "vue";
import project1 from "@/assets/images/mockup1.jpg";
import project2 from "@/assets/images/mockup2.jpg";
import project3 from "@/assets/images/website-mockup.png";
import project4 from "@/assets/images/archi-affiche.jpg";
import project5 from "@/assets/images/website-bread.jpg";
import project6 from "@/assets/images/nft-banner.jpg";
import project7 from "@/assets/images/festival-env-affiche.jpg";
import project9 from "@/assets/images/nuit-numerique-affiche.jpg";
</script>

<template>
  <div class="h-screen py-10">
    <div class="grid grid-cols-4 grid-rows-12 gap-8 h-screen">
      <div
        class="col-start-1 col-end-2 row-start-1 row-end-6 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project1 + ')' }"></div>
      <div
        class="col-start-1 col-end-2 row-start-6 row-end-10 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project2 + ')' }"></div>
      <div
        class="col-start-1 col-end-3 row-start-10 row-end-13 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project3 + ')' }"></div>
      <div
        class="col-start-2 col-end-3 row-start-5 row-end-10 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project4 + ')' }"></div>
      <div
        class="col-start-2 col-end-4 row-start-1 row-end-5 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project5 + ')' }"></div>
      <div
        class="col-start-3 col-end-5 row-start-9 row-end-13 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project6 + ')' }"></div>
      <div
        class="col-start-3 col-end-4 row-start-5 row-end-9 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project7 + ')' }"></div>
      <div
        class="col-start-4 col-end-5 row-start-1 row-end-9 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        :style="{ backgroundImage: 'url(' + project9 + ')' }"></div>
    </div>
  </div>
</template>
