<template>
  <div class="container">
    <div class="row">
    <div class="col-sm-4" style="max-height: 90vh; overflow: scroll">
            <div >
              <ul class="list-group py-4">
                <router-link 
                      v-for="(country, index) in countries"
                      :key="index"
                      :to="`/list/${country.alpha3Code}`"> 

                    <li class="list-group-item d-flex flex-column justify-content-center align-items-center"> 
                      <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                      <p>{{country.name.common}}</p>
                    </li>

                </router-link>      

              </ul>


 
             
            </div>
          </div>
          <div class="col-sm-8"><RouterView /></div>
        </div>
        </div>
</template>

<script setup> 

import { ref, onMounted, onUnmounted } from "vue";

// Variable para almacenar paises.
let countries = ref(null);


// funcion para obtener la información del país
let getPaises = async () => {

  // obtenemos datos de la api
  let response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  console.log(response);

  let response2 = await response.json();
  console.log(response2);

  let sortedCountries = response2.sort((countryA, countryB) =>
    countryA.name.common.localeCompare(countryB.name.common)
  );
  console.log(sortedCountries);
  countries.value = sortedCountries;
};
getPaises();

</script>

<style scoped>

</style>