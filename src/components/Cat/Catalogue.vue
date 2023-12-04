import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);

<template>
  <v-container>
    <!-- Section: Welcome Back -->
    <v-row>
      <v-col>
        <h1>Welcome Back!</h1>
        <p>{{ userName }} 👋</p>
      </v-col>
    </v-row>

    <!-- Section: Search Bar with Filters -->
    <v-row>
      <v-col>
<!-- Autocomplete Search Bar -->
<v-autocomplete
      v-model="searchQuery"
      :items="getAutocompleteItems()"
      label="Search a job or position"
      outlined
      clearable
    ></v-autocomplete>
  </v-col>

  <!-- Filter Buttons -->
  <v-col>
    <v-btn @click="openFilterDialog" color="primary">Filter</v-btn>
    <!-- Add more filter buttons as needed -->
  </v-col>
        </v-row>
      <!-- Filter Dialog -->
      <v-dialog v-model="showFilterDialog" max-width="600">
        <v-card>
          <v-card-title>More Filters</v-card-title>
          <v-card-text>
            <!-- Add your additional filter options here -->
            <v-text-field v-model="salaryRange" label="Salary Range"></v-text-field>
            <v-text-field v-model="location" label="Location"></v-text-field>
            <!-- Add other filter fields as needed -->
          </v-card-text>
          <v-card-actions>
            <v-btn @click="applyFilters" color="primary">Apply Filters</v-btn>
            <v-btn @click="closeFilterDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    <!-- Section: Suggested Jobs -->
    <v-row>
 <v-col>
    <h2>Suggested Jobs</h2>
    <swiper :options="swiperOptions">
      <!-- Correct placement of swiper-slide -->
      <swiper-slide v-for="job in filteredSuggestedJobs" :key="job.id">
        <!-- Individual job card content -->
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <!-- Popular Job Card Content -->
            <swipeout>
              <v-card slot="content">
                <v-img :src="job.logo" alt="Company Logo" width="100" height="100"></v-img>
                <v-card-title>{{ job.title }}</v-card-title>
                <v-card-subtitle>{{ job.company }} - {{ job.location }}</v-card-subtitle>
                <v-card-text>{{ job.description }}</v-card-text>
                <v-btn @click="openDetailsDialog(job)">View Details</v-btn>
              </v-card>
              <div slot="right-menu">
                <!-- Your swipeout right menu content goes here -->
              </div>
            </swipeout>
          </v-col>
        </v-row>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
 </v-col>
