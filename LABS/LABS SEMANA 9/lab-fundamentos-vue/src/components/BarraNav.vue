<script setup>
//INTERACION 2 
import { ref, reactive } from 'vue';

const message = ref("Hello World");

const numero1 = 5;
const numero2 = 10;
const resultado = numero1 + numero2;

//console.log(resultado);
// STRINGS
const nombre = ref('Sandra Angosto');
const edad = ref(28);

const obtenerCadena = () => {
  return `Hola, mi nombre es ${nombre.value} y tengo ${edad.value} años.`;
  };


//INTERACCION 3
const elementoTrue = ref(false);


// INTERACCION 4

const libros = ref([
  {
    id: 1,
    titulo: 'Harry Potter Y La Piedra Filosofal',
    descripcion: 'Primer libro de la saga Harry Potter',
    contenido: 'Libro 1'
  },
  {
    id: 2,
    titulo: 'Harry Potter Y La Camara De Los Secretos',
    descripcion: 'Segundo libro de la saga Harry Potter',
    contenido: 'Libro 2'
  },
  {
    id: 3,
    titulo: 'Harry Potter Y El Prisionero de Azkaban',
    descripcion: 'Tercer libro de la saga Harry Potter',
    contenido: 'Libro 3'
  }
]);

</script>

<template>
 
   <view>
    <h1>INTERACCION 2 </h1>
    <text>{{ message }}</text>
    <div>
    <p>El resultado de la suma es: {{ resultado }}</p>
    </div>

    <div>
    <p>{{ obtenerCadena ()}}</p>
    </div>

    <h1>INTERACCION 3</h1>
    <div>
    <p v-if="elementoTrue">Hola el elemento es True</p>
    <p v-else>Hola, el elemento es Falso</p>
    </div>

    <h1>INTERACCION 4</h1>
    <h3>Lista de Libros de Harry Potter</h3>
    <ul>
      <li v-for="libros in libros" :key="libros.id">
        <h3>{{ libros.titulo }}</h3>
        <p>{{ libros.descripcion }}</p>
        <p>{{ libros.contenido }}</p>
      </li>
    </ul>
  </view>

 
</template>

<style scoped>

</style>