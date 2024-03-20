<template>
    <div class="flex border border-white rounded-md mt-6 p-4 gap-4 items-center min-w-[500px]">
        <img class="w-36" src="@/assets/images/jdln-affiche.jpg" alt="">
        <div class="flex flex-col gap-1">
            <p class="font-semibold">@beuverie</p>
            <p>The React Framework - created and maintained by @vercel</p>
            <div class="flex gap-2">
                <img src="@/assets/icones/calendar.svg" alt="">
                <p class="text-gray-500 text-base">Joined Mars 2024</p>
            </div>
            <div class="flex gap-4 mt-4">
                <ThinMainButton text-button="Découvrir"/>
                <ThinMainButton text-button="Résevation"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ThinMainButton from './ThinMainButton.vue';

</script>