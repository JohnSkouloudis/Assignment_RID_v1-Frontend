<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>


 <header>

      <div class="btn-group">
        <RouterLink class="btn btn-danger" style="color:black" to="/"><b>Home</b></RouterLink>


        <RouterLink class="btn btn-danger" style="color: black" to="/sensors"><b>Sensors</b></RouterLink>


        <RouterLink class="btn btn-danger" style="color: black" to="/search"><b>Search</b></RouterLink>
      </div>

 </header>

</template>

<style scoped>



</style>