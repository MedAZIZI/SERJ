<template>
    <div class="job-details-container">
      <!-- Job Header with Logo, Company Name, and Location -->
      <div class="job-header">
        <img :src="job.logo || 'src/assets/bee.png'" alt="Company Logo" class="company-logo" />
        <div class="company-info">
          <h2>{{ job.company }}</h2>
          <p>{{ job.location }}</p>
        </div>
      </div>
  
      <!-- Job Title and Description -->
      <div class="job-description">
        <h1>{{ job.title }}</h1>
        <p>{{ job.description }}</p>
      </div>
  
      <!-- Additional Job Details -->
      <div class="additional-details">
        <h2 style="margin-left: 30px"> Event Planner</h2>
        <p style="margin-left: 52px"><strong>Lyon Agency</strong> {{ job.aboutCompany}}</p>
        <div class="company-frame">
        <p style="margin-left: 12px">
        
          <strong>monday</strong> {{ job.aboutCompany }}
         
        </p>
      </div>
      <div class="company-frame2">
        <p style="margin-left: 12px">
        
            <strong>Full Time</strong> {{ job.aboutCompany }}
         
        </p>
      </div>
      <div class="company-frame3">
        <p style="margin-left: 12px">
        
            <strong>10€/h</strong> {{ job.aboutCompany }}
         
        </p>
      </div>
      </div>
  

  
   
     </div>
     <div class="description-row">
    <h2>Description :</h2>
    <p>
      We are seeking a detail-oriented and creative Event Planner to join our
      team. The ideal candidate will be responsible for coordinating and
      executing a wide range of events, from corporate meetings to weddings. The
      Event Planner will work closely with clients to understand their needs,
      plan logistics, and ensure that each event is a memorable and successful
      experience.
      <h3>Responsibilities:</h3>
      <p>
<ul>
<li>Collaborate with clients to understand their event objectives, budget, and preferences.</li>
Plan and organize various events, including conferences, weddings, parties, and corporate meetings.
Source and negotiate with vendors, suppliers, and venues to secure the best services within budget constraints.
Coordinate logistics such as catering, decorations, audio-visual equipment, and transportation.
Create detailed event timelines and schedules to ensure smooth execution.
Manage on-site coordination during events to handle any issues and ensure everything runs according to plan.
    </ul>
</p>
</p>
  </div>
   
  </template>
  
  <script>
  export default {

    props: {
      job: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
     
    }
  };
  </script>
  
  <style scoped>
.job-details-container {
  width: 430px;
  height: 326px;
  flex-shrink: 0;
  background-color: #579BC0;
  padding: 16px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
}

.job-header {
  display: flex;
  align-items: center;
}

.company-logo {
  width: 50px; /* Adjust the size as needed */
  height: 50px; /* Adjust the size as needed */
  margin-right: 16px;
  border-radius: 50%;
}

.company-info {
  flex-grow: 1;
}

.job-description {
  margin-top: 16px;
}

.additional-details {
  margin-top: 16px;
}

.job-reviews {
  margin-top: 16px;
}
.company-frame,
.company-frame2,
.company-frame3 {
  display: inline-flex;
  padding: 4px 10px;
  align-items: flex-start;
  border-radius: 164px;
  background: rgba(255, 255, 255, 0.15);
  margin-top: 30px; /* Adjust the margin as needed */
  position: absolute;
}

.company-frame2 {
  left: 50%;
  transform: translateX(-50%);
}

.company-frame {
  left: 12%;
}

.company-frame3 {
  right: 15%;
}

.description-row {
  margin-left: 20px; /* Adjust the margin as needed */
}
</style>