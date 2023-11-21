<!-- 8 rows  -->
<template>
    <v-container style="background: var(--BG, #FAFAFD);">
        <v-row>
            <v-col cols="6">
                <!-- <v-btn icon> -->
                <v-icon class="mdi mdi-chevron-left" height="50px" @click="redirectToHome"></v-icon>
                <!-- </v-btn> -->
            </v-col>
            <v-col cols="6" class="text-right">
                <div class="edt f16" @click="redirectToEdit"> Edit</div>
            </v-col>
        </v-row>
        <br>
        <v-row style="margin-top:30px" class="d-flex align-center justify-center">
            <v-col cols="12" sm>
                <v-row class="d-flex align-center justify-center">
                    <v-avatar size="150">
                        <v-img class="prof" src="src/assets/flower.png"  alt="Image Description">
                        </v-img>
                    </v-avatar>
                </v-row>

                <v-row class="d-flex align-center justify-center" style="margin-top:30px">
                    <h1 class="ttre"> {{ name }} </h1>
                </v-row>

                <v-row class="d-flex align-center justify-center" style="margin-top:20px">
                    <h3 class="ssttre"> {{ title }} </h3>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="margin-top:50px">
            <v-col cols="4">
                <v-row class="d-flex align-center justify-center">
                    <h3 class="r9m"> {{ view }} </h3>
                </v-row><br><br>
                <v-row class="d-flex align-center justify-center">
                    <h3 class=""> Views </h3>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-row class="d-flex align-center justify-center">
                    <h3 class="r9m"> {{ view }} </h3>
                </v-row><br><br>
                <v-row class="d-flex align-center justify-center">
                    <h3 class=""> Reviewed </h3>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-row class="d-flex align-center justify-center">
                    <h3 class="r9m"> {{ view }} </h3>
                </v-row><br><br>
                <v-row class="d-flex align-center justify-center">
                    <h3 class=""> Matches </h3>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <h2>Experience</h2>
            </v-col>
            <v-col cols="6" class="text-right">
                <h2 class="see"> see all</h2>
            </v-col>
        </v-row>
        <v-row class="exp">
            <v-col cols="3" class="pad10">
                <v-row class="d-flex align-center justify-center">
                    <v-img class="prof" src="src/assets/bee.png" height="70px" alt="Image Description">
                    </v-img>
                </v-row>
            </v-col>
            <v-col cols="5" class="pad10">
                <v-row>
                    <h2 class="f16"> {{ var1 }}</h2>
                </v-row>
                <v-row>
                    <h2 class="see f12"> {{ var2 }}</h2>
                </v-row>
            </v-col>
            <v-col cols="4" class="text-right pad10">
                <v-row>
                    <h2 class="f16"> {{ var3 }}</h2>
                </v-row>
                <v-row>
                    <h2 class="see f12"> {{ var4 }}</h2>
                </v-row>
            </v-col>
        </v-row>
        <br><br>
        <v-row>
            <v-col cols="6">
                <h2>Education</h2>
            </v-col>
            <v-col cols="6" class="text-right">
                <h2 class="see"> see all</h2>
            </v-col>
        </v-row>
        <v-row class="exp">
            <v-col cols="3" class="pad10">
                <v-row class="d-flex align-center justify-center">
                    <v-img class="prof" src="src/assets/ull.png" height="70px" alt="Image Description">
                    </v-img>
                </v-row>
            </v-col>
            <v-col cols="5" class="pad10">
                <v-row>
                    <h2 class="f16"> {{ var1 }}</h2>
                </v-row>
                <v-row>
                    <h2 class="see f12"> {{ var2 }}</h2>
                </v-row>
            </v-col>
            <v-col cols="4" class="text-right pad10">
                <v-row>
                    <h2 class="f16"> {{ var3 }}</h2>
                </v-row>
                <v-row>
                    <h2 class="see f12"> {{ var4 }}</h2>
                </v-row>
            </v-col>
        </v-row>
        <br><br>
        <v-row>
            <v-col cols="6">
                <h2>Your job Preferences</h2>
            </v-col>
            <v-col cols="6" class="text-right">
                <h2 class="see">Edit options</h2>
            </v-col>
        </v-row>
        <v-row style="padding-left:20px">

            <v-col cols="12">
                <div v-for="(values, title) in job_Pref" :key="title">

                    <v-row>
                        <h3>{{ title }} :</h3>
                    </v-row>

                    <v-row>
                        <div v-for="(value, index) in values" :key="index" class="khdra">{{ value }} </div>
                    </v-row>
                    <br>
                </div>
            </v-col>

        </v-row>
        <v-row style="padding-left:20px">
            <v-col>
                <v-row>
                    <h2>Resume or CV</h2>
                </v-row>
                <v-row class="d-flex align-center justify-center">
                    <h3 class="ssttre f16 m20"> Upload your CV or Resume and use it when you apply for jobs </h3>
                </v-row>
                <v-row class="d-flex align-center justify-center">
                    <v-btn @click="" class="pdf"> Upload a PDF </v-btn>
                </v-row>
            </v-col>
        </v-row>
        <v-row >
            <v-col>
                <v-row style="margin: 10px;">
                    <h2>LinkedIn <span class="gris">(Optional)</span></h2>
                </v-row>
                <v-row class="d-flex align-center justify-center" style="margin: 10px;">
                        <v-icon class="mdi mdi-linkedin"></v-icon>
                        <v-btn @click="" class="vide"> LinkedIn profile link </v-btn>
                </v-row>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>

