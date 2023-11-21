<template>
    <v-container>
      <!-- Section: Welcome Back -->
      <v-row>
        <v-col>
          <h1>Welcome Back!</h1>
          <p>{{ userName }} 👋</p>
        </v-col>
      </v-row>
  
      <!-- Section: Search Bar -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="searchQuery"
            label="Search a job or position"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn @click="Search" color="primary">Search</v-btn>
        </v-col>
      </v-row>
  
  
      <!-- Section: Featured Jobs -->
      <v-row>
        <v-col>
          <h2>Featured Jobs</h2>
          <!-- Display featured jobs here -->
          <v-row>
            <v-col v-for="job in filteredFeaturedJobs" :key="job.id" cols="12" md="4" lg="4">
              <!-- Featured Job Card Content -->
              <v-card>
                <v-img :src="job.logo" alt="Company Logo" width="100" height="100"></v-img>
                <v-card-title>{{ job.title }}</v-card-title>
                <v-card-subtitle>{{ job.company }} - {{ job.location }}</v-card-subtitle>
                <v-card-text>{{ job.description }}</v-card-text>
                <v-btn @click="openDetailsDialog(job)">View Details</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Section: Popular Jobs -->
      <v-row>
        <v-col>
          <h2>Popular Jobs</h2>
          <!-- Display popular jobs here -->
          <v-row>
            <v-col v-for="job in filteredPopularJobs" :key="job.id" cols="12" md="6" lg="4">
              <v-card>
                <v-card-title>{{ job.title }}</v-card-title>
                <v-card-subtitle>{{ job.company }} - {{ job.location }}</v-card-subtitle>
                <v-btn @click="viewJobDetails(job.id)">View Details</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Job Details Dialog -->
      <v-dialog v-model="showDetailsDialog" max-width="800">
        <v-card>
          <v-card-title>Job Details</v-card-title>
          <v-card-subtitle>{{ selectedJob.title }}</v-card-subtitle>
          <v-card-text>
            <p>Company: {{ selectedJob.company }}</p>
            <p>Location: {{ selectedJob.location }}</p>
            <p>Description: {{ selectedJob.description }}</p>
            <!-- Add more details as needed -->
          </v-card-text>
          <v-card-actions>
            <v-btn @click="showDetailsDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: 'Houcine',
        searchQuery: '',
        featuredJobs: [
          // ... (existing featured jobs data)
          {
            id: 1,
            title: 'Restaurant Chef',
            company: 'Top Eats',
            location: 'Lyon 9, FR',
            description: 'Work on weekends',
            logo: 'src/assets/logos/play-burger-king-png-logo-2.PNG',
          },
          {
            id: 2,
            title: 'Dish Washer',
            company: 'Clean Cuisine',
            location: 'Lyon 7, FR',
            description: '3 days/week',
            logo: 'src/assets/logos/mcdonald-s-transparent-mcdonald-s-free-free-png.PNG',
          },
          {
          id: 3,
          title: 'Summer Camp Counselor',
          company: 'Adventure Seekers',
          location: 'Bron, FR',
          description: 'Lead outdoor activities for kids in a summer camp setting.',
          logo: 'src/assets/logos/ac-mainstage-logo_800x336.PNG',
        },
        {
          id: 4,
          title: 'Lifeguard',
          company: 'Sunshine Pools',
          location: 'Lyon 3, FR',
          description: 'Ensure the safety of swimmers and provide first aid when necessary.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 5,
          title: 'Ice Cream Scooper',
          company: 'Sweet Delights',
          location: 'Gerland LYON, FR',
          description: 'Serve delicious ice cream and provide excellent customer service.',
          logo: 'src/assets/logos/images.PNG',
        },
        {
          id: 6,
          title: 'Beach Photographer',
          company: 'Sunny Snaps',
          location: 'Coastal Resort, FR',
          description: 'Capture memorable moments by taking photos of beachgoers and tourists.',
          logo: 'src/assets/logos/STUDIO.PNG',
        },
        {
          id: 7,
          title: 'Tour Guide',
          company: 'Explore Adventures',
          location: 'Vieu Lyon, FR',
          description: 'Lead guided tours to historical landmarks and share fascinating stories.',
          logo: 'src/assets/logos/0x0.PNG',
          
        },
        {
          id: 8,
          title: 'Water Sports Instructor',
          company: 'Aqua Thrills',
          location: 'Tropical , FR',
          description: 'Teach and supervise water sports activities like snorkeling and paddleboarding.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 9,
          title: 'Outdoor Event Coordinator',
          company: 'Summer Festivals Co.',
          location: 'City Parks, FR',
          description: 'Plan and organize outdoor events and festivals for the summer season.',
          logo: 'src/assets/logos/3ff7946878d698155218eaff2dc6138c.PNG',
        },
        ],
        popularJobs: [
          // ... (existing popular jobs data)
        ],
        filteredFeaturedJobs: [],
        filteredPopularJobs: [],
        showDetailsDialog: false,
        selectedJob: {},
      };
    },
    methods: {
      Search() {
        this.filteredFeaturedJobs = this.featuredJobs.filter(job =>
          this.jobContainsSearchQuery(job)
        );
        this.filteredPopularJobs = this.popularJobs.filter(job =>
          this.jobContainsSearchQuery(job)
        );
      },
      jobContainsSearchQuery(job) {
        const searchQueryLC = this.searchQuery.toLowerCase();
        return (
          job.title.toLowerCase().includes(searchQueryLC) ||
          job.company.toLowerCase().includes(searchQueryLC) ||
          job.location.toLowerCase().includes(searchQueryLC) ||
          job        .description.toLowerCase().includes(searchQueryLC)
        );
      },
      viewJobDetails(jobId) {
        console.log(`View details for job with ID: ${jobId}`);
        // Implement logic to view job details
      },
      initializeFilteredJobs() {
        this.filteredFeaturedJobs = this.featuredJobs;
        this.filteredPopularJobs = this.popularJobs;
      },
      openDetailsDialog(job) {
        this.selectedJob = job;
        this.showDetailsDialog = true;
      },
    },
    created() {
      this.initializeFilteredJobs();
    },
  
  
      
  };
  </script>
  
  <style scoped>
  /* Component-specific styles */
  </style>
  
  