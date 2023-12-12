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
                                <!-- <v-img src="src/assets/profil.png" height="100px" alt="Image Description">
                                </v-img> -->
                            </v-row>

                            <br>
                            <v-row justify="center">
                                <h4 style="color: #D3D3D3;">Upload Photo</h4>
                            </v-row>
                            <br>
                            <v-text-field v-model="basicInfo.firstName" label="Prénom" required
                                class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.lastName" label="Nom" required class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.dateB" label="Date of Birth" required
                                class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.email" label="Email" required class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.confirmEmail" label="Confirmation de l'email" required
                                class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.password" label="Password" required
                                class="w-100"></v-text-field>
                            <v-text-field v-model="basicInfo.phone" label="Phone" required class="w-100"></v-text-field>
                            <v-container>
                                <v-row justify="center">
                                    <v-btn color="primary" type="submit">Next</v-btn>
                                </v-row >
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
  