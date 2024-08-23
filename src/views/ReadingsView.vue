<script setup>
import {ref, onMounted,watch} from 'vue'
import axios from 'axios'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const readings = ref([])
const sensorId = route.params.id
const page = ref(0)
const totalPages = ref(0)

watch(page, () => {
  getReadings()
})

async function getReadings(){
  const response = await axios.get(import.meta.env.VITE_BACKEND_URL+'/api/readings/'+ sensorId+'?page='+page.value)
  readings.value = response.data.content
  totalPages.value = response.data.totalPages
}

onMounted(() => {
  getReadings()
})

</script>

<template>
  <RouterLink class="btn btn-outline-primary" :to="{name:'reading-new', params:{ sensorid:sensorId } }"> Create Reading for Sensor with id={{sensorId}}</RouterLink>
  <table class="table table-striped" >
    <thead>
     <tr>
      <th><b>Id</b></th>
      <th><b>readingType</b></th>
      <th><b>readingValue</b></th>
      <th><b>readingDate</b></th>
      <th><b>description</b></th>
      <th><b>time</b></th>
     </tr>
     </thead>
    <tbody>
    <tr v-for="reading in readings" :key="reading.id">
      <td>{{ reading.id }}</td>
      <td>{{ reading.readingType }}</td>
      <td>{{ reading.readingValue }}</td>
      <td>{{ reading.readingDate }}</td>
      <td>{{ reading.description }}</td>
      <td>{{ reading.time }}</td>
    </tr>
    </tbody>
  </table>
  <div id="page-create-input" class="d-flex justify-content-center" >
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
    </ul>
  </div>
</template>

<style scoped>

.page-link:disabled{
  background-color: rgb(140, 141, 145);
  border-color: rgba(12, 3, 3, 0.99);
  color: rgba(12, 3, 3, 0.99);
}

#page-create-input {
  margin-top: -1px;
}

.table {
  margin-bottom: 0;
}

</style>