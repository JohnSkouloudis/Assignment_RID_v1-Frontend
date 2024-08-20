<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'



const results= ref([])
const page= ref(0)
const totalPages= ref(0)

const sensorType=ref(undefined)
const location=ref(undefined)
const time=ref(undefined)


watch(page, () => {
  search()
})

async function search(){
  const response = await axios.get('http://localhost:9090/api/readings/search',
    {
      params: { page: page.value,sensorType: sensorType.value, location: location.value, time: time.value }
    })
  results.value=response.data.content
  totalPages.value=response.data.totalPages
  console.log(results.value)

   sensorType.value= undefined
   location.value= undefined
   time.value= undefined

}

onMounted(() => {
  search()
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
    <tr v-for="reading in results" :key="reading.id">
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

  <form v-on:submit.prevent="search">
    <label for="sensortype">Sensor Type:</label><br>
    <select v-model="sensorType" id="sensortype" name="sensortype">
      <option value="Temperature">Temperature</option>
      <option value="Humidity">Humidity</option>
      <option value="Acoustic">Acoustic</option>
    </select>
    <label for="location">Location:</label><br>
    <input v-model="location" type="text" id="location" name="location" ><br>
    <label for="time">Time:</label><br>
    <input v-model="time" type="time" id="time" name="time" ><br>
    <button type="submit" id="searchButton">Search</button>


  </form>

</template>

<style scoped>

</style>