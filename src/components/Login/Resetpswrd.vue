<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-text style="margin-bottom: 100px;">
          <h1 style="color: grey;" class="text-center">Reset Password</h1>
          <br>
          <h3 style="color: #d3d3d3b6;" class="text-center">Enter your new password and confirm the new password to reset
          </h3>
        </v-card-text>
      </v-col>
    </v-row>
    <v-form @submit.prevent="">
      <v-col>

        <v-row class="d-flex align-center justify-center">

          <v-text-field v-model="password" label="New Password" prepend-icon="mdi-key"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'" required></v-text-field>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-text-field v-model="cpassword" label="Confirm New Password" prepend-icon="mdi-key"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @change="verifMatch" @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'" required></v-text-field>
        </v-row>

        <v-row class="d-flex align-center justify-center">
          {{  msg }}
        </v-row>
      </v-col>
    </v-form>



  </v-container>
</template>

<script >
export default {
  data() {
    return {
      password: '',
      cpassword: '',
      showPassword: true,
      msg: ''
    };
  },
  arePasswordsMatching() {
    return this.password === this.cpassword;
  },
  verifMatch() {
    if (this.arePasswordsMatching()) {
      this.msg = 'matched';
      //console.log('matched');
    } else {
      this.msg = 'matched';
      //console.log('not matched');
    }
  },
};
</script>
