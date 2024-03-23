<script setup>
import { ref } from 'vue'
  import project1 from '@/assets/images/project-1.png'
  import project2 from '@/assets/images/project-2.png'
  import project3 from '@/assets/images/project-3.png'
  import project4 from '@/assets/images/project-4.png'
  import project5 from '@/assets/images/project-5.png'
  import project6 from '@/assets/images/project-6.png'
  import project7 from '@/assets/images/project-7.png'
  import project9 from '@/assets/images/project-9.png'
</script>

<template>
  <div class="h-screen">
    <div class="grid grid-cols-4 grid-rows-12 gap-8 h-screen ">
      <div class="col-start-1 col-end-2 row-start-1 row-end-6 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project1 + ')' }"></div>
      <div class="col-start-1 col-end-2 row-start-6 row-end-10 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project2 + ')' }"></div>
      <div class="col-start-1 col-end-3 row-start-10 row-end-13 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project3 + ')' }"></div>
      <div class="col-start-2 col-end-3 row-start-5 row-end-10 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project4 + ')' }"></div>
      <div class="col-start-2 col-end-4 row-start-1 row-end-5 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project5 + ')' }"></div>
      <div class="col-start-3 col-end-5 row-start-9 row-end-13 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project6 + ')' }"></div>
      <div class="col-start-3 col-end-4 row-start-5 row-end-9 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project7 + ')' }"></div>
      <div class="col-start-4 col-end-5 row-start-1 row-end-9 rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105" :style="{ backgroundImage: 'url(' + project9 + ')' }"></div>
    </div>
  </div>
</template>