<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <v-card> -->
                <v-card-title class="text-h5">Registration 👍</v-card-title>
                <v-card-text>

                    <!-- https://www.pngwing.com/en/free-png-zdovr/download -->

                    <form @submit.prevent="submitBasicInfo">
                        <h4 style="color: #D3D3D3;">Let's Register to apply for jobs!</h4>
                        <br>
                        <v-row justify="center">
                            <v-img src="src/assets/profil.png" height="100px" alt="Image Description">
                            </v-img>
                        </v-row>

                        <br>
                        <v-row justify="center">
                            <h4 style="color: #D3D3D3;">Upload Photo</h4>
                        </v-row>
                        <br>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-form-textbox" height="50px" ></v-icon>
                            <input class="field" v-model="basicInfo.firstName" placeholder="Prénom" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-form-textbox" height="50px"></v-icon>
                            <input class="field" v-model="basicInfo.lastName" placeholder="Nom" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-calendar-range" height="50px"></v-icon>
                            <input class="field" v-model="basicInfo.dateB" placeholder="Date of Birth" required>

                            <!-- <input class="field" type="datetime-local" v-model="basicInfo.dateB" id="meeting-time" 
                                name="meeting-time" value="2018-06-12T19:30" placeholder="Date of Birth"
                                min="2018-06-07T00:00" max="2018-06-14T00:00" > -->
                        </v-row>

                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-email" height="50px"></v-icon>
                            <input class="field" v-model="basicInfo.email" placeholder="email" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-email-alert" height="50px"></v-icon>
                            <input class="field" v-model="basicInfo.confirmEmail" placeholder="Confirmation de l'email"
                                required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-key-alert" height="50px"></v-icon>
                            <input type="password" class="field" v-model="basicInfo.password" placeholder="Password" required>
                        </v-row>
                        <v-row align="center" class="field_Cont">
                            <v-icon class="mdi mdi-phone" height="50px"></v-icon>
                            <input class="field" v-model="basicInfo.phone" placeholder="Phone" required>
                        </v-row>




                        <!-- <v-text-field v-model="basicInfo.firstName" label="Prénom" required class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.lastName" label="Nom" required class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.dateB" label="Date of Birth" required class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.email" label="Email" required class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.confirmEmail" label="Confirmation de l'email" required
                            class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.password" label="Password" required class="w-100"></v-text-field>
                        <v-text-field v-model="basicInfo.phone" label="Phone" required class="w-100"></v-text-field> -->
                        <v-container>
                            <v-row justify="center">
                                <v-btn color="primary" type="submit">Next</v-btn>
                            </v-row>
                        </v-container>
                    </form>
                </v-card-text>
                <!-- </v-card> -->
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            basicInfo: {
                firstName: '',
                lastName: '',
                password: '',
                dateB: '',
                phone: '',

            },
        };
    },
    methods: {
        submitBasicInfo() {
            // You can perform validation here if needed
            // Emit an event or pass the basicInfo data to the parent component
            this.$emit('basic-info-submitted', this.basicInfo);
        },
    },
};
</script>
  
<style scoped>
.field_Cont {
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #B3B4BB;
    height: 52px;
    /* padding: 10px; */
    margin: 10px;
}

.field {
    color: var(--grey-70, #AFB0B6);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.14px;
    margin-left: 20px;
    max-width: 300px;
}
.v-icon{
display: block;
}
</style>