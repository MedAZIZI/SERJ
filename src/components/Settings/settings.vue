<template>
    <v-container>



        <v-col cols="12" sm="8" >

            <v-row class="d-flex align-center justify-center">
                <h2>Settings</h2>
            </v-row>
            <v-row class="d-flex align-center justify-left">
                <h2 class="bl">Applications</h2>
            </v-row>

            <div style="height:50px"></div>

            <v-row>
                <v-list-item link to="/editprofil">
                    <v-list-item-icon>
                        <v-icon>mdi-account-settings</v-icon><span class="txt">Profil</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item link to="/notifications">
                    <v-list-item-icon>
                        <v-icon>mdi-bell-badge-outline</v-icon> <span class="txt">Notifications</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <!--<v-row>
                <v-list-item link to="/frgtPswrd">
                    <v-list-item-icon>
                        <v-icon>mdi-form-textbox</v-icon><span class="txt">Change Password</span> 
                    </v-list-item-icon>
                </v-list-item>
            </v-row>

            <div style="height:100px"></div>

            <v-row>
                <v-list-item link to="">
                    <v-list-item-icon>
                        <v-icon style="color: orange;">mdi-trash-can-outline</v-icon> <span class="ornge"> Delete
                            Account</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>-->

            <div style="height:50px"></div>

            <v-row class="d-flex align-center justify-left">
                <h2 class="bl">About</h2>
            </v-row>
            <div style="height:50px"></div>
            <v-row>
                <v-list-item link to="/privacy">
                    <v-list-item-icon>
                        <v-icon>mdi-shield-alert-outline</v-icon><span class="txt">Privacy</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item link to="/terms">
                    <v-list-item-icon>
                        <v-icon> mdi-format-page-break</v-icon> <span class="txt">Terms and conditions</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item link to="/help">
                    <v-list-item-icon>
                        <v-icon>mdi-help-circle-outline</v-icon> <span class="txt">Help Center</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item link to="/support">
                    <v-list-item-icon>
                        <v-icon>mdi-face-agent</v-icon> <span class="txt">Support</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item link to="/about">
                    <v-list-item-icon>
                        <v-icon>mdi-information-outline</v-icon> <span class="txt">About</span>
                    </v-list-item-icon>
                </v-list-item>
            </v-row>




        </v-col>
    </v-container>
</template>
<script>
export default {
    data() {
        return {

        };
    },
};
</script>
<style scoped>
.ornge {
    color: #F8BF36;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.15px;
}

.v-list-item {
    margin: 5px;
}

.v-icon {
    color: #579BC0;
    margin-right: 20px;
    margin-left: 5px;
}

.bl {
    color: #579BC0;
    font-family: Poppins;
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.14px;
}

.txt {
    color: var(--Black, #0D0D26);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.15px;
}
</style>