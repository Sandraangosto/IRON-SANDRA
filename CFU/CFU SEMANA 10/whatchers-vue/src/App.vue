<template>
  <div>
    <form>
      <input type="text" v-model.lazy="inputValue" placeholder="Escribe algo.." />
      <button @click="inputValue = ''">Reset</button>
    </form>
  </div>
</template>
 
<script setup>
import { ref, watch } from "vue";
 
const inputValue = ref("");
watch(inputValue, (newValue) => {
  console.log(`New value: ${newValue}`);
  alert(`New value: ${newValue}`);
  return { inputValue };
});
</script>