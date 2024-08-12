<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>


 <header>
   <ul>
     <li>
        <RouterLink to="/">Home</RouterLink>
     </li>
     <li>
        <RouterLink to="/sensors">Sensors</RouterLink>
     </li>
     <li>
        <RouterLink to="/search">Search</RouterLink>
     </li>
   </ul>
 </header>

</template>

<style scoped>

</style>