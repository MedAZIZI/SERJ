<template>
    <div>
      <h1>{{ job.title }}</h1>
      <p>{{ job.description }}</p>
  
      <!-- Display additional job details -->
      <div>
        <h2>Company Information</h2>
        <p><strong>Company:</strong> {{ job.company }}</p>
        <p><strong>About the Company:</strong> {{ job.aboutCompany || 'Not available' }}</p>
        <p><strong>Requirements:</strong> {{ job.requirements || 'Not specified' }}</p>
      </div>
  
      <!-- Display job reviews (you can customize this based on your data structure) -->
      <div v-if="job.reviews && job.reviews.length">
        <h2>Reviews</h2>
        <ul>
          <li v-for="(review, index) in job.reviews" :key="index">{{ review }}</li>
        </ul>
      </div>
  
      <!-- Apply Now button -->
      <button @click="applyNow">Apply Now</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Apply',
    props: {
      job: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      applyNow() {
        // Implement the logic to handle the "Apply Now" action
        // You can navigate to another page, show a form, or perform any other action
        console.log('Applying for the job:', this.job.title);
      }
    }
  };
  </script>
  