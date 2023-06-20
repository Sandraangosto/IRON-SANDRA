<script setup>

defineProps({
  image: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <img :src="image" class="profile" :alt="ImgProfile" />
</template>

<style scoped></style>
