<template>
  <v-container>
    
    <!-- Formulaire d'inscription -->
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8">
        <v-card>
          <v-card-title class="text-h5">Inscription</v-card-title>
          <v-card-text>
            <v-form @submit="register">
              <v-text-field
                v-model="firstName"
                label="Prénom"
                required
                class="w-100"
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                label="Nom"
                required
                class="w-100"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                required
                class="w-100"
              ></v-text-field>
              <v-text-field
                v-model="confirmEmail"
                label="Confirmation de l'email"
                required
                class="w-100"
              ></v-text-field>
              <v-btn color="primary" type="submit">S'inscrire</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
    };
  },
  methods: {
    login() {
      // Logique de connexion
    },
    register() {
      // Logique d'inscription
    },
    redirectToSignup() {
      // Redirection vers le formulaire d'inscription
    },
  },
};
</script>
