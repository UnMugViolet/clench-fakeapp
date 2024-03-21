<!-- <template>
  <div >
    <div class="grid grid-cols-4 grid-rows-12 gap-8">
      <div class="col-start-1 col-end-2 row-start-1 row-end-6 rounded-md">
        <img src="@/assets/images/project-1.png" alt="project-1" class="w-full h-full"/>
      </div>
      <div class="col-start-1 col-end-2 row-start-6 row-end-10 rounded-md">
        <img src="@/assets/images/project-2.png" alt="project-2" class="w-full h-full"/>
      </div>
      <div class="col-start-1 col-end-3 row-start-10 row-end-13 rounded-md">
        <img src="@/assets/images/project-3.png" alt="project-4" class="w-full h-full"/>
      </div>
      <div class="col-start-2 col-end-3 row-start-5 row-end-10 rounded-md">
        <img src="@/assets/images/project-4.png" alt="project-5" class="w-full h-full"/>
      </div>
      <div class="col-start-2 col-end-4 row-start-1 row-end-5 rounded-md">
        <img src="@/assets/images/project-5.png" alt="project-6" class="w-full h-full"/>
      </div>
      <div class="col-start-3 col-end-5 row-start-9 row-end-13 rounded-md">
        <img src="@/assets/images/project-6.png" alt="project-7" class="w-full h-full"/>
      </div>
      <div class="col-start-3 col-end-4 row-start-5 row-end-9 rounded-md">
        <img src="@/assets/images/project-7.png" alt="project-8" class="w-full h-full"/>
      </div>
      <div class="col-start-4 col-end-5 row-start-1 row-end-9 rounded-md">
        <img src="@/assets/images/project-9.png" alt="project-9" class="w-full h-full"/>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div>
    <div class="grid grid-cols-4 grid-rows-12 gap-8">
      <div class="col-start-1 col-end-2 row-start-1 row-end-6 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-1.png') + ')' }"></div>
      <div class="col-start-1 col-end-2 row-start-6 row-end-10 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-2.png') + ')' }"></div>
      <div class="col-start-1 col-end-3 row-start-10 row-end-13 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-3.png') + ')' }"></div>
      <div class="col-start-2 col-end-3 row-start-5 row-end-10 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-4.png') + ')' }"></div>
      <div class="col-start-2 col-end-4 row-start-1 row-end-5 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-5.png') + ')' }"></div>
      <div class="col-start-3 col-end-5 row-start-9 row-end-13 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-6.png') + ')' }"></div>
      <div class="col-start-3 col-end-4 row-start-5 row-end-9 rounded-md h-32 w-32 bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('@/assets/images/project-7.png') + ')' }"></div>
      <div class="col-start-4 col-end-5 row-start-1 row-end-9 rounded-md h-32 w-32 bg-center bg-cover" 
        :style="{ backgroundImage: 'url(' + require('@/assets/images/project-9.png') + ')' }"></div>
    </div>
  </div>
</template>