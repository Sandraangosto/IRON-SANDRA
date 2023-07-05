<template>
  <h1>IronContacts</h1>
  <button @click="addcontact">Add Random Contact</button>
  <button @click="addcontact">Sort By Popularity</button>
  <button @click="addcontact">Sort By Name</button>

  <center>
  <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>WonOscar</th>
        <th>WonEmmy</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(contact) in contacts" :key="contact.id">
        <td><img class="pic" :src="contact.pictureUrl" alt="Contact Picture" /></td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.popularity.toFixed(2) }}</td>
        <td>{{ contact.wonOscar ? '🏆' : '' }}</td>
        <td>{{ contact.wonEmmy ? '🏆' : '' }}</td>
        

      </tr>
    </tbody>
  </table>
</center>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import contactjson from './contacts.json';

let contacts = ref([]);

function fetchData () {
  contacts.value=contactjson.slice(0, 5);
  console.log(contactjson);
  console.log(contacts);

}

function addcontact(){
  while(true){
    let randomIndex = Math.floor(Math.random() * contactjson.length);
    console.log(randomIndex);
    let randomContact = contactjson[randomIndex];
    console.log(randomContact);

    let existingContact = contacts.value.find(contact => contact.id === randomContact.id);
    console.log(existingContact);
    if(existingContact==undefined){
      contacts.value.push(randomContact);
      console.log(contacts);
      break;
    }else{
      console.log("existe");
    }

    

  }
  


}




fetchData();

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pic{
  width:80px;
  height:auto;

}




</style>
