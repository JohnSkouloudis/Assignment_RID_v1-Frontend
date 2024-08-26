<script setup>
import axios from 'axios'
import { useRouter ,useRoute} from 'vue-router'
import {  ref } from 'vue'

const router = useRouter()
const route = useRoute()
const sensorId = route.params.sensorid
const message = ref('')
const readingForm = ref({
  readingType: '',
  readingValue: '',
  readingDate: '',
  description: '',
  time: ''
})

async function addReading() {

  const response = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/readings/new/'+ sensorId, readingForm.value)
  message.value = response.data.message
  setTimeout(() => {
    if (response.data.message === 'Sensor Reading Added Successfully') {
      router.push({ name: 'readings' , params:{id:sensorId}})
    }
  }, 2000)
}
</script>

<template >

  <h3>Create Reading</h3>
  <form class="p-4 border rounded shadow-sm "  id="reading-form" v-on:submit.prevent="addReading">


    <label for="readingtype">readingType:</label><br>
    <input class="form-control border-danger-subtle" v-model="readingForm.readingType" type="text" id="readingtype" name="readingtype" required><br>

    <label for="readingvalue">ReadingValue:</label><br>
    <input class="form-control border-danger-subtle" v-model="readingForm.readingValue" type="number" step="0.01" id="readingvalue" name="readingvalue"><br>

    <label for="readingdate">ReadingDate:</label><br>
    <input class="form-control border-danger-subtle" v-model="readingForm.readingDate" type="date" step="0.01" id="readingdate" name="readingdate"><br>

    <label for="description">Description:</label><br>
    <textarea class="form-control border-danger-subtle" v-model="readingForm.description" type="text" id="description"  name="description" rows="10" columns="500" placeholder="enter a description for a reading" required> </textarea><br>

    <label for="time">time:</label><br>
    <input class="form-control border-danger-subtle" v-model="readingForm.time" type="time" id="time" name="time" required><br>

    <button class="btn btn-outline-danger" type="submit" id="addReading">add Reading</button>

  </form>
  <div v-if="message">{{ message }}</div>
</template>

<style scoped>

.form-control {
border-width: 2px;
}

</style>