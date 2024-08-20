<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
<nav>
  <h2 class="position-absolute top-0 start-0">Assignment_RID_v1_Frontend</h2>
  <AppHeader />

  </nav>
  <RouterView />
</template>

<style scoped>

.flex-container {
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  padding: 10px;
}




</style>
