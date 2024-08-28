<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import {  ref } from 'vue'

const router = useRouter()
const message = ref('')
const sensorForm= ref({
  sensorType: '',
  vendorName: '',
  vendorEmail: '',
  description: '',
  location: ''

})

async function addSensor(){

  const response = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/sensors/new', sensorForm.value)
  message.value=response.data.message
  setTimeout(() => {
    if(response.data.message === 'Sensor added successfully'){
      router.push({name:'sensors'})
    }
  }, 2000)



}

</script>

<template>
<div class="form-container">
  <form class="p-4 border rounded shadow-sm border-dark-subtle" style="width: 400px" id="sensor-form" v-on:submit.prevent="addSensor">
    <h3>Create Sensor</h3>
    <label for="sensortype">Sensor Type:</label><br>
    <select class="form-select border-danger" v-model="sensorForm.sensorType" id="sensortype" name="sensortype">
      <option value="Temperature">Temperature</option>
      <option value="Humidity">Humidity</option>
      <option value="Acoustic">Acoustic</option>

    </select><br>

    <label for="vendorName">Vendor Name:</label><br>
    <input class="form-control border-danger" v-model="sensorForm.vendorName" type="text" id="vendorName" name="vendorname" required><br>

    <label for="vendorEmail">Vendor Email:</label><br>
    <input class="form-control border-danger" v-model="sensorForm.vendorEmail" type="text" id="vendorEmail" name="vendoremail" required><br>

    <label for="description" >Description:</label><br>
    <textarea class="form-control border-danger" v-model="sensorForm.description" id="description" name="description" rows="10" columns="500" placeholder="enter a description" required></textarea><br>

    <label for="location">Location:</label><br>
    <input class="form-control border-danger" v-model="sensorForm.location" type="text" id="location" name="location" required><br>

    <button class="btn btn-outline-success" type="submit"  id="addSensor">addSensor</button>
  </form>
  <div v-if="message">{{ message }}</div>
</div>
</template>

<style scoped>

.form-container{
  margin-bottom: 30px;
  border-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>