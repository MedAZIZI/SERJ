<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-img height="100" width="100" src="src/assets/logo serj bg.png" />


  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>

  <v-bottom-nav v-model="activeLink" :value.sync="activeLink"  app fixed position="bottom" >
    <v-row class="d-flex align-center justify-center">

      <v-btn icon @click="navigateTo('/home')">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/about')">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/about')">
        <v-icon>mdi-marker-check</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/about')">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>

    </v-row>
  </v-bottom-nav>
</template>

<script>
export default {
  data() {
    return {
      activeLink: null,
      drawer: false,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>