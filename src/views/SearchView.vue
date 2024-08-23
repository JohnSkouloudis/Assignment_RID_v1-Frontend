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
  const response = await axios.get(import.meta.env.VITE_BACKEND_URL+'/api/readings/search',
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
<div class="d-flex justify-content-between">
  <div id="table-page-buttons" >
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
    <tr v-for="reading in results" :key="reading.id">
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
  </div>

  <form v-on:submit.prevent="search" class=" mb-3 custom-gap"  >

    <label for="sensortype">Sensor Type:</label><br>
    <select class="form-select" v-model="sensorType" id="sensortype" name="sensortype">
      <option value="Temperature">Temperature</option>
      <option value="Humidity">Humidity</option>
      <option value="Acoustic">Acoustic</option>
    </select>
    <label for="location">Location:</label><br>
    <input class="form-control" v-model="location" type="text" id="location" name="location" ><br>
    <label for="time">Time:</label><br>
    <input class="form-control" v-model="time" type="time" id="time" name="time" ><br>
    <button class="btn btn-info" type="submit" id="searchButton">Search</button>

  </form>

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

.custom-gap {
  margin-left: 9rem;
}

</style>