<script setup>
const sayHello = (event) => {
  if (event) {
    alert(event.target.innerHTML);
  }
};
</script>

<template>
  <button @click="sayHello">Greet</button>
</template>