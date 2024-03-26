<template>
  <div>
    <h2 class="text-4xl font-semibold">{{ props.titleEvent }}</h2>
    <div class="">
      <div 
        v-for="(item, index) in sortedItems" :key="index"
        class="container_card flex gap-10 overflow-x-scroll">
        <EventCard 
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :imageUrl="item.imageUrl"
          :urlEvent="item.urlEvent"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from "@/components/EventCard.vue";

import events from "@/data/events.json";

const items = ref(events);

const getItemById = (id) => {
  return items.value.find(item => item.id === id);
};

const sortedItems = computed(() => {
  return [...items.value].sort((a, b) => a.id - b.id);
});
</script>
