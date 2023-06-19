<template>
    <div class="user">
      <div class="name">{{ userData.name + '' + userData.handle }}</div>
    </div>
  </template>

  <script setup>

    defineProps({
      userData: {
        type: Object,
        required: true
      },
      handle: {
        type: String,
        required: true
  },
  });
  </script>