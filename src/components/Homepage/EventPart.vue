<script setup>
  import Carousel from "@/components/ui/carousel/Carousel.vue";
  import CarouselContent from "@/components/ui/carousel/CarouselContent.vue";
  import CarouselItem from "@/components/ui/carousel/CarouselItem.vue";
  import CarouselPrevious from "@/components/ui/carousel/CarouselPrevious.vue";
  import CarouselNext from "@/components/ui/carousel/CarouselNext.vue";
</script>

<template>
  <h2 class="text-3xl font-semibold">Découvrez nos projets</h2>
  <div class="flex w-full gap-20">
    <div class="w-1/2">
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div class="w-1/2 flex items-center">
      <div class="ml-3">
        <p class="mr-40">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        <Button variant="default" class="mt-14">Voir les événements</Button>
      </div>
    </div>
  </div>
</template>