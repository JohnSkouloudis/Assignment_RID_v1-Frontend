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
  const response = await axios.get(import.meta.env.VITE_BACKEND_URL+'/api/sensors/all?page='+page.value)

  sensors.value = response.data.content
  totalPages.value = response.data.totalPages
}

onMounted(() => {
  getSensors()
})

</script>

<template>

  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col"><b>Id</b></th>
      <th scope="col"><b>type</b></th>
      <th scope="col"><b>vendorName</b></th>
      <th scope="col"><b>vendorEmai</b>l</th>
      <th scope="col"><b>description</b></th>
      <th scope="col"><b>location</b></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="sensor in sensors" :key="sensor.sensorId">
      <th scope="row">{{ sensor.sensorId }}</th>
      <td>{{ sensor.sensorType }}</td>
      <td>{{ sensor.vendorName }}</td>
      <td>{{ sensor.vendorEmail }}</td>
      <td>{{ sensor.description }}</td>
      <td>{{ sensor.location }}</td>
      <td><RouterLink class="btn btn-dark" :to="{name:'metrics',params:{id:sensor.sensorId}}">Metrics</RouterLink></td>
      <td><RouterLink class="btn btn-secondary" :to="{name:'readings', params:{id:sensor.sensorId} }">Readings</RouterLink></td>
    </tr>
    </tbody>
  </table>
  <div id="page-create-input" class="d-flex justify-content-center">
  <ul class="pagination">
    <li class="page-item">
      <button class="page-link"  @click="page--" :disabled="page === 0">Previous</button>
    </li>
    <li class="page-item">
      <span  class="page-link" style="width: 130px">Page {{ page + 1 }} of {{ totalPages }}</span>
    </li>
    <li class="page-item">
      <button class="page-link"  @click="page++" :disabled="page >= totalPages - 1">Next</button>
    </li>
    <li class="page-item">
      <RouterLink class="btn btn-outline-primary" to="/sensors/new">Create Sensor</RouterLink>
    </li>
  </ul>
  </div>
</template>

<style scoped>



.table {
  margin-bottom: 0;
}


</style>