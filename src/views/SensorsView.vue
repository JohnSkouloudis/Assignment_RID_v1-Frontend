<script setup>
import { ref } from 'vue'

</script>

<template>
<table>
  <tr>
    <th>Id</th>
    <th>type</th>
    <th>vendorName</th>
    <th>vendorEmail</th>
    <th>description</th>
    <th>location</th>

  </tr>
  <tr v-for="sensor in sensors" :key="sensor.id">
    <td>{{ sensor.id }}</td>
    <td>{{ sensor.sensortype }}</td>
    <td>{{ sensor.vendorName }}</td>
    <td>{{ sensor.vendorEmail }}</td>
    <td>{{ sensor.description }}</td>
    <td>{{ sensor.location }}</td>
    <RouterLink to="/SensorMetrics/{{ sensor.id }}">Metrics</RouterLink>
    <RouterLink to="/Readings/{{ sensor.id }}">Readings</RouterLink>

  </tr>
</table>
</template>

<style scoped>

</style>