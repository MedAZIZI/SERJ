<template>
  <v-app>
    <v-container>

      <!-- Formulaire de Login -->

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12">

          <v-card-text style="margin-bottom: 100px;">
            <h1 style="color: #D3D3D3;">Welcome Back !</h1>
            <br>
            <h3 style="color: #d3d3d3b6;">Let's log to Apply to job!</h3>
          </v-card-text>
          <v-form @submit.prevent="login" style="margin-bottom: 100px;">
            <!-- email  -->
            <v-col>
              <!-- <v-row>
                  <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" type="text"
                    required></v-text-field>
                </v-row> -->
              <v-row align="center" class="field_Cont">
                <v-icon class="mdi mdi-email" height="50px"></v-icon>
                <input class="field" v-model="email" placeholder="email" required>
              </v-row>

              <!-- password -->

              <!-- <v-row>
                <v-text-field v-model="password" label="Password" prepend-icon="mdi-key"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'" required></v-text-field>
              </v-row> -->

              <v-row align="center" class="field_Cont">
                <v-icon class="mdi mdi-key" height="50px"></v-icon>
                <input class="field" v-model="password" placeholder="Password" :type="showPassword ? 'text' : 'password'"
                  required>
                <v-icon class="mdi mdi-eye" height="50px" @click:append="showPassword = !showPassword"></v-icon>
              </v-row>
           
              

              <!-- Btn login -->

              <v-row class="d-flex align-center justify-center">
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-row>
              <br>
              <v-row class="d-flex align-center justify-center">
                <v-btn class="sender" to="/frgtPswrd">
                  Forgot Password?
                </v-btn>
              </v-row>
              <br><br><br><br><br>
              <v-row class="d-flex align-center justify-center">
                Don't have an account?
                <v-btn class="sender mb-2" to="/registration">
                  Register as Candidate
                </v-btn>
                <v-btn class="sender" to="/compreg">
                  Register as Employer
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
    async login() {
  try {
    const response = await UserDataService.login({ "email": this.email, "password": this.password })
    console.log(response.data); // Succès de la connexion
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('userType', response.data.userType);
    if (response.status == 200 && response.data.userType=='user') this.$router.push({ name: 'Profil' })
    if (response.status == 200 && response.data.userType=='entreprise') this.$router.push({ name: 'Message' })

  } catch (error) {
    console.error(error.response.data); // Erreur d'authentification
  }
},
   /* async login() {
      // Ajoutez votre logique de connexion ici
      alert('Nom d\'utilisateur:' + this.email)
      console.log('Nom d\'utilisateur:', this.email);
      console.log('Mot de passe:', this.password);
      const response = await UserDataService.login({ "email": this.email, "password": this.password })
        .then((response) => {
          console.log(response.data);
          // Redirigez l'utilisateur après la connexion réussie
          //localStorage.setItem('userToken', response.data.token);
          //localStorage.setItem('userType', response.data.token.userType);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userType', response.data.userType);
          if (response.status == 200) this.$router.push({ name: 'Profil' })
        })
        .catch((e) => {
          console.log(e);
        });
    },*/
    redirectToSignup() {
      this.$router.push({ name: 'Registration' });
    },
  },
};
</script>
<style>
.sender {
  /* margin-top: 1cm; */
  border-radius: 0%;
  color: darkblue;
  border: none;
  box-shadow: none;
}

.field_Cont {
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #B3B4BB;
  height: 52px;
  padding: 10px;
  margin: 10px;
}

.field {
  color: var(--grey-70, #AFB0B6);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  margin-left: 10px;
  max-width: 300px;
}
</style>