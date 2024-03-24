<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/components/ui/button/Button.vue';

const showNav = ref(false);

onMounted(() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    showNav.value = true;
  }
});
</script>

<template>
  <header class="flex flex-col md:flex-row items-center w-full justify-between py-14 px-4 md:px-16 md:py-8">
    <div class="flex flex-row justify-between md:justify-start gap-4 w-full ">
      <router-link to="/">
        <img src="@/assets/icones/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
      <button @click="showNav = !showNav" class="md:hidden">
        <img src="@/assets/icones/burger-menu.svg" alt="Menu Icon" class="w-10 h-10" />
      </button>
      <transition name="slide">
        <nav v-if="showNav" class="fixed inset-0 transform md:translate-x-0 md:static flex flex-col md:flex-row gap-2 py-3 md:gap-1 md:py-0">
            <Button variant="link">
                <router-link to="/projets">Projets</router-link>
            </Button>
            <Button variant="link">
                <router-link to="/evenements">Evenements</router-link>
            </Button>
            <Button variant="link">
                <router-link to="/rejoindre">Nous rejoindre</router-link>
            </Button>
            <router-link to="/login" class="flex items-center gap-2 text-white md:hidden">
              <p>Compte</p>
              <img src="@/assets/icones/user.svg" alt="User Icon" class="w-10 h-10" />
            </router-link>
        </nav>
      </transition>
    </div>

    <router-link to="/login" class="hidden md:flex items-center gap-2 text-white">
      <p>Compte</p>
      <img src="@/assets/icones/user.svg" alt="User Icon" class="w-10 h-10" />
    </router-link>
  </header>
</template>

<style scoped>
  .slide-enter-active {
    transition: transform .3s;
  }
  .slide-leave-active {
    transition: transform .3s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
</style>