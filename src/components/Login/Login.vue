<template>
  <v-app>
    <v-container>

      <!-- Formulaire de Login -->

      <v-row class="d-flex align-center justify-center"  >
        <v-col cols="12">
          
            <v-card-text style="margin-bottom: 100px;">
              <h1 style="color: #D3D3D3;">Welcome Back !</h1>
              <br>
              <h3 style="color: #d3d3d3b6;">Let's log to Apply to job!</h3>
            </v-card-text>
            <v-form @submit.prevent="login" style="margin-bottom: 100px;">
              <!-- email  -->
              <v-col>
                <v-row>
                  <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" type="text"
                    required></v-text-field>
                </v-row>

                <!-- password -->

                <v-row>
                  <v-text-field v-model="password" label="Password" prepend-icon="mdi-key"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
                    :type="showPassword ? 'text' : 'password'" required></v-text-field>
                </v-row>

                <!-- Btn login -->

                <v-row class="d-flex align-center justify-center">
                  <v-btn color="primary" type="submit" >Login</v-btn>
                </v-row>
                <br>
                <v-row class="d-flex align-center justify-center">
                  <v-btn class="sender" to="/frgtPswrd">
                    Forgot Password?
                  </v-btn>
                </v-row>
                <br><br><br><br><br>
                <v-row class="d-flex align-center justify-center">
                  Haven't an account?
                  <v-btn class="sender" to="/registration">
                    Register
                  </v-btn>
                </v-row>
                


                <!-- <v-row class="d-flex align-center justify-center"> -->
              </v-col>

            </v-form>
         
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script >
import UserDataService from '../../services/UserDataService'

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: true,
    };
  },
  methods: {
    login() {
      // Ajoutez votre logique de connexion ici
      alert('Nom d\'utilisateur:' + this.email)
      console.log('Nom d\'utilisateur:', this.email);
      console.log('Mot de passe:', this.password);
      UserDataService.login({"email" : this.email, "password" : this.password})
      .then((response) => {
          console.log(response.data);
      // Redirigez l'utilisateur après la connexion réussie
          localStorage.setItem('userToken', response.data.token);
          if(response.status==200) this.$router.push({ name: 'Profil' })
      })
        .catch((e) => {
          console.log(e.status);
        });
    },
    redirectToSignup() {
      this.$router.push({ name: 'Registration' });
    },
  },
};
</script>
<style>
.sender{
  /* margin-top: 1cm; */
  border-radius: 0%;
  color: darkblue;
  border: none;
  box-shadow: none;
}
</style>