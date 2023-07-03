
<script setup>
  import {counterStore} from './store/counter.js';
  const main = counterStore();
</script>


<template>
  <h1>Welcome {{ name }}</h1>
  <h3>{{ counter }}</h3>
 
  <button @click="main.addOne">Add One</button>
  <button @click="main.doubleCount">Double</button>
  <button @click="main.minusOne">Minus One</button>
  <button @click="main.reset">Reset</button>
</template>

<style scoped>

</style>
