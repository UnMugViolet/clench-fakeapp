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
    <div class="flex flex-col items-center gap-6 pt-12 pb-24 text-center">
        <div class="inline-flex gap-2">
            <p class="text-xl">{{ emoji }}</p>
            <p>{{ subtitle }}</p>
        </div>
        <h1 class="text-5xl font-bold">{{title}}</h1>
        <p class="text-2xl font-medium w-7/12">{{description}}</p>
    </div>
</template>

