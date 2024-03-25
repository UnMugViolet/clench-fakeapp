<script setup>
    const props = defineProps([
        'emoji',
        'title',
        'subtitle',
        'description',
        'ctaText',
    ]); 
</script>

<template>
    <div class="flex flex-col items-center gap-6 pt-12 pb-10 md:pb-24 text-center">
        <div class="inline-flex gap-0.5 md:gap-2">
            <p class="text-sm md:text-xl">{{ emoji }} {{ subtitle }}</p>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold">{{title}}</h1>
        <p class="text-base md:text-2xl md:font-medium w-11/12 md:w-7/12">{{description}}</p>
    </div>
</template>

