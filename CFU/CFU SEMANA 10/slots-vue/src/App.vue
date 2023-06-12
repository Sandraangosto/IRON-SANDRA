<script setup>
import Card from "./Card.vue";
let title = "Here is a title";
</script>

<style>
:root {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>

<template>
  <Card>
    <template #header>
      <h1>{{ title }}</h1>
    </template>
    <template #default>
      <p>Here is some content</p>
    </template>
  </Card>
</template>