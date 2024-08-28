<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>


<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0  "  >
    <div class="container-fluid">
      <h2  class="navbar-brand" href="#">Assignment_RID_v1_Frontend:</h2>

      <div class="collapse navbar-collapse" id="navbarNav">
        <AppHeader class='nav-item'/>
      </div>
    </div>
  </nav>

  <div class="content align-items-center">
  <RouterView/>
  </div>
</template>

<style scoped>

.content {
  margin-top: 40px;
  padding-top: 60px;

}

nav {
  width: 100%;
  height: 10vh;
  border-style: solid double;
  border-inline: black;
  background-color: #a60505 !important;
  border-radius: 0 0 15px 15px;
  border-bottom-width: 5px;
  display: flex;
}

.navbar-brand {
  font-size: 3vh;
}



</style>
