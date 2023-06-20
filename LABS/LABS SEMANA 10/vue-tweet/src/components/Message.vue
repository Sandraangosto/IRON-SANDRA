

<template>
    <p class="message"> {{message}} </p>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>