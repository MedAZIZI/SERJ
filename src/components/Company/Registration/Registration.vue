<template>
    <v-container>

        <!-- Formulaire d'inscription Entreprise -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <v-row justify="center" style="margin-top:20px;">
                    <br> <br>
                    <v-card-title class="text-h5">Registration</v-card-title>
                    <br> <br>
                    <h4 style="color: #D3D3D3;">Let's Register & gain Seasonal Employees</h4>
                </v-row>
                <v-row justify="center">

                    <v-avatar size="150px">
                        <img src="src/assets/user.png" alt="Avatar" >
                    </v-avatar>
                </v-row>
                <v-card-text>


                    <form @submit.prevent="submitBasicInfo">


                        <br>
                        <v-row justify="center">
                            <h4 style="color: #D3D3D3;">Upload logo</h4>
                        </v-row>
                        <br>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-domain" height="50px"></v-icon>
                            <input class="field" v-model="CompInfo.C_Name" placeholder="Company's Name" required>
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-email-outline" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.email" placeholder="Your email" required>
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-account-outline" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.name" placeholder="Your Name" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-phone" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.tel" placeholder="Tel" type="number" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-map-marker" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.C_location" placeholder="Company's Location" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-web" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.Website" placeholder="Company's website" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-key-outline" height="50px"></v-icon>
                            <input class="field" v-model="CompInfo.password" placeholder="Password" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-key-outline" height="50px"></v-icon>
                            <input class="field " v-model="CompInfo.Conf_password" placeholder="Confirm Password" required>
                        </v-row>
                        <br>
                        <v-row class="btn_Cont align-center justify-center">
                            <button type="submit">Next ></button>
                        </v-row>
                    </form>
                    <br>
                    <v-row class="align-center justify-center" >
                        Have an Account? <span class="log" @click="RedirectToLogin"> Log in</span>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            CompInfo: {
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
        submitBasicInfo() {
            // You can perform validation here if needed
            // Emit an event or pass the basicInfo data to the parent component
            this.$emit('basic-info-submitted', this.basicInfo);
        },
        RedirectToLogin(){
            this.$router.push({ name: 'Login' });
        }
    },
};
</script>
<style>
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
  