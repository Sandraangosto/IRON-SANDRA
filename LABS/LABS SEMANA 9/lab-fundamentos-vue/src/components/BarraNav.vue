<script setup>
//INTERACION 2 
import { ref, computed } from 'vue';

const message = ref("Hello World");

</script>

<template>
   <view>
    <text>{{ message }}</text>
  </view>
</template>

<style scoped>

</style>