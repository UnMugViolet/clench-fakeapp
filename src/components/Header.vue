
import router from '@/router';
<template>
  <header class="flex w-full justify-between px-12 py-6">
    <div>
      <router-link to="/">
        <img src="@/assets/icones/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
    </div>
    <nav class="flex gap-2">
      <router-link to="/a-propos" class="border-b border-transparent transition duration-300 border-white hover:border-white">A propos</router-link>
      <router-link to="/evenement" class="border-b border-transparent transition duration-300 border-white hover:border-white">Evenements</router-link>
      <router-link to="/contact" class="border-b border-transparent transition duration-300 border-white hover:border-white">Nous contacter</router-link>
    </nav>
    <div class="flex items-center gap-1">
      <p>Contact</p>
      <img src="@/assets/icones/user.svg" alt="User Icon" class="w-10 h-10" />
    </div>
  </header>
</template>
