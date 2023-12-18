/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';



import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';

import '@mdi/font/css/materialdesignicons.min.css';


import '@mdi/font/css/materialdesignicons.min.css';


// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';


const app = createApp(App);

// Use the VueAwesomeSwiper plugin

registerPlugins(app);

app.mount('#app');
