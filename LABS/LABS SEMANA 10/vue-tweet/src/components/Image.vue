<script setup>

defineProps({
  image: {
    type: String,
    required: true,
  },
  alternativeText: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <img :src="image" class="profile" :alt="alternativeText" />
</template>

<style scoped></style>
