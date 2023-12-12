<!-- 8 rows  -->
<template>
    <v-container style="background: var(--BG, #FAFAFD);">
        <v-row>
            <v-col cols="6">
                <h2>Experience</h2>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-icon class="mdi mdi-plus-circle-outline"></v-icon>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Job Name</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="JobName" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">From</v-row>
            </v-col>

            <v-col cols="9">
                <v-row>
                    <v-col cols="5"><v-text-field class="chmap" v-model="Date1" outlined></v-text-field></v-col>
                    <v-col cols="2" class="tGr">To</v-col>
                    <v-col cols="5"><v-text-field class="chmap" v-model="Date2" outlined></v-text-field></v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Enterprise</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="Entereprise" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Location</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="Location" outlined></v-text-field>
            </v-col>
        </v-row>



        <!-- </v-row> -->
        <v-row>
            <v-col cols="6">
                <h2>Education</h2>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-icon class="mdi mdi-plus-circle-outline"></v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Degree</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="JobName" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">From</v-row>
            </v-col>

            <v-col cols="9">
                <v-row>
                    <v-col cols="5"><v-text-field class="chmap" v-model="Date1" outlined></v-text-field></v-col>
                    <v-col cols="2" class="tGr">To</v-col>
                    <v-col cols="5"><v-text-field class="chmap" v-model="Date2" outlined></v-text-field></v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">University</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="Entereprise" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Location</v-row>
            </v-col>

            <v-col cols="9">
                <v-text-field class="chmap" v-model="Locationn"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h2>Your job Preferences</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Job type</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedType" :items="Type" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Sector </v-row>
                <v-row >
                    <v-btn-toggle
                    v-model="toggleSector"
                    multiple
                    class="flex-wrap"
                    >

                    <v-btn v-for="(value, index) in Sector" selected-class="selected" class="mb-2 ml-2" variant="outlined" :key="index" rounded="xl" :value="value" >{{ value }}
                    </v-btn>
                    
                </v-btn-toggle>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Availability </v-row>
                <v-row class="d-flex ">
                    <v-btn-toggle
                    v-model="toggleAv"
                    multiple
                    class="flex-wrap"
                    >
                    <v-btn v-for="(value, indexA) in Availability" selected-class="selected" class="mb-2 ml-2" variant="outlined" :key="index" :value="value" rounded="xl">{{ value }}
                    </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Hours</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedHours" :items="Hours" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Day</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedDay" :items="Day" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Week</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedWeek" :items="Week" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Shift</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedShift" :items="Shift" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Extra</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedExtra" :items="Extra" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Location </v-row>
                <v-row class="d-flex ">
                    <v-btn-toggle
                    v-model="toggleLocation"
                    multiple
                    class="flex-wrap"
                    >
                    <v-btn v-for="(value, index) in Location" selected-class="selected" class="mb-2 ml-2" variant="outlined" :key="index" :value="value" rounded="xl">{{ value }}
                    </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Availability for Interview: </v-row>
                <v-row class="d-flex ">
                    <v-btn-toggle
                    v-model="toggleIntAv"
                    multiple
                    class="flex-wrap"
                    >
                    <v-btn v-for="(value, index) in Interview" selected-class="selected" class="mb-2 ml-2" variant="outlined" :key="index" :value="value" rounded="xl">{{ value }}
                    </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-col>
        </v-row>
        <v-row  class="d-flex align-center justify-center">
            <v-col cols="12">
                <v-row class="d-flex align-center justify-center">
                    <h2>LinkedIn <span class="gris">(Optional)</span></h2>
                </v-row >
                <v-row class="d-flex align-center justify-center">
                    <v-btn @click="" class="vide"> LinkedIn profile link </v-btn>
                </v-row>
                <v-row class="d-flex align-center justify-center">
                    <v-btn @click="redirectToProfil" class="pdf"> Save </v-btn>
                </v-row>

                        
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import UserDataService from '../../services/UserDataService'

