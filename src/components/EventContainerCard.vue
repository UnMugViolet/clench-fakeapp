<template>
  <div>
    <h2 class="text-4xl font-semibold">{{ props.titleEvent }}</h2>
    <div class="">
      <div class="container_card flex gap-10 overflow-x-scroll">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from "@/components/EventCard.vue";

const props = defineProps(['titleEvent']);
</script>