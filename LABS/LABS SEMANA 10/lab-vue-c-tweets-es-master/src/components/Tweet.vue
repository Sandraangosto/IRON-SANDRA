<template>
  <div class="tweet">
    <Imagen
      v-bind:imagenSrcNieto="imagenSrcPadre"
      v-bind:imagenAltNieto="imagenAltPadre"
    />
    <div class="body">
      <div class="top">
        <Usuario
          v-bind:usuarioNombrePropNieto="usuarioNombrePadre"
          v-bind:usuarioHandlePropNieto="usuarioHandlePadre"
        />
        <Timestamp v-bind:timestampPropNieto="timestampPadre" />
      </div>

      <Mensaje v-bind:mensajePropNieto="mensajePropPadre" />

      <!-- Incorporar iconos como un componente -->
      <Iconos />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script setup>
import Iconos from "./TweetComponents/Iconos.vue";
import Imagen from "./TweetComponents/Imagen.vue";
import Mensaje from "./TweetComponents/Mensaje.vue";
import TimeStamp from "./TweetComponents/TimeStamp.vue";
import Usuario from "./TweetComponents/Usuario.vue";

defineProps({
  mensajePropPadre: {
    type: String,
  },
  timestampPadre: {
    type: String,
  },
  usuarioNombrePadre: {
    type: String,
  },
  usuarioHandlePadre: {
    type: String,
  },
  imagenSrcPadre: {
    type: String,
  },
  imagenAltPadre: {
    type: String,
  },
});
</script>