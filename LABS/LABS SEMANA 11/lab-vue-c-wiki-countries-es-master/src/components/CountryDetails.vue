<template>
    <div></div>
   <!--<div class="col-7">
            <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style="width: 300px"/>
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{country.name}}</td>
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
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>-->
          
</template>

<script>
import axios from 'axios';

    export default {
  data() {
    return {
      country: null // Mantenemos los detalles del país aquí
    };
  },
  mounted() {
    // Obtener el código alpha3Code del país desde la ruta
    const alpha3Code = this.$route.params.alpha3Code;

    // Llamar a una función o servicio para obtener los detalles del país según el código alpha3Code
    this.getCountryDetails(alpha3Code);
  },
  methods: {
    getCountryDetails(alpha3Code) {
      // Llamar a una API o realizar cualquier otra lógica para obtener los detalles del país
      // Puedes usar bibliotecas como Axios para realizar llamadas HTTP

      // Ejemplo: Obtener los detalles del país desde una API (pseudocódigo)

      axios.get(` https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
          this.country = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>