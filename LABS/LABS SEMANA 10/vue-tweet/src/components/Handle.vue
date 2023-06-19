

<template>
  <span class="handle">{{ handle }}</span>
</template>


<script setup>

defineProps({
  handle: {
    type: String,
    required: true,
  },
});

</script>


<style scoped></style>
