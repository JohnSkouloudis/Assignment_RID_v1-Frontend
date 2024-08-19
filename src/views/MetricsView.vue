<script setup>
import {useRoute} from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const route = useRoute()
const metrics = ref(null)

const sensorId = route.params.id

async function getMetrics(){
  const response = await axios.get('http://localhost:9090/api/sensors/metrics/'+ sensorId)
  metrics.value = response.data
}

onMounted(() => {
  getMetrics()
})

</script>

<template>

  <table v-if="metrics">
    <tr>
      <th>valuesRange</th>
      <th>mean</th>
      <th>maxValues</th>
      <th>minValues</th>
    </tr>
    <tr >
      <td>{{ metrics.valuesRange }}</td>
      <td>{{ metrics.mean }}</td>
      <td>{{ metrics.maxValues }}</td>
      <td>{{ metrics.minValues }}</td>
    </tr>
  </table>
  <div v-else>
    <p>this sensor has no metrics</p>
  </div>

</template>

<style scoped>

</style>