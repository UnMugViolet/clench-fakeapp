<script setup>
import { ref, computed } from "vue";
import projectData from "@/data/projects.json";

const projects = ref(projectData);

const gridItems = computed(() => {
  return projects.value.map((project) => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      images: project.images,
      gridPosition: project.gridPosition,
      thumbnail: project.thumbnail,
    };
  });
});
</script>

<template>
  <div class="h-screen py-10">
    <div class="grid grid-cols-4 grid-rows-12 gap-8 h-screen">
      <div 
        v-for="item in gridItems"
        :key="item.id"
        :class="item.gridPosition + ' rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'"
        :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      ></div>
    </div>
  </div>
</template>
