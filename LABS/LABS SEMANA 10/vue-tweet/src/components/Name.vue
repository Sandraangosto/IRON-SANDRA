
<template>
  <span class="name">{{name}}</span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>


<style scoped></style>
