<template>
  <div class="flex justify-center relative hover:backdrop-blur-md w-full image-size">
    <div class="w-full h-full bg-cover bg-center rounded-md" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
    <div class="absolute bottom-0 left-0 py-6 px-12 backdrop-blur-sm w-full bg-gradient-to-t from-black to-transparent rounded-md">
      <h4 class="font-semibold mb-2">{{title}}</h4>
      <p class="mb-1">{{description}}</p>
      <router-link :to="urlEvent" class="flex gap-2">
        <img src="/src/assets/icones/calendar.svg" alt="calendar-icon" />
        <p class="text-slate-400">Rejoindre {{ date }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps([
    'title',
    'description',
    'imageUrl',
    'urlEvent',
    'date'
  ]);
</script>

<style scoped>

  .image-size{
    height: 45dvh;
  }

</style>