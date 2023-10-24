<template>


  <v-container class="fill-height">

    <v-responsive class="align-center text-center fill-height">
      
      <!-- <v-img height="300" src="@/assets/logo.svg" /> -->

      <!-- <div class="text-body-4 font-weight-light mb-n1">Bonjour</div> -->

      <h1 class="text-h2 font-weight-bold">Se connecter</h1>

      <div class="py-14" />
      <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8"> <!-- Augmentation de la largeur de la colonne -->
        <v-card>
          <v-card-title class="text-h5">Connexion</v-card-title>
          <v-card-text>
            <v-form @submit="login">
              <v-text-field
                v-model="username"
                label="Nom d'utilisateur"
                required
                class="w-100"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Mot de passe"
                type="password"
                required
                class="w-100" 
              ></v-text-field>
              <v-btn color="primary" type="submit">Se connecter</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" @click="redirectToSignup">S'inscrire</v-btn>
            <!-- <v-btn text color="primary" @click="redirectToSignup">S'inscrire</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    </v-responsive>
  </v-container>
</template>

<script >
  export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Ajoutez votre logique de connexion ici
      alert('Nom d\'utilisateur:' + this.username)
      console.log('Nom d\'utilisateur:', this.username);
      console.log('Mot de passe:', this.password);
      // Redirigez l'utilisateur après la connexion réussie
    },
    redirectToSignup() {
      this.$router.push({ name: 'Registration' });
    },
  },
};
</script>
