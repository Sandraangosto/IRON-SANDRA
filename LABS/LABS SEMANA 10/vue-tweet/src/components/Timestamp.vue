

<template>
    <span class="timestamp">{{timestamp}}</span>
</template>

<script setup>
defineProps({
  timestamp: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>