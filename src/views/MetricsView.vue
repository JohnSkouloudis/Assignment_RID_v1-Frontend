<script setup >
import {useRoute} from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const route = useRoute()
const metrics = ref(null)

const sensorId = route.params.id

async function getMetrics(){
  const response = await axios.get(import.meta.env.VITE_BACKEND_URL+'/api/sensors/metrics/'+ sensorId)
  metrics.value = response.data
}

onMounted(() => {
  getMetrics()
})

</script>

<template>

<div style='display: flex' v-if='metrics'>
  <table class="table table-striped">
    <thead>
    <tr>
      <th><b>valuesRange</b></th>
      <th><b>mean</b></th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ metrics.valuesRange }}</td>
        <td>{{ metrics.mean }}</td>
      </tr>
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
    <tr>
      <th><b>maxValues</b></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value, index) in metrics.maxValues" :key="'max-' + index">
      <td>{{ value }}</td>
    </tr>
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
    <tr>
      <th><b>minValues</b></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value, index) in metrics.minValues" :key="'min-' + index">
      <td>{{ value }}</td>
    </tr>
    </tbody>
  </table>
</div>
  <div v-else style='font-size: 30px'>
    <u><b> This sensor has no metrics </b></u>
  </div>

</template>

<style scoped>






</style>