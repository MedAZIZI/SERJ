<template>
    
    <!-- Affichez la partie appropriée en fonction de l'état actuel -->
    <div v-if="currentStep === 'S1'">
        <S1 />
    </div>
    <div v-if="currentStep === 'S2'">
        <S2 />
    </div>
    <div v-if="currentStep === 'S3'">
        <S3 />
    </div>
    <div v-if="currentStep === 'S4'">
        <S4 />
    </div>
    <div v-if="currentStep === 'S5'">
        <S5 />
    </div>

    <v-container>
        <!-- <v-row justify="center">
            <v-btn color="primary" @click="nextStep" > {{ buttonText }} </v-btn>
        </v-row > -->
        <v-row class="btn_Cont align-center justify-center">
            <button @click="nextStep">{{ buttonText }} </button>
        </v-row>
    </v-container>
   

</template>

<script>
import S1 from './step1.vue'
import S2 from './step2.vue'
import S3 from './step3.vue'
import S4 from './step4.vue'
import S5 from './step5.vue'
export default {
components: {
S1,S2,S3,S4,S5
},
data() {
return {
    buttonText: '  >> Next  >>  ',
    currentStep: 'S1', // Partie du formulaire actuelle
};
},
methods: {
nextStep() {
    // Logique pour passer à la partie suivante du formulaire
    
    if (this.currentStep === 'S1') {
        this.currentStep = 'S2';
    } else if (this.currentStep === 'S2') {
        this.currentStep = 'S3';
    }else if (this.currentStep === 'S3') {
        this.currentStep = 'S4';
        this.buttonText = '   Add Job  ';
    }else if (this.currentStep === 'S4') {
        this.currentStep = 'S5';
        this.buttonText = '   Log In   ';
    }else if (this.currentStep === 'S5') {
        this.$router.push({ name: 'Login' });
    }
    
},
},
}
</script>
<style>
.btn_Cont {
    display: flex;
    /* width: 327px; */
    padding: 16px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: #579BC0;
    color: var(--Pure-White, #FFF);
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.16px;
    margin: 10px;
}
</style>