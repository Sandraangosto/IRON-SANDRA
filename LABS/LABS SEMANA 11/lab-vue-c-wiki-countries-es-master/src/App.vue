<template>
  <div class="app">
    <Barra />
    <CountriesList />
  
    <router-view></router-view>
    </div>
</template>

<script setup>
  import Barra from './components/Barra.vue';
  import CountriesList from './components/CountriesList.vue';
</script>

<style>

</style>