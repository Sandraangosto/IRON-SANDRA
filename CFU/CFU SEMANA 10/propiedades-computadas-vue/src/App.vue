

<template>
  <h1>My name is: {{ fullName }}</h1>
</template>

<script setup>
  import {(computed, ref)} from 'vue';
  const firstName = ref('Sandra');
  const lastName = ref('Angosto'); 
  const fullName = computed(() => firstName.value + ' ' + lastName.value);
</script>