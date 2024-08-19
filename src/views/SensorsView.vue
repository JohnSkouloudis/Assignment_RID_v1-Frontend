<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'

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
    <RouterLink to="/sensors/new">Create Sensor</RouterLink>
    <tr>
      <th>Id</th>
      <th>type</th>
      <th>vendorName</th>
      <th>vendorEmail</th>
      <th>description</th>
      <th>location</th>

    </tr>
    <tr v-for="sensor in sensors" :key="sensor.sensorId">
      <td>{{ sensor.sensorId }}</td>
      <td>{{ sensor.sensorType }}</td>
      <td>{{ sensor.vendorName }}</td>
      <td>{{ sensor.vendorEmail }}</td>
      <td>{{ sensor.description }}</td>
      <td>{{ sensor.location }}</td>
      <RouterLink :to="{name:'metrics',params:{id:sensor.sensorId}}">Metrics</RouterLink>
      <RouterLink :to="{name:'readings', params:{id:sensor.sensorId} }">Readings</RouterLink>

    </tr>
    <button @click="page--" :disabled="page === 0">Previous</button>
    <span>Page {{ page + 1 }} of {{ totalPages }}</span>
    <button @click="page++" :disabled="page >= totalPages - 1">Next</button>
  </table>
</template>

<style scoped>

</style>