<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Apply for {{ job.title }}</h2>
  
        <!-- Your application form goes here -->
        <label for="cv">Upload CV:</label>
        <input type="file" id="cv" accept=".pdf, .doc, .docx" ref="cvInput" />
  
        <button @click="submitApplication">Submit Application</button>
  
        <!-- Pop-up for application status -->
        <div v-if="applicationStatus" class="application-status">
          {{ applicationStatus }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean,
      job: Object,
    },
    data() {
      return {
        applicationStatus: null,
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitApplication() {
        // Get the selected file from the input
        const cvFile = this.$refs.cvInput.files[0];
  
        // Implement your logic for submitting the application
        console.log('Submitting application for:', this.job.title);
        console.log('Selected CV file:', cvFile);
  
        // Simulate a delay for demonstration purposes
        setTimeout(() => {
          // Update the application status
          this.applicationStatus = 'Application submitted successfully!';
        }, 2000); // Adjust the delay as needed
  
        // You can close the modal after submission if needed
        // this.closeModal();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles for the modal */
  .modal {
    display: none; /* Hide the modal by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  /* Styles for the application status pop-up */
  .application-status {
    margin-top: 20px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    text-align: center;
  }
  </style>
  