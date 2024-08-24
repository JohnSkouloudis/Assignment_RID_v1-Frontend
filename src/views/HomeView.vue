<script setup>
</script>

<template>
  <div class="container-fluid d-flex align-items-center justify-content-center min-vh-100">
    <div class="content text-center">
      <div class="title">
        <h2 class='display-4'> Welcome to the Sensor Management System </h2>
        <p class='lead'>This is the user interface for managing and viewing sensors and their data </p>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
        <h3>About the Frontend</h3>
        <p>
          The Frontend was built using VueJS and Bootstrap and it was designed to interact with the Backend
          and to provide a simple interface for the user to view and manage sensors
        </p>
        <h4>Types of Sensors</h4>
        <ul>
          <li>
          <img src="/temperature-control.png" alt="Temperature Icon" style="width: 30px; height: 30px; margin-right: 5px;">
          Temperature Sensor
          </li>
          <li>
          <img src="/humidity.png" alt="Humidity Icon" style="width: 30px; height: 30px; margin-right: 5px;">
          Humidity Sensor
          </li>
          <li>
          <img src="/sensor-alert.png" alt="Humidity Icon" style="width: 25px; height: 25px; margin-right: 9px;">
          Acoustic Sensor
          </li>
        </ul>
        <p>
          Users can view sensors and their readings,
          add new sensors and readings and also search for readings
          based on their location,the type of sensor and the time the reading was captured
        </p>
        </div>

        <div class="col-md-6">
        <h3>About the Backend</h3>
        <p>
          The backend is a REST API built to handle requests for storing and retrieving data from sensors.
          It provides endpoints for creating,reading  sensor information, as well as retrieving readings.
          It was made using Java Spring Boot  and PostgreSQL as its database for storing data.
        </p>

        <h3><u>Repositories</u></h3>
        <ul >
          <li>
          <a href='https://github.com/JohnSkouloudis/Assignment_RID_v1' target='_blank'><img src="/github-mark.png" alt='github'  style="width: 35px; height: 35px;"></a>
          Backend
          </li>
          <li>
          <a href='https://github.com/JohnSkouloudis/Assignment_RID_v1_Frontend' target='_blank' ><img src="/github-mark-blue.png" alt='github'  style="width: 35px; height: 35px; "></a>
           Frontend
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container-fluid {
  padding: 0;
}

.content {
  max-width: 900px;
  margin: auto;
}

.title {
  background-color: lightgrey;
  padding: 2rem 2rem;
  border-radius: 15px;
}

h2.display-4 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.75rem;
  font-weight: bold;
  margin-top: 1.5rem;
}

p.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 0.5rem;
}
</style>