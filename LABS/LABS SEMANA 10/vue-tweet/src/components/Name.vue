<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="name">{{name}}</span>
</template>

<style scoped></style>
