<script setup>

</script>

<template>

  <h1>Create Sensor</h1>
  <form id="sensor-form">
    <label for="sensortype">Sensor Type:</label><br>
    <select  id="sensortype" required>
      <option value="temperature">Temperature</option>
      <option value="humidity">Humidity</option>
      <option value="Acoustic">Acoustic</option>

    </select><br>

    <label for="vendorName">Vendor Name:</label><br>
    <input type="text" id="vendorName" name="vendorName" required><br>

    <label for="vendorEmail">Vendor Email:</label><br>
    <input type="text" id="vendorEmail" name="vendorEmail" required><br>

    <label for="description">Description:</label><br>
    <input type="text" id="description" name="description" required><br>

    <label for="location">Location:</label><br>
    <input type="text" id="location" name="location" required><br>

    <button type="submit" id="addSensor">addSensor</button>
  </form>

</template>

<style scoped>

</style>