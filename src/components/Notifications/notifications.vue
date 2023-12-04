<template>
    <div class="notification">
      <div v-if="type === 'responseFromEmployer'">
        <p>You received a response from {{ job.company }}</p>
      </div>
      <div v-if="type === 'employerReview'">
        <p>Your candidature for {{ job.title }} was {{ review }}</p>
      </div>
      <div v-if="type === 'interviewAppointment'">
        <p>You have an interview appointment for {{ job.title }} on {{ appointmentDate }}</p>
      </div>
      <!-- Add more cases for other notification types -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: String,
      job: Object,
      review: String,
      appointmentDate: String,
      // Add more props as needed for different notification types
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for notifications */
  </style>
  