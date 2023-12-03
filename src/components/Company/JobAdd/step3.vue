<template>
    <v-container>
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <form @submit.prevent="submitBasicInfo"> -->
                <br>
                <v-row justify="center">
                    <h4 style="color: #D3D3D3;">Are Any of the Following Benefits Offered?</h4>
                </v-row>
                <br>
                <v-card-text>
                    <v-checkbox-group v-model="selectedOption">
                        <v-row v-for="option in options" :key="option.value">
                            <v-col cols="12">
                                <v-checkbox :label="option.label" :value="option.value"
                                    :class="this.selectTab[option.value]" @click="handleCheckboxClick(option.value)">
                                    <v-icon class="iconSB" style="margin-left: 40px;">{{ option.icon }}</v-icon>
                                </v-checkbox>
                            </v-col>
                        </v-row>
                    </v-checkbox-group>
                </v-card-text>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            selectedOption: [],
            selectTab: ['custom-class-1', 'custom-class-1',
                'custom-class-1', 'custom-class-1',
                'custom-class-1', 'custom-class-1',
                'custom-class-1', 'custom-class-1',
                'custom-class-1', 'custom-class-1'
            ],
            options: [
                { label: "Health Insurance", value: 1, icon: "mdi-bottle-tonic-plus-outline" },
                { label: "Dental Insurance", value: 2, icon: "mdi-tooth" },
                { label: "Vision Insurance", value: 3, icon: "mdi-eye-check-outline" },
                { label: "Retirement Plan", value: 4, icon: "mdi-bullhorn-outline" },
                { label: "Signing Bonus", value: 5, icon: "mdi-cash-multiple" },
                { label: "Paid Time Off", value: 6, icon: "mdi-calendar-clock" },
                { label: "Parental Leave", value: 7, icon: "mdi-account-group-outline" },
                { label: "Relocation Assistance", value: 8, icon: "mdi-clipboard-account-outline" },
                { label: "Work From Home", value: 9, icon: "mdi-home-clock-outline" },

            ],
        };
    },
    methods: {

        handleCheckboxClick(value) {
            if (this.selectTab[value] == "custom-class-1") {
                this.selectTab[value] = "custom-class-2";
            } else {
                this.selectTab[value] = "custom-class-1";
            }
        },

    },
};
</script>

<style >
.custom-class-1 {
    border: 1px solid #ccc;
    border-radius: 15px;
    height: 50px;
}

.custom-class-2 {
    border: 1px solid;
    border-radius: 15px;
    height: 50px;
    border-color: #A3C6574D;
    background-color: #A3C6574D;
    color: black;
}

.v-checkbox .v-icon{
    z-index: 200; 
    margin-left: 1000px;
}

.iconSB {
    display: block;
}
</style>