export default {
    data() {
        return {
            name: 'AZIZI Mohammed',
            title: 'Event Planer',
            view: 14,
            var1: 'Event Planner',
            var2: 'Bee Restaurant',
            var3: 'Lyon 9, FR',
            var4: 'Dec 20 - Feb 21',
            job_Pref: {
                Type: ['Full Time'],
                Sector: ['Administrative', 'Cuture', 'Customer Service'],
                Availability: ['Weekends', 'Weekends', 'M-T-W-T'],
                Location: ['Lyon 2', 'Villeurbanne', 'Bron', 'Lyon 7'],
                Interview: ['Evenings', 'Weekdays', 'Fridays', 'M-T-W-T', 'Weekends'],
            },
        };
    },
    methods: {
        redirectToEdit() {
            this.$router.push({ name: 'EditProfil' });
        },
        redirectToHome() {
            this.$router.push({ name: 'Home' });
        },
    }
}
</script>
<style>
.vide {
    background-color: white;
    border-radius: 10px;
    border: 1px solid #579BC0;
    margin-top: 10px;
    color: var(--grey-70, #AFB0B6);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.14px;
}

.gris {
    color: grey;
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

.m20 {
    margin-left: 20px;
    margin-right: 20px;
}

.ttre {
    color: var(--Black, #0D0D26);
    text-align: center;
    /* Semibold/20 px */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 24px */
    letter-spacing: -0.3px;
}

.ssttre {
    color: var(--grey-60, #95969D);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.12px;
}

.edt {
    color: var(--grey-70, #AFB0B6);
    text-align: right;
    font-family: Alice;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.r9m {
    color: #579BC0;
    text-align: center;
    font-family: Alice;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.see {
    color: var(--grey-70, #AFB0B6);
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.13px;
}

.f12 {
    font-size: 12px;
}

.f16 {
    font-size: 16px;
}

.exp {
    border-radius: 59px;
    background-color: white;
}

.pad10 {
    padding-top: 10px;
    padding-bottom: 10px;
}

.khdra {
    color: white;
    text-align: center;
    border-radius: 16px;
    background: rgba(163, 198, 87, 0.77);
    width: 108px;
    height: 32px;
    margin: 8px;
}</style>
