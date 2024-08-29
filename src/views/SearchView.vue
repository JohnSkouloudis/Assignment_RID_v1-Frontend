<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'



const results= ref([])
const page = ref(0)
const totalPages= ref(0)

const sensorType=ref(undefined)
const location=ref(undefined)
const time=ref(undefined)

const formSubmitted = ref(0)

watch(page, () => {
  search()
})


watch(formSubmitted,(newValue)=>{
  page.value=0

  if(newValue === 2){
    sensorType.value=undefined
    location.value=undefined
    time.value=undefined

  }
  search()
  formSubmitted.value=0
})


async function search(){

  const response = await axios.get(import.meta.env.VITE_BACKEND_URL+'/api/readings/search',
    {
      params: { page: page.value,sensorType: sensorType.value, location: location.value, time: time.value }
    })
  results.value=response.data.content
  totalPages.value=response.data.totalPages
  console.log(results.value)



}

onMounted(() => {
  search()
})

</script>

<template>
<div class="d-flex flex-row  justify-content-center">
  <div id="table-page-buttons" style='width: 50%'>
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

  <form class="p-4 border rounded shadow-sm mb-3 " v-on:submit.prevent="formSubmitted=1"   >

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
    <button class="btn btn-info"  type="submit" id="searchButton">Search</button>
    <button class="btn btn-danger" @click="formSubmitted=2" type="reset" id="resetButton">Reset</button>
  </form>

</div>
</template>

<style scoped>


</style>