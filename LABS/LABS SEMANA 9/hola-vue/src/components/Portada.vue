<template>
  
        <div class="nav">
            <img class="logo" src="../images/Ironhack_logo.png" alt="logo">
             <img class="burger" src="../images/Burger_menu.png" alt="menu">
        </div>
    

    <div class="vue">
        <img class="logoVue" src="../images/Vue_logo.png">
    </div>
    <div class="vuetxt">
       <h1 class="titulo">Welcome to Vue.js</h1>
        <p class="subititulo">
            Become a coding ninja with the fastest-growing JavaScript framework
        </p>
    </div>
        <div class="button">
            <img class="awesome" src="../images/Buttton shape.png" alt="">
            <p class="awesomeText">Awesome!</p>
        </div>

 
</template>

<script setup>
</script>

<style scoped>
    *{
        font-family: Arial, Helvetica, sans-serif;
    }

    .logo{
        position: absolute;
        width: 40px;
        height: 50px;
        left: 60px;
        top: 40px;
    }
    .burger{
        position: absolute;
        width: 30px;
        height: 30px;
        right: 60px;
        top: 40px;
    }
    .vue{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
    .logoVue{
        width: 300px;
        height: 300px;
    }

    .vuetxt{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .titulo{
        font-size: 40px;
        font-weight: 800;
    }
    .subtitulo{
        font-size: 25px;
        font-weight: 800;
    }
    .button{
        margin-top:10px;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .awesome{
        font-size: 20px;
        position: absolute;
        
    }
    .awesomeText{
        position: absolute;
        color: white;
        font-weight: 800;
    }
    








</style>