export default {
    data() {
        return {
            selectedHours: null,
            selectedWeek: null,
            selectedDay: null,
            selectedShift: null,
            selectedExtra: null,
            selectedType: null,
            selectedAvailability: [this.selectedHours, this.selectedWeek, this.selectedDay, this.selectedShift, this.selectedExtra],
            Type: ['Full Time', 'Part Time', 'Contract', 'Internship', 'Freelance'],
            Sector: ['Administrative', 'Cuture', 'Customer Service', 'Management', 'Marketing', 'Other'],
            Availability: [],
            Hours: ['Flexible', 'Full-time', 'Part-time'],
            Week: ['Flexible', 'M-T-W-T-F', 'Saturday', 'Sunday', 'Holidays'],
            Day: ['Flexible', 'Early morning', 'Late morning', 'Early evening', 'Late evening', 'Night'],
            Shift: ['Flexible', 'Long break', 'Small break', 'Continuous'],
            Extra: ['Paid overtime', 'On call', 'Working time reduction (RTT)'],
            Location: ['Lyon 2', 'Villeurbanne', 'Bron', 'Lyon 7', 'Lyon 3', 'Lyon 4', 'Lyon 5', 'Other'],
            Interview: ['Evenings', 'Weekdays', 'Fridays', 'M-T-W-T', 'Weekends'],
            toggleSector: [],
            toggleAv: [],
            toggleLocation: [],
            toggleIntAv: []
        };
    },
    mounted() {
        UserDataService.get().then(response => {
            console.log(response.data)
            this.selectedType = response.data.jobType
            this.toggleSector = response.data.jobSector
            this.Availability = [response.data.Hours, response.data.Day, response.data.Week, response.data.Shift, response.data.Extra]
            this.toggleAv = [response.data.Hours, response.data.Day, response.data.Week, response.data.Shift, response.data.Extra]
            this.toggleLocation = response.data.jobLocation,
            this.toggleIntAv = response.data.interviewAv
        })
    },
    methods: {
        redirectToProfil() {
        //let data = {"jobSector" :this.toggleSector.toString()}
        if(this.selectedType!=null) UserDataService.update({
            "jobType": this.selectedType
        })
        if(this.selectedHours!=null) UserDataService.update({
            "Hours": this.selectedHours
        })
        if(this.selectedDay!=null) UserDataService.update({
            "Day": this.selectedDay
        })
        if(this.selectedWeek!=null) UserDataService.update({
            "Week": this.selectedWeek
        })
        if(this.selectedShift!=null) UserDataService.update({
            "Shift": this.selectedShift
        })
        if(this.selectedExtra!=null) UserDataService.update({
            "Extra": this.selectedExtra
        })
        .then(response => {
        console.log(response.data);
        }).catch();
        console.log(this.toggleLocation)
        UserDataService.update({
        "jobLocation": this.toggleLocation,
        "interviewAv": this.toggleIntAv,
        })
        .then(response => {
        console.log(response.data);
        }).catch();
        this.$router.push({ name: 'Profil' });
        },
    }
}
</script>
<style>
.tGr {
    color: #B3BFC5;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.16px;
}

.chmap {
    display: flex;
    height: 40px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    justify-content: center;
    flex: 1 0 0;
    border-radius: 15px;
    border-style: none;
}

.padT20 {
     padding-top: 20px; 
}

.khdra {
    color: white;
    text-align: center;
    border-radius: 15px;
    background: rgba(163, 198, 87, 0.77);
    width: 108px;
    /* height: 32px; */
    margin: 8px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
.selected {
    color: white;
    background: rgba(163, 198, 87, 0.77);
}
.pdf {
    margin-top: 10px;
    color: white;
    border-radius: 5px;
    background: #579BC0;
    display: flex;
    width: 184px;
    height: 46px;
    padding: 16px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}
</style>
