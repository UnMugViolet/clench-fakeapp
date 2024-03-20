<script setup>
import HeroText from "@/components/HeroText.vue";
import ProjectPart from "@/components/Homepage/ProjectPart.vue";
import EventPart from "@/components/Homepage/EventPart.vue";
</script>

<template>
  <section class="flex flex-col 2xl:items-center py-20">
    <HeroText 
      emoji="🍾"
      subtitle="L’application qui facilite votre vie éstudiantine"
      title="Vivez au rythme de votre Campus"
      description="Explorez la vie de votre campus d'une manière totalement nouvelle grâce à une expérience unique et immersive."
    />
  </section>
  <section class="py-20">
    <ProjectPart />
  </section>
  <section class="py-20">
    <EventPart />
  </section>
</template>
