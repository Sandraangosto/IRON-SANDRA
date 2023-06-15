<template>
  <div class="modal">
    <button @click="$emit('close')">Click to close</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
const isModalVisible = ref(true);
const showModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style>
.container {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
.modal {
  height: 400px;
  width: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
  background: lightgray;
}
</style>