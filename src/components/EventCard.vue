<template>
    <div class="flex border border-white rounded-md mt-6 p-4 gap-4 items-center min-w-[500px]">
        <img class="w-36" :src="urlImage" alt="">
        <div class="flex flex-col gap-1">
            <p class="font-semibold">{{title}}</p>
            <p>{{ description }}</p>
            <div class="flex gap-2">
                <img src="@/assets/icones/calendar.svg" alt="">
                <p class="text-gray-500 text-base">Joined {{date}}</p>
            </div>
            <div class="flex gap-4 mt-4">
                <Button variant="outline">Découvrir</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";

const props = defineProps([
        'urlImage',
        'title',
        'description',
        'date',
    ]); 
</script>