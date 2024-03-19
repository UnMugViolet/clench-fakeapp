
import router from '@/router';
<template>
  <header class="absolute flex w-full justify-between p-12">
    <div>
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
    </div>
    <nav class="flex gap-2">
      <router-link to="/a-propos">A propos</router-link>
      <router-link to="/contact">Nous contacter</router-link>
    </nav>
    <div class="flex items-center gap-1">
      <p>Contact</p>
      <img src="@/assets/user.svg" alt="User Icon" class="w-10 h-10" />
    </div>
  </header>
</template>
