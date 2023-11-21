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
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Sector </v-row>
                <v-row class="d-flex ">
                    <div v-for="(value, index) in Sector" :key="index" class="khdra">{{ value }}</div>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Availability </v-row>
                <v-row class="d-flex ">
                    <div v-for="(value, index) in Availability" :key="index" class="khdra">{{ value }}</div>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Hours</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Day</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Week</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Shift</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-row class="tGr padT20">Extra</v-row>
            </v-col>
            <v-col cols="9">
                <v-select v-model="selectedItem" :items="items" label="Select an Item" outlined></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Job Location </v-row>
                <v-row class="d-flex ">
                    <div v-for="(value, index) in Location" :key="index" class="khdra">{{ value }}</div>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row class="tGr padT20">Availability for Interview: </v-row>
                <v-row class="d-flex ">
                    <div v-for="(value, index) in Interview" :key="index" class="khdra">{{ value }}</div>
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

export default {
    data() {
        return {
            selectedItem: null,
            items: ['Full Time', 'Full Time', 'Full Time', 'Full Time', 'Full Time'],
            Sector: ['Administrative', 'Cuture', 'Customer Service'],
            Availability: ['Weekends', 'Weekends', 'M-T-W-T'],
            Location: ['Lyon 2', 'Villeurbanne', 'Bron', 'Lyon 7'],
            Interview: ['Evenings', 'Weekdays', 'Fridays', 'M-T-W-T', 'Weekends'],
        };
    },
    methods: {
        redirectToProfil() {
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
