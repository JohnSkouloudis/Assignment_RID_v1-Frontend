<script setup>

</script>

<template>

  <form id="reading-form">


    <label for="readingtype">readingType:</label><br>
    <input type="text" id="readingtype" name="readingtype" required><br>

    <label for="readingvalue">ReadingValue:</label><br>
    <input type="number" id="readingvalue" name="readingvalue"><br>

    <label for="readingdate">ReadingDate:</label><br>
    <input type="date" step="0.01" id="readingdate" name="readingdate"><br>

    <label for="description">Description:</label><br>
    <input type="text" id="description" name="description" required><br>

    <label for="time">time:</label><br>
    <input type="time" id="time" name="time" required><br>

    <button type="submit" id="addReading">addReading</button>

  </form>

</template>

<style scoped>

</style>