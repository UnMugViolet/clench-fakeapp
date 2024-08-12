<script setup>
    const props = defineProps([
        'title',
        'subtitle',
        'description'
    ]); 
</script>

<template>
    <div class="flex flex-col justify-start mb-10 md:mb-0 md:w-1/2">
      <h1 class="text-3xl md:text-5xl font-bold">{{ title }}</h1>
      <img src="/ressources/icones/users.svg" alt="Authentication" class="flex justify-start w-24 py-8" />
      <h2 class="font-semibold mb-2">{{ subtitle }}</h2>
      <p class="text-base text-gray-500 w-3/4">
        {{ description }}
      </p>
    </div>
</template>

