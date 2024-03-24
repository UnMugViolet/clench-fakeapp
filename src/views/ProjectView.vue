<script setup>
import { ref, computed } from "vue";
import projectData from "@/data/projects.json";

const projects = ref(projectData);
const showModal = ref(false);
const currentProject = ref(null);

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

const openModal = (project) => {
  currentProject.value = project;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="h-screen py-10">
    <div class="grid grid-cols-4 grid-rows-12 gap-8 h-screen">
      <div 
        @click="openModal(item)" 
        v-for="item in gridItems" :key="item.id" :class="item.gridPosition + ' rounded-md bg-center bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'"
        :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"></div>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-10">
      <div @click="closeModal" class="absolute inset-0 bg-black opacity-75"></div>
    <div class="bg-white w-10/12 h-5/6 flex flex-col-reverse md:flex-row z-20">
      <div class="w-full md:w-1/2 overflow-y-scroll scroll">
        <img v-for="(image, index) in currentProject.images" :key="index" :src="image" alt="Project Image" class="w-full">
      </div>
      <div class="w-full md:w-1/2 relative overflow-auto scrollbar-thin">
        <button 
          @click="closeModal" 
          class="absolute top-0 right-0 p-5 text-black text-2xl transition-colors duration-200 hover:text-zinc-800 ">
            &#10005;
        </button>
        <div class="py-14 px-8">
          <h2 class="text-black text-4xl font-semibold">{{ currentProject.title }}</h2>
          <div class="text-black" v-html="currentProject.description"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
