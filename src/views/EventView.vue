<script setup>
    import HeroText from "@/components/HeroText.vue";
    import EventContainerCard from "@/components/EventContainerCard.vue";

</script>

<template>
  <div class="flex flex-col 2xl:items-center px-4 md:px-24">
    <HeroText 
      emoji="🍾"
      subtitle="L’application qui facilite votre vie éstudiantine"
      title="Vivez au rythme de votre Campus"
      description="Explorez la vie de votre campus d'une manière totalement nouvelle grâce à une expérience unique et immersive."
    />
    <div class="flex flex-col gap-10">
      <EventContainerCard 
        :isUpcoming="true"
        title-event="Les évènements à venir"/>
      <EventContainerCard  
        :isUpcoming="false"
        title-event="Les évènements passés"/>
    </div>
  </div>
</template>
  

<style>

  .container_card {
    scrollbar-color: white transparent;
    scrollbar-width: thin;
  }

</style>