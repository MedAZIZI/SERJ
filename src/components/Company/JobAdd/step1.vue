<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <v-icon class="mdi mdi-chevron-left" @click="RedirectToHome" height="100px"></v-icon>

                <v-card-text>
                    <form @submit.prevent="submitBasicInfo">


                        <br>
                        <v-row justify="center">
                            <h1>Add a Job Position</h1>
                            <br><br><br>
                            <h4 style="color: #D3D3D3;">Let's gain Seasonal Employees</h4>
                        </v-row>
                        <br>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-domain" height="50px"></v-icon>
                            <input class="field" v-model="JobInfo.J_Name" placeholder="Job Name" required>
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-map-marker-outline" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.J_Loc" placeholder="job Location" required :disabled="isChecked1">
                        </v-row>
                        <v-row align="center" class="chek">
                            <input type="checkbox" v-model="isChecked1" class="chek"> Remote
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-calendar-range" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.J_Date" placeholder="Pick a Beginning Date" required :disabled="isChecked2">
                        </v-row>
                        <v-row align="center" class="chek mar10">
                            <input type="checkbox" v-model="isChecked2" class="chek"> As soon as possible

                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-format-list-bulleted-type" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.J_Type" placeholder="Job Type" type="number" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-account-hard-hat-outline" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.J_Sector" placeholder="Job Sector" type="number" required>
                        </v-row>
                        <v-row align="center" class="field_Cont1 " height="200px">
                            <v-icon class="mdi mdi-text-long" height="50px"></v-icon>
                            <textarea class="field1 " v-model="JobInfo.J_Desc" 
                            placeholder="Describe Job Descriptions in Details, Requirements and Skills " rows="4" required>
                            </textarea>
                        </v-row>
                        <br>
                        
                    </form>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            JobInfo: {
                J_Name: '',
                J_Loc: '',
                J_Date: '',
                J_Type: '',
                J_Sector: '',
                J_Desc: '',
            },
            isChecked1: false,
            isChecked2: false,
        };
    },
    methods: {
        RedirectToHome(){
            this.$router.push({ name: 'Home' });
        }
    },
};
</script>
<style scoped>

.chek{
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
}
.field_Cont {
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #B3B4BB;
    height: 52px;
    padding: 10px;
    margin: 10px;
}
.field_Cont1 {
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #B3B4BB;
    height: 150px;
    padding: 10px;
    margin: 10px;
}


.field1 {
    color: var(--grey-70, #AFB0B6);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.14px;
    margin-left: 25px;
    width: 300px;
}


.field {
    color: var(--grey-70, #AFB0B6);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.14px;
    margin-left: 10px;
    max-width: 300px;
}

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

.log {
    color: var(--Purple, #356899);
    font-family: Abhaya Libre ExtraBold;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
</style>