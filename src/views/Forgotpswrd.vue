<template>
  
  <div v-if="currentStep === 's1'">
      <step1 @request-submitted="handleRequestSubmit" />
  </div>
  <div v-if="currentStep === 's2'">
      <step2 @verify-submitted="handleVerify"/>
  </div>
  <div v-if="currentStep === 's3'">
      <step3 />
  </div>
  <div v-if="currentStep === 's4'">
      <step4 />
  </div>
   <v-container> 
      <!---<v-row justify="center">
          <v-btn color="primary" @click="nextStep" > {{ textbutton }} </v-btn>
      </v-row >--->
   </v-container> 
</template>

<script>
import step1 from '@/components/Login/Forgotpswrd.vue'
import step2 from '@/components/Login/Verifcode.vue'
import step3 from '@/components/Login/Resetpswrd.vue'
import step4 from '@/components/Login/Confirm.vue'
import UserDataService from '../services/UserDataService'

export default {
    components: {
      step1,
      step2,
      step3,
      step4
    },
    data() {
        return {
           inputValue: '',
           textbutton : "Envoyer",
           currentStep: 's1',
        };
    },
    methods: {
        handleRequestSubmit() {
            if (this.currentStep === 's1') {
                this.textbutton = "Verify";
                //this.currentStep = 's2';
            }
        },
        handleVerify() {
            this.textbutton = "Reset Password";
                this.currentStep = 's3';
                console.log("verification");
        },
        nextStep() {
            // Logique pour passer à la partie suivante du formulaire
            
            if (this.currentStep === 's1') {
                this.textbutton = "Verify";
                //this.currentStep = 's2';

            }else if (this.currentStep === 's2') {
                this.textbutton = "Reset Password";
                this.currentStep = 's3';
                console.log("verification");
            }else if (this.currentStep === 's3') {
                this.textbutton = "Confirmation";
                this.currentStep = 's4';
                console.log("reset");
            }else if (this.currentStep === 's4') {
                console.log("Confirm");
                this.$router.push({ name: 'Login' });
            }
          },
    },
}
</script>