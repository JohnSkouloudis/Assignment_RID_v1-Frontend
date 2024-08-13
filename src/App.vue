<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="flex-container">
  <h1 >Assignment_RID_v1_Frontend</h1>
    <AppHeader />
  </div>

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
