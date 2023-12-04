<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

    <v-img height="100" width="100" src="src/assets/logo serj bg.png"  class="logo_lft"/>


  </v-app-bar>
  <v-main>
    <router-view />
    
  </v-main>

  <v-bottom-nav v-model="activeLink" :value.sync="activeLink"   app fixed position="bottom" >
    <v-row class="d-flex align-center justify-center ">

      <v-btn icon @click="navigateTo('/catalogue')" class="icobar">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/message')" class="icobar">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/notifications')" class="icobar">
        <v-icon>mdi-marker-check</v-icon>
      </v-btn>

      <v-btn icon @click="navigateTo('/notifications')" class="icobar">
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
<style>
.logo_lft{
  position: absolute;
  right: 10px;
}

.icobar{
  margin-left: 15px;
  margin-right: 15px;
}
.v-bottom-nav{
  box-shadow: none;
}
</style>