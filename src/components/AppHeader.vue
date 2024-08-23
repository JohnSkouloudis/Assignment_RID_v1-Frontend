<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>


 <header>

      <div class="nav-item btn-group">
        <RouterLink class="btn btn-danger btn-lg" style="color:black" to="/"><b>Home</b></RouterLink>


        <RouterLink class="btn btn-danger btn-lg" style="color: black" to="/sensors"><b>Sensors</b></RouterLink>


        <RouterLink class="btn btn-danger btn-lg" style="color: black" to="/search"><b>Search</b></RouterLink>
      </div>

 </header>

</template>

<style scoped>

.nav-item  {
  font-size: 2.5vh;
  padding: 0.5vh 1vh;
}

</style>