<template>
<div>
  <div>
            <img :src="`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 300px"/>
            <h1>{{country.name.common}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{country.capital[0]}}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{country.area}}<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul class="d-flex justify-content-between align-items-center">
                      <router-link
                      v-for="(border, index) in country.borders"
                      :key="index"
                      :to="`/list/${border}`"> {{ border }} </router-link>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>
 
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

// Variable para almacenar info del país.
let country = ref(null);

let route = useRoute();

// funcion para obtener la información del país
let getAlpha3 = async () => {
  let codeAlpha3 = route.params.alpha3Code;

  // obtenemos datos de la api
  let response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${codeAlpha3}`
  );
  console.log(response);

  let response2 = await response.json();
  console.log(response2);

  country.value = response2;
  console.log(country);
  return { country };
};
getAlpha3();

onMounted(() => getAlpha3());

let countrycode = computed(() => route.params.alpha3Code);

// watchers,
// es comom un vigilante, ssta pendiente de algun cambio o monitorea tu compoonente. watcher sigue siendo un metodo nativo de vue.
// 1 regla -siendo uin metodo recibe dentro de los() un func anonima.
// 2 regla - antes de la func anonima, tu tienes que especificarle al metodo watch() que monitorear en teoria
watch(countrycode, () => {
  getAlpha3();
});
</script>

<style lang="scss" scoped>

</style>