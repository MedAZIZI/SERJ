<template>
    <div>
      <v-app>
        <v-main>
          <div id="map" style="height: 400px;"></div>
        </v-main>
      </v-app>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    mounted() {
      this.initializeMap();
    },
    methods: {
      initializeMap() {
        const map = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);
  
        L.marker([51.5, -0.09]).addTo(map).bindPopup('Hello, this is a Vuetify-Leaflet Map.');
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles for your component */
  </style>