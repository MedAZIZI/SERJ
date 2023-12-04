<template>
    <v-container>

        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <v-icon class="mdi mdi-chevron-left" @click="GoBack" height="100px"></v-icon> -->

                <v-card-text>
                    <form @submit.prevent="submitBasicInfo">


                        <br>
                        <v-row justify="left">
                            <h4 style="color: #D3D3D3;">What is the Pay for this Job?</h4>
                        </v-row>
                        <br>
                        <v-row align="center">
                            <v-col cols="4">
                                <v-row class="pay">
                                    <div class="">From €</div>
                                    <input class="field GB" v-model="JobInfo.from" placeholder="40" required>
                                </v-row>
                            </v-col>
                            <v-col cols="3" class="p0 m0">
                                <v-row class="pay">
                                    <div class="">To €</div>
                                    <input class="field GB" v-model="JobInfo.from" placeholder="80" required>
                                </v-row>
                            </v-col>
                            <v-col cols="5">
                                <v-row class="pay">
                                    <div class="">Contract Type</div>
                                    <input class="field GB" v-model="JobInfo.from" placeholder="Per Hour" required>
                                </v-row>
                            </v-col>
                            <!-- <v-icon class="mdi mdi-domain" height="50px"></v-icon> -->
                        </v-row>


                        <v-row align="center" class="sal">
                            <input class="field1" v-model="JobInfo.J_Loc"
                                placeholder="Equivalent full-time salary per month" required :disabled="isChecked1">
                            <v-icon class="mdi mdi-map-marker-outline fend" height="50px"></v-icon>
                        </v-row>
                        <br><br>
                        <v-row justify="left">
                            <h4 style="color: #D3D3D3;">Additional Form of Compensation Offered?</h4>
                        </v-row>
                        <br>

                        <v-radio-group v-model="selectedOption">
                            <v-row v-for="option in options" :key="option.value">
                                <v-col cols="12">
                                    <v-radio :label="option.label" :value="option.value" :class="radioClass(option.value)"
                                        class>
                                        <v-icon class="iconCB" style="margin-left: 40px;">{{ option.icon }}</v-icon>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>
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
            selectedOption: null,
            options: [
                { label: 'Tips', value: 1, icon: 'mdi-currency-eur' },
                { label: 'Commission', value: 2, icon: 'mdi-hand-coin-outline' },
                { label: 'Bonuses', value: 3, icon: 'mdi-cash' },
                { label: 'Store Discounts', value: 4, icon: 'mdi-bullhorn-outline' },
                { label: 'Others', value: 5, icon: 'mdi-plus-circle-outline' },
            ],
            // selectedOptions: [],
        };
    },
    methods: {
        radioClass(value) {
            return {
                'radio-with-border': true,
                'radio-checked': this.selectedOption === value,
            };
        },
        RedirectToHome() {
            this.$router.push({ name: 'Home' });
        }
    },
};
</script>
<style>
.GB {
    color: #1A4F6E;
}

.p0 {
    padding-left: 0px;
    padding-right: 0px;
}

.m0 {
    margin-left: 0px;
    margin-right: 0px;
}

.fend {
    align-items: flex-end
}

.chek {
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
}

.pay {
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #B3B4BB;
    height: 90px;
    margin: 10px;
    padding: 10px;
}

.sal {
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #B3B4BB;
    height: 50px;

}



.radio-with-border {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 10px;
}

.radio-checked {
    border-color: gray;
    background-color: gray;
    color: whitesmoke;

}

.v-radio .v-icon {
    z-index: 200;
    margin-left: 1000px;
    /* display: none; */
}

.iconCB {
    display: block;
}
</style>