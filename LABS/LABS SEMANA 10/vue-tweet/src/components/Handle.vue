<script setup>

defineProps({
  handle: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <span class="handle">{{ handle }}</span>
</template>

<style scoped></style>
