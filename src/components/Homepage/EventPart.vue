<script setup>
  import { ref, computed } from "vue";
  import Carousel from "@/components/ui/carousel/Carousel.vue";
  import CarouselContent from "@/components/ui/carousel/CarouselContent.vue";
  import CarouselItem from "@/components/ui/carousel/CarouselItem.vue";
  import CarouselPrevious from "@/components/ui/carousel/CarouselPrevious.vue";
  import CarouselNext from "@/components/ui/carousel/CarouselNext.vue";
  import Button from "@/components/ui/button/Button.vue";
  import ProjectCard from "@/components/Homepage/ProjectsCard.vue";
  import Autoplay from 'embla-carousel-autoplay'


  import events from "@/data/events.json";

  const items = ref(events);

  const getItemById = (id) => {
    return items.value.find(item => item.id === id);
  };

  const sortedItems = computed(() => {
    return [...items.value].sort((a, b) => a.id - b.id);
  });
</script>

<template>
  <h2 class="text-3xl font-semibold mb-11">Prochains événements</h2>
  <div class="flex flex-col md:flex-row w-full gap-10 md:gap-20">
    <div class="w-full md:w-1/2">
      <Carousel
        :opts="{
          align: 'start',
          loop: true,
        }"
        :plugins="[Autoplay({
          delay: 5000,
        })]"
      >
        <CarouselContent>
          <CarouselItem v-for="(item, index) in sortedItems" :key="index">
            <ProjectCard 
              :title="item.title"
              :description="item.description"
              :date="item.date"
              :imageUrl="item.imageUrl"
              :urlEvent="item.urlEvent"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="hidden md:flex"/>
        <CarouselNext class="hidden md:flex"/>
      </Carousel>
    </div>
    <div class="w-full md:w-1/2 flex items-center">
      <div class="ml-3">
        <p class="xl:mr-40 text-base md:text-lg">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        <router-link to="/evenements">
          <Button variant="outline" class="mt-14">
            Voir les événements
          </Button>
        </router-link>
      </div>
    </div>
  </div>
</template>