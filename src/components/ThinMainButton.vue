<template>
    <button class="border border-white rounded-md py-2 px-8 mt-4">{{props.textButton}}</button>
</template>

<script setup>
const props = defineProps(['textButton']);
</script>