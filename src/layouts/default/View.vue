<template>
  <v-navigation-drawer app v-model="drawer" class="pa-2">
    <v-list>
      <v-col>
        <v-row class="d-flex align-center justify-center" style="padding: 20px;">
          <v-avatar size="100">
            <v-img class="prof" src="src/assets/flower.png" alt="Image Description">
            </v-img>
          </v-avatar>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          {{ name }}
        </v-row>
        <v-row class="d-flex align-center justify-center">
          Event Planner
        </v-row>

      </v-col>
      <div style="height: 100px;"></div>
      <v-list-item link to="/profil">
        <v-list-item-icon>
          <v-icon>mdi-account-settings</v-icon>Profil
        </v-list-item-icon>
      </v-list-item>

      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-list-box</v-icon> Applications
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-file-check</v-icon> Proposal
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon> mdi-bag-checked</v-icon> Career Advice
        </v-list-item-icon>
      </v-list-item>
      <div style="height: 200px;"></div>
      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon> Setting
        </v-list-item-icon>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-logout-variant</v-icon> Logout
        </v-list-item-icon>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-img height="100" width="100" src="src/assets/logo serj bg.png" class="logo_lft" />


  </v-app-bar>
  <v-main style="padding-bottom: 70px;">
    <router-view />

  </v-main>

  <v-bottom-nav v-model="activeLink" :value.sync="activeLink" app fixed class="barBot" >
    <br>
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
      name: "Lea Kacem",

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
.logo_lft {
  position: absolute;
  right: 10px;
}

.icobar {
  margin: 0px 20px 0px 20px;
}

.barBot {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 70px;
  /* background-color: white; */
  background: linear-gradient(to top,white, whitesmoke);

  /* z-index: 1000;  */
}
</style>