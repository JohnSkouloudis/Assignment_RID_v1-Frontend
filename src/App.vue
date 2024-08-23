<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>
Assignment_RID_v1_Frontend
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 w-100 "  >
    <div class="container-fluid">
      <h2  class="navbar-brand" href="#">Assignment_RID_v1_Frontend:</h2>
      <div class="collapse navbar-collapse" id="navbarNav">
        <AppHeader />
      </div>
    </div>
  </nav>

  <div class="content">
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
  background-color: #a60505 !important;
  border-radius: 0 0 15px 15px;
}






</style>
