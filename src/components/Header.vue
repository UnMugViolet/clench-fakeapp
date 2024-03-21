<script setup>
import router from '@/router';
import Button from '@/components/ui/button/Button.vue';
</script>


<template>
  <header class="flex w-full justify-between px-16 py-8">
    <div class="inline-flex gap-4">
      <router-link to="/">
        <img src="@/assets/icones/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
      <nav class="flex gap-1">
            <Button variant="link">
                <router-link to="/projets">Projets</router-link>
            </Button>
            <Button variant="link">
                <router-link to="/evenement">Evenements</router-link>
            </Button>
            <Button variant="link">
                <router-link to="/contact">Nous rejoindre</router-link>
            </Button>
        </nav>
    </div>

    <div class="flex items-center gap-2">
      <p>Contact</p>
      <img src="@/assets/icones/user.svg" alt="User Icon" class="w-10 h-10" />
    </div>
  </header>
</template>
