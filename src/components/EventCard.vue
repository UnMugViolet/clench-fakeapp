<template>
    <div class="flex flex-col md:flex-row w-full md:w-[500px] border border-white rounded-md mt-6 p-4 gap-4 items-center">
        <div class="w-60 h-56 bg-cover bg-center rounded-md" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
        <div class="flex flex-col gap-1">
            <p class="font-semibold">{{ title }}</p>
            <p>{{ description }}</p>
            <div class="flex gap-2">
                <img src="@/assets/icones/calendar.svg" alt="">
                <p class="text-gray-500 text-base">Prévu le {{ date }}</p>
            </div>
            <div class="flex gap-4 mt-4">
                <router-link :to="urlEvent">
                    <Button 
                        @click="handleClick"
                        variant="outline">Découvrir</Button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(['toggleModal']);

const handleClick = () => {
    emit('toggleModal');
};

const props = defineProps([
    'title',
    'description',
    'imageUrl',
    'urlEvent',
    'date'
]);

</script>