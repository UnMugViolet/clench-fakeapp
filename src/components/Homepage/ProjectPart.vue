<script setup>
  import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <h2 class="text-3xl font-semibold">Découvrez nos projets</h2>
  <div class="flex flex-col items-center md:flex-row w-full gap-10 md:gap-20">
    <div class="w-full md:w-1/2 flex items-center">
      <div class="mt-10">
        <p class="text-base md:text-lg">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        <router-link to="/projets">
          <Button variant="outline" class="mt-6">
            Voir les projets
          </Button>
      </router-link>
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <img src="/ressources/images/projets.png" alt="project" class="w-full"/>
    </div>
  </div>
</template>