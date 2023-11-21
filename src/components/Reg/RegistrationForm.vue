<template>
    
            <!-- Affichez la partie appropriée en fonction de l'état actuel -->
            <div v-if="currentStep === 'basic-info'">
                <BasicInfoForm />
            </div>
            <div v-if="currentStep === 'JobSector-info'">
                <JobSectorInfoForm />
            </div>
            <div v-if="currentStep === 'JobType-Info'">
                <JobTypeInfoForm />
            </div>
            <div v-if="currentStep === 'Availability-Info'">
                <AvailabilityInfoForm />
            </div>
            <div v-if="currentStep === 'Confirm'">
                <Conf />
            </div>
            <!-- Ajoutez d'autres parties du formulaire ici -->

            <!-- Bouton "Next" pour passer à la partie suivante -->
            <!-- <button @click="nextStep">Next</button> -->
            <v-container>
                <v-row justify="center">
                    <v-btn color="primary" @click="nextStep" > {{ buttonText }} </v-btn>
                </v-row >
            </v-container>
           
  
</template>
  
<script>
import BasicInfoForm from './BasicInfoForm.vue'
import JobSectorInfoForm from './JobSectorForm.vue'
import JobTypeInfoForm from './JobTypeForm.vue'
import AvailabilityInfoForm from './AvailabilityForm.vue'
import Conf from './Confirm.vue'
export default {
    components: {
        BasicInfoForm,
        JobSectorInfoForm,
        JobTypeInfoForm,
        AvailabilityInfoForm,
        Conf
        // Importez et utilisez d'autres composants ici si nécessaire
    },
    data() {
        return {
            buttonText: '  >> Next  >>  ',
            currentStep: 'basic-info', // Partie du formulaire actuelle
        };
    },
    methods: {
        nextStep() {
            // Logique pour passer à la partie suivante du formulaire
            
            if (this.currentStep === 'basic-info') {
                this.currentStep = 'JobSector-info';
            } else if (this.currentStep === 'JobSector-info') {
                this.currentStep = 'JobType-Info';
            }else if (this.currentStep === 'JobType-Info') {
                this.currentStep = 'Availability-Info';
                this.buttonText = '   >> Save  <<   ';
            }else if (this.currentStep === 'Availability-Info') {
                this.currentStep = 'Confirm';
                this.buttonText = '   Log In   ';
            }else if (this.currentStep === 'Confirm') {
                this.$router.push({ name: 'Login' });
            }
            
        },
    },
}
</script>
  