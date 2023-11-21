<template >
  <div class="background-container">
    <div v-if="currentStep === '1'">
      <home1 />
    </div>
    <br><br><br><br><br><br><br><br><br><br>
    <div v-if="currentStep === '2'">
      <home2 />
    </div>
    <div v-if="currentStep === '3'">
      <home3 />
    </div>
    <div v-if="currentStep === '4'">
      <home4 />
    </div>
    <div v-if="currentStep === '5'">
      <home5 />
    </div>
    <br><br><br>
    <div v-if="currentStep != '1'">
      <v-container>

        <v-row justify="center">

          <v-btn v-if="skipbtn" class="but skp" color="Link" id="skip"  @click="goToLogin"> skip </v-btn>

          <v-btn color="primary" class="but btn btn-link" @click="nextStep"> {{ buttonText }} </v-btn>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script >
import home1 from '@/components/home/home1.vue'
import home2 from '@/components/home/home2.vue'
import home3 from '@/components/home/home3.vue'
import home4 from '@/components/home/home4.vue'
import home5 from '@/components/home/home5.vue'


export default {
  components: {
    home1,
    home2,
    home3,
    home4,
    home5
  },
  data() {
    return {
      currentStep: '1',
      skipbtn: true,
      buttonText: ' Next > '
    };
  },
  mounted() {
    console.log(this.currentStep);
    setTimeout(() => {
      this.currentStep = '2';
    }, 2000);
  },
  methods: {
    nextStep() {
      console.log(this.currentStep);
      // if (this.currentStep === '1') {
      //   this.currentStep = '2';
      // } else 
      if (this.currentStep === '2') {
        this.currentStep = '3';
      } else if (this.currentStep === '3') {
        this.currentStep = '4';
      } else if (this.currentStep === '4') {
        this.skipbtn = false
        this.buttonText = 'Explore'
        this.currentStep = '5';
      } else if (this.currentStep === '5') {
        this.$router.push({ name: 'Login' });
      }

    },
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },

  },
}
</script>
<style>
.v-app-bar {
  display: none;
}

.skp {
  border: none;
  box-shadow: none;
}
.background-container {
  background-image: url('../assets/bg_home_1.png');
  background-size: cover; 
}
.but{
  width: 200;
}
</style>