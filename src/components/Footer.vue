import router from '@/router';
<template>
    <footer class="flex flex-col w-full px-12 pb-4 pt-12 gap-8">
        <div class="">
            <router-link to="/">
                <img src="@/assets/icones/logo.svg" alt="Vue logo" class="logo" width="200" height="200" />
            </router-link>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex flex-col gap-4 w-1/2">
                <h3 class="text-3xl font-semibold">Donnez votre argent à Julick</h3>
                <p class="text-gray-500 text-base">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression.
                </p>
                <div>
                    <router-link to="/contact"
                    class="border-b border-transparent transition duration-300 border-white hover:border-white">Nous
                    contacter</router-link>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h4 class="text-2xl font-semibold">Inscrivez vous à notre Newsletter !</h4>
                <div class="flex items-center gap-4">
                    <input type="email" v-model="email" placeholder="Entrez votre adresse e-mail"
                        class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    <ThinMainButton text-button="S'inscrire" />
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <p class="text-gray-500 text-base">© Clench - 2024</p>
        </div>
    </footer>
</template>

<script setup>
import ThinMainButton from './ThinMainButton.vue';

//const email = ref('');
</script>