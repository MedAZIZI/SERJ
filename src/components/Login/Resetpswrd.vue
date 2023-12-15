<template>
  <v-container>
    <!-- ... (autres éléments) ... -->
    <v-form @submit.prevent="resetPassword">
      <v-col>
        <v-row class="d-flex align-center justify-center">
          <v-text-field v-model="password" label="New Password" prepend-icon="mdi-key"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'" required></v-text-field>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-text-field v-model="cpassword" label="Confirm New Password" prepend-icon="mdi-key"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @change="verifMatch" @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'" required></v-text-field>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          {{ msg }}
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-btn color="primary" type="submit">Change password</v-btn>
        </v-row>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
import UserDataService from '../../services/UserDataService';

export default {
  data() {
    return {
      password: '',
      cpassword: '',
      showPassword: true,
      msg: ''
    };
  },
  methods: {
    arePasswordsMatching() {
      return this.password === this.cpassword;
    },
    verifMatch() {
      if (this.arePasswordsMatching()) {
        this.msg = 'Passwords match';
      } else {
        this.msg = 'Passwords do not match';
      }
    },
    resetPassword() {
      if (this.arePasswordsMatching()) {
        UserDataService.resetPassword({ "userId": 1, "password": this.cpassword })
          .then((response) => {
            console.log(response.data);
            this.$emit('reset-submitted', 'ok');
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        console.log('Passwords do not match');
      }
    }
  }
};
</script>
