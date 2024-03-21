
import router from '@/router';
<template>
  <header class="absolute flex w-full justify-between p-12">
    <div>
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Vue logo" class="logo" width="125" height="125" />
      </router-link>
    </div>
    <nav class="flex gap-6">
      <router-link to="/a-propos" class="border-b border-transparent transition duration-300 border-white hover:border-white">A propos</router-link>
      <router-link to="/evenement" class="border-b border-transparent transition duration-300 border-white hover:border-white">Evenements</router-link>
      <router-link to="/contact" class="border-b border-transparent transition duration-300 border-white hover:border-white">Nous contacter</router-link>
      <Button variant="outline">Button</Button>
    </nav>
    <div class="flex items-center gap-1">
      <p>Contact</p>
      <img src="@/assets/user.svg" alt="User Icon" class="w-10 h-10" />
    </div>
  </header>
</template>

<script>
import { Button } from "@/components/ui/button"


</script>