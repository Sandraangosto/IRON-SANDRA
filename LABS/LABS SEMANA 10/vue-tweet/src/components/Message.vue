

<template>
    <p class="message">
        {{message}}
      </p>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>