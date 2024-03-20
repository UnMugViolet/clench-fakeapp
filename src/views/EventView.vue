<template>
  <div class="flex flex-col 2xl:items-center px-24">
    <Hero />
    <div class="flex flex-col gap-10">
      <EventContainerCard title-event="Les évènements à venir"/>
      <EventContainerCard title-event="Les évènements passés"/>
    </div>
  </div>
</template>
  
<script setup>
    import Hero from "@/components/Hero.vue";
    import EventContainerCard from "@/components/EventContainerCard.vue";
</script>

<style>

  .container_card {
    scrollbar-color: white transparent;
    scrollbar-width: thin;
  }

</style>