<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">

                <v-card-text>
                    <form @submit.prevent="submitBasicInfo">


                        <br>
                        <v-row justify="center">
                            <h4 style="color: #D3D3D3;">Upload logo</h4>
                        </v-row>
                        <br>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-domain" height="50px"></v-icon>
                            <input class="field" v-model="JobInfo.C_Name" placeholder="Job Name" required>
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-email-outline" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.email" placeholder="job Location" required>
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-account-outline" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.name" placeholder="Pick a Beginning Date" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-phone" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.tel" placeholder="Job Type" type="number" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-phone" height="50px"></v-icon>
                            <input class="field " v-model="JobInfo.tel" placeholder="Job Sector" type="number" required>
                        </v-row>
                        <v-row align="center" class="field_Cont h4">
                            <v-icon class="mdi mdi-text-long" height="50px"></v-icon>
                            <textarea class="field " v-model="JobInfo.tel" placeholder="Job Sector" type="number" required>
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
                C_Name: '',
                email: '',
                name: '',
                tel: '',
                C_location: '',
                Website: '',
                password: '',
                Conf_password: '',
                name: '',
            },
        };
    },
    methods: {
        
    },
};
</script>
<style>
.h4{
    height: 40px;
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

.field {
    color: var(--grey-70, #AFB0B6);
    /* Medium/14 px */
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