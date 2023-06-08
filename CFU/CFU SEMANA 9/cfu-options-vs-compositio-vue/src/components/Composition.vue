<script setup>
import {ref} from 'vue'

const message = ref('Hello Composition World')
</script>

<template>
    <h1>Composition API:</h1>
    <h2> {{ message }} </h2>
  </template>