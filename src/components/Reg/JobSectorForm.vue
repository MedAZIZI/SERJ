<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <v-card> -->

                    <v-card-text>

                        <form @submit.prevent="SubmitJobSectorInfo">
                            <h2 style="color: #D3D3D3;">What job sector do you prefer ?</h2>
                            <br>

                            <br>
                            <v-radio-group v-model="selectedOption">
                                <v-row v-for="option in options" :key="option.value">
                                    <v-col cols="12">
                                        <v-radio :label="option.label" :value="option.value"
                                            :class="radioClass(option.value)">
                                            <v-icon class="icon" >{{ option.icon }}</v-icon>
                                        </v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
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
            selectedOption: null,
            options: [
                { label: 'Culture',         value: 1 , icon: 'mdi-transit-detour' },
                { label: 'Customer Service',value: 2 , icon: 'mdi-face-agent ' },
                { label: 'Administrative',  value: 3 , icon: 'mdi-cog' },
                { label: 'Marketing',       value: 4 , icon: 'mdi-bullhorn-variant' },
                { label: 'Management',      value: 5 , icon: 'mdi-office-building-cog-outline' },
                { label: 'Others',          value: 6 , icon: 'mdi-plus-circle-outline' },
            ],  //https://pictogrammers.com/library/mdi/
        };
    },
    methods: {
        radioClass(value) {
            return {
                'radio-with-border': true,
                'radio-checked': this.selectedOption === value,
            };
        },
        submitJobSectorInfo() {
            // You can perform validation here if needed
            // Emit an event or pass the contactInfo data to the parent component
            this.$emit('JobSector-info-submitted', this.JobSectorInfo);
        },
    },
};
</script>
<style>
.radio-with-border {
    border: 1px solid #ccc;
    /* Ajoutez la bordure autour du bouton radio */
    border-radius: 5px;
    /* Vous pouvez ajuster le rayon de la bordure */
    padding: 8px;
    /* Ajustez la marge intérieure pour l'espacement */
    margin-bottom: 10px;
    /* Espacez les boutons radio les uns des autres */
}

.radio-checked {
    border-color: gray;
    background-color: gray;
    color: whitesmoke;

}
.v-icon {
  margin-left: 40px; /* Adjust the margin as needed */
  display: none;
}
.icon{
    display: block;
}

</style>