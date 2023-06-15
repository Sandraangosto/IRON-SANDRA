<template>
  <div class="container">
    <button @click="showModal">Show Modal</button>
    <Modal v-show="isModalVisible" @close="closeModal" />
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