</v-row>


    <!-- Section: Popular Jobs -->
    <v-row>
      <v-col>
        <h2>Popular Jobs</h2>
        <!-- Display popular jobs here -->
        <v-row>
          <v-col v-for="job in filteredPopularJobs" :key="job.id" cols="12" md="4" lg="4">
            <!-- Popular Job Card Content -->
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

    <!-- Job Details Dialog -->
    <v-dialog v-model="showDetailsDialog" max-width="800">
      <v-card>
        <v-card-title>Job Details</v-card-title>
        <v-card-subtitle><strong style="color: #FF8C00">{{ selectedJob.title }}</strong></v-card-subtitle>
        <v-card-text>
          <p><strong>Company: </strong>{{ selectedJob.company }}</p>
          <p><strong>Location: </strong> {{ selectedJob.location }}</p>
          <p><strong>Salary: </strong> {{ selectedJob.salaryRange }}</p>
          <p><strong>Description: </strong>{{ selectedJob.description }}</p>
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
      salaryRange: '', // Added salaryRange for filtering
      location: '', // Added location for filtering

      filteredSuggestedJobs: [
  {
    id: 10,
    title: 'Software Engineer',
    company: 'Tech Innovators',
    location: 'Any, Remote',
    salaryRange: '10 Euro/Hour ',
    description: 'Join our innovative tech team.',
    logo: 'src/assets/logos/play-burger-king-png-logo-2.PNG',
  },
  {
          id: 11,
          title: 'Counselor',
          company: 'Advkers',
          location: 'Bron, FR',
          salaryRange: '11 Euro/Hour',
          description: 'Lead outdoor activities for kids in a summer camp setting.',
          logo: 'src/assets/logos/ac-mainstage-logo_800x336.PNG',
        },
], 
 filteredPopularJobs: [
        // ... (existing popular jobs data)
        {
            id: 1,
            title: 'Restaurant Chef',
            company: 'Top Eats',
            location: 'Lyon 9, FR',
            salaryRange: '11 Euro/Hour',
            description: 'Work on weekends',
            logo: 'src/assets/logos/play-burger-king-png-logo-2.PNG',
          },
          {
            id: 2,
            title: 'Dish Washer',
            company: 'Clean Cuisine',
            location: 'Lyon 7, FR',
            salaryRange: '12 Euro/Hour',
            description: '3 days/week',
            logo: 'src/assets/logos/mcdonald-s-transparent-mcdonald-s-free-free-png.PNG',
          },
          {
          id: 3,
          title: 'Summer Camp Counselor',
          company: 'Adventure Seekers',
          location: 'Bron, FR',
          salaryRange: '10 Euro/Hour',
          description: 'Lead outdoor activities for kids in a summer camp setting.',
          logo: 'src/assets/logos/ac-mainstage-logo_800x336.PNG',
        },
        {
          id: 4,
          title: 'Lifeguard',
          company: 'Sunshine Pools',
          location: 'Lyon 3, FR',
          salaryRange: '10 Euro/Hour',
          description: 'Ensure the safety of swimmers and provide first aid when necessary.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 5,
          title: 'Ice Cream Scooper',
          company: 'Sweet Delights',
          location: 'Gerland LYON, FR',
          salaryRange: '12 Euro/Hour',
          description: 'Serve delicious ice cream and provide excellent customer service.',
          logo: 'src/assets/logos/images.PNG',
        },
        {
          id: 6,
          title: 'Beach Photographer',
          company: 'Sunny Snaps',
          location: 'Coastal Resort, FR',
          salaryRange: '11 Euro/Hour',
          description: 'Capture memorable moments by taking photos of beachgoers and tourists.',
          logo: 'src/assets/logos/STUDIO.PNG',
        },
        {
          id: 7,
          title: 'Tour Guide',
          company: 'Explore Adventures',
          location: 'Vieu Lyon, FR',
           salaryRange: '10 Euro/Hour',
          description: 'Lead guided tours to historical landmarks and share fascinating stories.',
          logo: 'src/assets/logos/0x0.PNG',
          
        },
        {
          id: 8,
          title: 'Water Sports Instructor',
          company: 'Aqua Thrills',
          location: 'Tropical , FR',
          salaryRange: '12 Euro/Hour',
          description: 'Teach and supervise water sports activities like snorkeling and paddleboarding.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 9,
          title: 'Outdoor Event Coordinator',
          company: 'Summer Festivals Co.',
          location: 'City Parks, FR',
          salaryRange: '11 Euro/Hour',
          description: 'Plan and organize outdoor events and festivals for the summer season.',
          logo: 'src/assets/logos/3ff7946878d698155218eaff2dc6138c.PNG',
        },
      ],

      originalSuggestedJobs: [
        // ... (copy of the existing suggested jobs data)
        {
    id: 10,
    title: 'Software Engineer',
    company: 'Tech Innovators',
    location: 'Any, Remote',
    salaryRange: '10 Euro/Hour ',
    description: 'Join our innovative tech team.',
    logo: 'src/assets/logos/play-burger-king-png-logo-2.PNG',
  },
      ],
      originalPopularJobs: [
        // ... (copy of the existing popular jobs data)
        {
            id: 1,
            title: 'Restaurant Chef',
            company: 'Top Eats',
            location: 'Lyon 9, FR',
            salaryRange: '11 Euro/Hour',
            description: 'Work on weekends',
            logo: 'src/assets/logos/play-burger-king-png-logo-2.PNG',
          },
          {
            id: 2,
            title: 'Dish Washer',
            company: 'Clean Cuisine',
            location: 'Lyon 7, FR',
            salaryRange: '12 Euro/Hour',
            description: '3 days/week',
            logo: 'src/assets/logos/mcdonald-s-transparent-mcdonald-s-free-free-png.PNG',
          },
          {
          id: 3,
          title: 'Summer Camp Counselor',
          company: 'Adventure Seekers',
          location: 'Bron, FR',
          salaryRange: '10 Euro/Hour',
          description: 'Lead outdoor activities for kids in a summer camp setting.',
          logo: 'src/assets/logos/ac-mainstage-logo_800x336.PNG',
        },
        {
          id: 4,
          title: 'Lifeguard',
          company: 'Sunshine Pools',
          location: 'Lyon 3, FR',
          salaryRange: '10 Euro/Hour',
          description: 'Ensure the safety of swimmers and provide first aid when necessary.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 5,
          title: 'Ice Cream Scooper',
          company: 'Sweet Delights',
          location: 'Gerland LYON, FR',
          salaryRange: '12 Euro/Hour',
          description: 'Serve delicious ice cream and provide excellent customer service.',
          logo: 'src/assets/logos/images.PNG',
        },
        {
          id: 6,
          title: 'Beach Photographer',
          company: 'Sunny Snaps',
          location: 'Coastal Resort, FR',
          salaryRange: '11 Euro/Hour',
          description: 'Capture memorable moments by taking photos of beachgoers and tourists.',
          logo: 'src/assets/logos/STUDIO.PNG',
        },
        {
          id: 7,
          title: 'Tour Guide',
          company: 'Explore Adventures',
          location: 'Vieu Lyon, FR',
           salaryRange: '10 Euro/Hour',
          description: 'Lead guided tours to historical landmarks and share fascinating stories.',
          logo: 'src/assets/logos/0x0.PNG',
          
        },
        {
          id: 8,
          title: 'Water Sports Instructor',
          company: 'Aqua Thrills',
          location: 'Tropical , FR',
          salaryRange: '12 Euro/Hour',
          description: 'Teach and supervise water sports activities like snorkeling and paddleboarding.',
          logo: 'src/assets/logos/téléchargement.PNG',
        },
        {
          id: 9,
          title: 'Outdoor Event Coordinator',
          company: 'Summer Festivals Co.',
          location: 'City Parks, FR',
          salaryRange: '11 Euro/Hour',
          description: 'Plan and organize outdoor events and festivals for the summer season.',
          logo: 'src/assets/logos/3ff7946878d698155218eaff2dc6138c.PNG',
        },
      ],

      showFilterDialog: false,
      showDetailsDialog: false,
      selectedJob: {},

      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  mounted() {
  console.log('Swiper Options:', this.swiperOptions);
},
  watch: {
    searchQuery(newQuery) {
      // Reset filtered jobs to original state when search query is empty
      if (!newQuery) {
        this.filteredSuggestedJobs = [...this.originalSuggestedJobs];
        this.filteredPopularJobs = [...this.originalPopularJobs];
      } else {
        // Filter jobs based on search query
        this.filteredSuggestedJobs = this.originalSuggestedJobs.filter(job =>
          this.jobContainsSearchQuery(job)
        );
        this.filteredPopularJobs = this.originalPopularJobs.filter(job =>
          this.jobContainsSearchQuery(job)
        );
      }
    },
 },
  methods: {
    openFilterDialog() {
      this.showFilterDialog = true;
    },
    closeFilterDialog() {
      this.showFilterDialog = false;
    },
    applyFilters() {
      // Implement logic to apply additional filters
      console.log('Applying filters');
      console.log('Salary Range:', this.salaryRange);
      console.log('Location:', this.location);

  // Filter jobs based on salaryRange and location
  this.filteredPopularJobs = this.filteredPopularJobs.filter(job =>
    this.filterJob(job)
  );
      this.closeFilterDialog();
    },
    openDetailsDialog(job) {
      this.selectedJob = job;
      this.showDetailsDialog = true;
    },

    getAutocompleteItems() {
    const autocompleteItems = [];

    // Combine jobs from suggested and popular jobs
    const allJobs = [...this.filteredSuggestedJobs, ...this.filteredPopularJobs];

    // Log the current search query
  console.log('Search Query:', this.searchQuery);
  
    // Filter jobs based on search query
    const filteredJobs = allJobs.filter(job =>
      this.jobContainsSearchQuery(job)
    );

    // Extract unique job titles for autocomplete suggestions
    const uniqueJobTitles = [...new Set(filteredJobs.map(job => job.title))];

    // Create autocomplete items with unique job titles
    uniqueJobTitles.forEach(title => {
      autocompleteItems.push({ title });
    });
    console.log('Autocomplete Items:', autocompleteItems); // Add this line

    return autocompleteItems;
  },


  filterJob(job) {
      // Implement your logic to filter jobs based on salaryRange and location
      // You may need to adjust this based on your data structure and filtering criteria
      const salaryMatch = this.salaryRange ? job.salaryRange.includes(this.salaryRange) : true;
      const locationMatch = this.location ? job.location.toLowerCase().includes(this.location.toLowerCase()) : true;

      return salaryMatch && locationMatch;
    },
    jobContainsSearchQuery(job) {
      const searchQueryLC = this.searchQuery.toLowerCase();

      return (
        job &&
        ((job.title && job.title.toLowerCase().includes(searchQueryLC)) ||
          (job.company && job.company.toLowerCase().includes(searchQueryLC)) ||
          (job.location && job.location.toLowerCase().includes(searchQueryLC)) ||
          (job.description && job.description.toLowerCase().includes(searchQueryLC)))
      );
    },

  },
};
</script>

<style scoped>
/* Component-specific styles */
.v-container {
    height: 100%;
    background: #A3C8D3;
}
.v-autocomplete {
  width: 150%;
  background: white;
}
</style>
