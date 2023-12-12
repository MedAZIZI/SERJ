<template>
    
            <!-- Affichez la partie appropriée en fonction de l'état actuel -->
            <div v-if="currentStep === 'basic-info'">
                <BasicInfoForm @basic-info-submitted="handleBasicInfo"/>
            </div>
            <div v-if="currentStep === 'JobSector-info'">
                <JobSectorInfoForm @jobSector-info-submitted="handleJobSectorInfo"/>
            </div>
            <div v-if="currentStep === 'JobType-Info'">
                <JobTypeInfoForm @jobType-info-submitted="handleJobTypeInfo"/>
            </div>
            <div v-if="currentStep === 'Availability-Info'">
                <AvailabilityInfoForm  @avaibalility-info-submitted="handleAvailabilityInfo"/>
            </div>
            <div v-if="currentStep === 'Confirm'">
                <Conf />
            </div>
            <!-- Ajoutez d'autres parties du formulaire ici -->

            <!-- Bouton "Next" pour passer à la partie suivante -->
            <!-- <button @click="nextStep">Next</button>
            <v-container>
                <v-row justify="center">
                    <v-btn color="primary" type="submit" @click="nextStep" > {{ buttonText }} </v-btn>
                </v-row >
            </v-container> -->
           
  
</template>
  
<script>
import BasicInfoForm from './BasicInfoForm.vue'
import JobSectorInfoForm from './JobSectorForm.vue'
import JobTypeInfoForm from './JobTypeForm.vue'
import AvailabilityInfoForm from './AvailabilityForm.vue'
import Conf from './Confirm.vue'
import UserDataService from '../../services/UserDataService'
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
            basicInfoData: {},
            jobSectorData: {},
            jogTypeData: {},
            availabilityData: {}
        };
    },
    methods: {
        handleBasicInfo(data) {
            console.log("Submitted data:", data);
            this.basicInfoData = data; // Stockez les données du formulaire de base
            this.currentStep = 'JobSector-info';

        },
        handleJobSectorInfo(data) {
            console.log("Submitted data:", data);
            this.jobSectorData = data;
            this.currentStep = 'JobType-Info';
        },
        handleJobTypeInfo(data) {
            console.log("Submitted data:", data);
            this.jobTypeData = data;
            this.currentStep = 'Availability-Info';
        },
        handleAvailabilityInfo(data) {
            this.availabilityData=data;
            console.log("Submitted data:", {...this.basicInfoData, jobSector: this.jobSectorData, jobType: this.jobTypeData, ...this.availabilityData });

            this.signup();
            //this.currentStep = 'Confirm';
        },
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
                console.log("Submitted data:", {...this.basicInfoData, jobSector: this.jobSectorData, jobType: this.jobTypeData, ...this.availabilityData });
                this.signup();
                this.currentStep = 'Confirm';
                this.buttonText = '   Log In   ';
            }else if (this.currentStep === 'Confirm') {
                this.$router.push({ name: 'Login' });
            }
            
        },
        signup() {
            UserDataService.signup({...this.basicInfoData, jobSector: this.jobSectorData, jobType: this.jobTypeData, ...this.availabilityData })
            .then((response) => {
                console.log(response.data);
                this.currentStep = 'Confirm';
            })
                .catch((e) => {
                console.log(e.status);
                });
    
        }
    },
}
</script>
  