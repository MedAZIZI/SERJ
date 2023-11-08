<template>
  <!-- <v-app> -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-text style="margin-bottom: 100px;">
            <h1 style="color: grey;" class="text-center">Forgot Password</h1>
            <br>
            <h3 style="color: #d3d3d3b6;" class="text-center">Enter your email or phone number, we will send you
              verification code</h3>
          </v-card-text>
        </v-col>
      </v-row>
      
      <v-row class="d-flex align-center justify-center c_switch">

        <v-btn class="swtch" @click="selectEmail" :color="selectedOption === 'email' ? '' : 'primary'">
          <v-icon left>mdi-email</v-icon> Email
        </v-btn>

        <v-btn class="swtch" @click="selectPhone" :color="selectedOption === 'phone' ? '' : 'primary'">
          <v-icon left>mdi-phone</v-icon> Téléphone
        </v-btn>

      </v-row>
      <br><br><br>
      <v-row>
        
        <v-col cols="12">
          <v-text-field v-model="inputValue" :label="selectedOption === 'email' ? 'Email' : 'Téléphone'"
            :placeholder="selectedOption === 'email' ? 'Entrez votre email' : 'Entrez votre numéro de téléphone'"></v-text-field>
        </v-col>
      </v-row>

      
    </v-container>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'email',
      inputValue: '',
    };
  },
  methods: {
    selectEmail() {
      this.selectedOption = 'email';
    },
    selectPhone() {
      this.selectedOption = 'phone';
    },
    sendForm() {
      // Handle the form submission logic here
      console.log('Selected Option:', this.selectedOption);
      console.log('Input Value:', this.inputValue);
      this.$router.push({ name: 'Registration' });
    },
  },
};
</script>
<style>
.swtch{
 width:167px;
 height: 100px;
 border: none;
 box-shadow: none;
 border-radius: 15px;
 /* padding-left: 10px;
 padding-right: 10px; */
}
.swtch:focus{
  border: none;
  box-shadow: none;
}
.c_switch{
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 1px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>