<template>
    <!-- Text example -->
    <h2>Put some text in here:</h2>
    <input v-model="text"> {{ text }}
   
    <!-- Checkbox example -->
    <h2>Check the box:</h2>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checked" />
    <label for="checkbox">Checked: {{ checked }}</label>
   
    <!-- Multiple Checkbox example -->
    <h2>Select any or none of the following animals</h2>
    <input type="checkbox" id="orangutang" value="Orangutang" v-model="checkedAnimals" />
    <label for="mammoth">Orangutang</label>
    <input type="checkbox" id="Mammoth" value="Mammoth" v-model="checkedAnimals" />
    <label for="mammoth">Mammoth</label>
    <input type="checkbox" id="Dog" value="Dog" v-model="checkedAnimals" />
    <label for="mike">Dog</label>
    <p>Checked animals: <pre>{{ checkedAnimals }}</pre></p>
  </template>

<script setup>
import { ref } from "vue";
const text = ref("Change Me!");
const checked = ref(false);
const checkedAnimals = ref(["Orangutang"]);
</script>