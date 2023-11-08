<template>
  <hello />
  <div v-if="currentStep === 's1'">
      <step1 />
  </div>
  <div v-if="currentStep === 's2'">
      <step2 />
  </div>

  <v-container>
      <v-row justify="center">
          <v-btn color="primary" @click="nextStep" > {{ textbutton }} </v-btn>
      </v-row >
  </v-container>
</template>

<script>
import step1 from '@/components/Login/Forgotpswrd.vue'
import step2 from '@/components/Login/Verifcode.vue'


export default {
    components: {
      step1,
      step2
    },
    data() {
        return {
           textbutton : "Envoyer",
           currentStep: 's1',
        };
    },
    methods: {
        nextStep() {
            // Logique pour passer à la partie suivante du formulaire
            
            if (this.currentStep === 's1') {
                this.currentStep = 's2';
                console.log("sent");
            } else if (this.currentStep === 's2') {
                //
                console.log("verification");
            }
          },
    },
}
</script>