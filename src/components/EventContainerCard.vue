<template>
  <div>
    <h2 class="text-4xl font-semibold">{{ props.titleEvent }}</h2>
    <div class="flex flex-col md:flex-row gap-6 overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white" style="width: 80vw;">
      <div v-for="(item, index) in sortedItems" :key="index">
          <EventCard 
            :title="item.title"
            :description="item.subtitle"
            :date="item.date"
            :imageUrl="item.thumbnail"
            :urlEvent="item.urlEvent"
            @toggleModal="handleToggleModal(item)"
          />
      </div>
    </div>
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-10">
        <div @click="closeModal" class="absolute inset-0 bg-black opacity-75"></div>
        <div class="bg-white w-10/12 h-5/6 flex flex-col-reverse md:flex-row z-20 rounded-md">
          <div class="w-full h-1/2 md:h-full md:w-1/2 overflow-y-scroll scrollbar-none">
            <img v-for="(image, index) in currentProject.images" :key="index" :src="image" alt="Project Image" class="w-full">
          </div>
          <div class="w-full h-1/2 md:h-full md:w-1/2 relative overflow-auto scrollbar-thin">
            <button 
              @click="closeModal" 
              class="absolute top-0 right-0 p-5 text-black text-2xl transition-colors duration-200 hover:text-zinc-800 ">
                &#10005;
            </button>
            <div class="py-14 px-8">
              <h2 class="text-black text-2xl md:text-4xl font-semibold">{{ currentProject.title }}</h2>
              <div class="text-black" v-html="currentProject.description"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
</style>

<script setup>
  import { defineProps, ref, computed } from "vue";
  import EventCard from "@/components/EventCard.vue";
  import events from "@/data/events.json";

  const props = defineProps(['titleEvent', 'isUpcoming']);
  const items = ref(events);
  const currentDate = new Date();
  const showModal = ref(false);
  const currentProject = ref({});

  const getItemById = (id) => {
    return items.value.find(item => item.id === id);
  };

  const sortedItems = computed(() => {
    const filteredItems = items.value.filter(item => {
      const eventDate = new Date(item.formatedDate);
      return props.isUpcoming ? eventDate >= currentDate : eventDate < currentDate;
    });
    return filteredItems.sort((a, b) => a.id - b.id);
  });

  const handleToggleModal = (item) => {
    currentProject.value = item;
    showModal.value = true;
  };

  const closeModal = () => {
    showModal.value = false;
  };
</script>