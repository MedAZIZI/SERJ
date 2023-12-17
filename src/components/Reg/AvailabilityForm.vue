<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <v-card> -->

                    <v-card-text>

                        <!-- https://www.pngwing.com/en/free-png-zdovr/download -->

                        <form @submit.prevent="Save">
                            <h2 style="color: #D3D3D3;">What's your avaibalility for the job ?</h2>
                            <br>

                            <br>
                            <v-col>
                            <v-row>
                                <v-col cols="2">
                                    <v-label>Hours :</v-label>
                                </v-col>
                                <v-col cols="10">
                                    <v-select class="custom-select" hide-details="true" v-model="selectedHours" :items="Hours" label="Flexible" outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-label>Day :</v-label>
                                </v-col>
                                <v-col cols="10">
                                    <v-select class="custom-select" hide-details="true" v-model="selectedDays" :items="Days" label="Flexible" outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-label>Week :</v-label>
                                </v-col>
                                <v-col cols="10">
                                    <v-select class="custom-select" hide-details="true" v-model="selectedWeek" :items="Week" label="Flexible" outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-label>Shift :</v-label>
                                </v-col>
                                <v-col cols="10">
                                    <v-select class="custom-select" hide-details="true" v-model="selectedShift" :items="Shift" label="Flexible" outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2">
                                    <v-label>Extra :</v-label>
                                </v-col>
                                <v-col cols="10">
                                    <v-select class="custom-select" hide-details="true" v-model="selectedExtra" :items="Extra" label="Paid overtime"
                                    
                                        outlined></v-select>
                                </v-col>
                                
                            </v-row>
                        </v-col>
                            <v-container>
                                <v-row justify="center">
                                    <v-btn color="primary" type="submit">   >> Save  &lt;&lt;   </v-btn>
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
            selectedHours: 'Flexible',
            selectedDays: 'Flexible',
            selectedWeek: 'Flexible',
            selectedShift: 'Flexible',
            selectedExtra: 'Paid overtime',
            Hours: ['Flexible', 'Full time', 'Part time'],
            Days:  ['Flexible', 'Early morning', 'Late morning', 'Early evening', 'Late evening', 'Night'],
            Week:  ['Flexible', 'M-T-W-T-F', 'Saturday', 'Sunday', 'Holidays'],
            Shift: ['Flexible', 'Long break', 'Small break', 'Continuous'],
            Extra: ['Paid overtime', 'On call', 'Working time reduction (RTT)'],
    };
    },
    methods: {
        radioClass(value) {
            return {
                'radio-with-border': true,
                'radio-checked': this.selectedOption === value,
            };
        },
        Save() {
            // You can perform validation here if needed
            // Emit an event or pass the contactInfo data to the parent component
            this.$emit('Avaibalility-info-submitted', /*this.AvailabilityInfo*/{  "Hours": this.selectedHours,
                                                        "Day": this.selectedDays,
                                                        "Week": this.selectedWeek,
                                                        "Shift": this.selectedShift,
                                                        "Extra": this.selectedExtra});
        },
    },
};
</script>
<style scoped>
.v-select{
    padding: 0px;
}
.custom-select {
  border: 2px solid grey;
  border-radius: 8px;
  padding-bottom: 0cm;  
}
</style>