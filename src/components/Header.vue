<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/components/ui/button/Button.vue';

const showNav = ref(false);

const toggleNav = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    showNav.value = !showNav.value;
  }
};

onMounted(() => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    showNav.value = true;
  }
});
</script>

<template>
  <header class="flex flex-col md:flex-row items-center w-full h-full md:h-10justify-between md:py-14 px-4 md:px-16 py-8">
    <div class="flex flex-row justify-between md:justify-start gap-4 w-full ">
      <router-link to="/">
        <img src="@/assets/icones/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
      <button @click="toggleNav" class="md:hidden">
        <img src="@/assets/icones/burger-menu.svg" alt="Menu Icon" class="w-8 h-8" />
      </button>
      <transition name="slide" mode="out-in">
        <nav v-if="showNav" class="fixed bg-black inset-0 transform md:translate-x-0 md:static flex flex-col md:flex-row gap-4 py-3 md:gap-1 md:py-0 md:bg-transparent md:w-full justify-center md:justify-start z-50">            
            <div class="absolute md:hidden top-0 right-0 p-6">
              <img src="@/assets/icones/cross.svg" alt="Close Icon" class="w-5 h-5" @click="showNav = false" />
            </div>
            <Button @click="toggleNav" variant="link">
                <router-link to="/projets">Projets</router-link>
            </Button>
            <Button @click="toggleNav" variant="link">
                <router-link to="/evenements">Evenements</router-link>
            </Button>
            <Button @click="toggleNav" variant="link">
                <router-link to="/rejoindre">Nous rejoindre</router-link>
            </Button>
            <router-link to="/login" @click="toggleNav"  class="flex items-center justify-center md:justify-end gap-2 text-white md:hidden">
              <p>Compte</p>
              <img src="@/assets/icones/user.svg" alt="User Icon" class="w-8 h-8 xl:w-10 xl:h-10" />
            </router-link>
        </nav>
      </transition>
    </div>

    <router-link to="/login" class="hidden md:flex items-center gap-2 text-white">
      <p>Compte</p>
      <img src="@/assets/icones/user.svg" alt="User Icon" class="w-8 h-8 xl:w-10 xl:h-10" />
    </router-link>
  </header>
</template>

<style scoped>
  @media (max-width: 768px) {
    .slide-enter-from, .slide-leave-to {
      transform: translateX(100%);
    }
    .slide-enter-to, .slide-leave-from {
      transform: translateX(0);
    }
    .slide-enter-active, .slide-leave-active {
      transition: transform .3s;
    }
  }
</style>