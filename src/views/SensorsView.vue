<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const page = ref(0)
const sensors = ref([])
const totalPages = ref(0)

watch(page, () => {
  getSensors()
})

async function getSensors(){
  const response = await axios.get('http://localhost:9090/api/sensors/all?page='+page.value)

  sensors.value = response.data.content
  totalPages.value = response.data.totalPages
}

onMounted(() => {
  getSensors()
})

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