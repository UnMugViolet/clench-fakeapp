<template>
  <div class="flex justify-center relative hover:backdrop-blur-md w-full h-45dvh">
    <div class="w-full h-full bg-cover bg-center rounded-md" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
    <div class="absolute bottom-0 left-0 py-4 md:py-6 px-4 md:px-12 backdrop-blur-sm w-full bg-gradient-to-t from-black to-transparent rounded-md">
      <h4 class="font-semibold mb-2 md:text-base text-sm">{{title}}</h4>
      <p class="mb-1 md:text-base text-sm">{{description}}</p>
      <router-link :to="urlEvent" class="flex gap-2">
        <img src="/ressources/icones/calendar.svg" alt="calendar-icon" />
        <p class="text-zinc-500 md:text-base text-sm">Prévu en {{ date }}</p>
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
