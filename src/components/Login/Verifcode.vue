<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-text style="margin-bottom: 100px;">
            <h1 style="color: grey;" class="text-center">Verify Code</h1>
            <br>
            <h3 style="color: #d3d3d3b6;" class="text-center">Enter your verification code from your email or phone number
              that we've sent</h3>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-form @submit.prevent="submitForm">
          <v-row class="d-flex align-center justify-center" >
            <v-col class="inpt" >
              <v-text-field  v-model="input1"  @input="limitToSingleDigit" type="number" max="1"
                required></v-text-field>
            </v-col>
            <v-col class="inpt" >
              <v-text-field  v-model="input2"  @input="limitToSingleDigit" type="number" max="1"
                required></v-text-field>
            </v-col>
            <v-col class="inpt" >
              <v-text-field  v-model="input3" @input="limitToSingleDigit" type="number" max="1"
                required></v-text-field>
            </v-col>
            <v-col  class="inpt" >
              <v-text-field  v-model="input4" @input="limitToSingleDigit" type="number" max="1"
                required></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-btn color="primary" @click="sendForm">Verify</v-btn>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    };
  },
  methods: {
    limitToSingleDigit() {
      // Limit the input to a single digit
      if (this.input1.length > 1) this.input1 = this.input1.slice(0, 1);
      if (this.input2.length > 1) this.input2 = this.input2.slice(0, 1);
      if (this.input3.length > 1) this.input3 = this.input3.slice(0, 1);
      if (this.input4.length > 1) this.input4 = this.input4.slice(0, 1);
    },
    submitForm() {
      // Handle the form submission logic here
      console.log('Input 1:', this.input1);
      console.log('Input 2:', this.input2);
      console.log('Input 3:', this.input3);
      console.log('Input 4:', this.input4);
    },
  },
};
</script>
<style>
.inpt{
  width: 70px;
  height: 70px;
  border-radius: 10;
  background-color: white;
  margin-left: 2px;
}
</style>