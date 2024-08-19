<script setup>
import {ref, onMounted,watch} from 'vue'
import axios from 'axios'
import {  useRoute } from 'vue-router'

const route = useRoute()
const readings = ref([])
const sensorId = route.params.id
const page = ref(0)
const totalPages = ref(0)

watch(page, () => {
  getReadings()
})

async function getReadings(){
  const response = await axios.get('http://localhost:9090/api/readings/'+ sensorId+'?page='+page.value)
  readings.value = response.data.content
  totalPages.value = response.data.totalPages
}

onMounted(() => {
  getReadings()
})

</script>

<template>
  <table>
    <tr>
      <th>Id</th>
      <th>readingType</th>
      <th>readingValue</th>
      <th>readingDate</th>
      <th>description</th>
      <th>time</th>

    </tr>
    <tr v-for="reading in readings" :key="reading.id">
      <td>{{ reading.id }}</td>
      <td>{{ reading.readingType }}</td>
      <td>{{ reading.readingValue }}</td>
      <td>{{ reading.readingDate }}</td>
      <td>{{ reading.description }}</td>
      <td>{{ reading.time }}</td>

    </tr>
    <button @click="page--" :disabled="page === 0">Previous</button>
    <span>Page {{ page + 1 }} of {{ totalPages }}</span>
    <button @click="page++" :disabled="page >= totalPages - 1">Next</button>
  </table>
</template>

<style scoped>

</style>