<template>
    <v-container>

        <!-- Formulaire d'inscription -->
        <v-row class="d-flex align-center justify-center">
            <v-col cols="12" sm="8">
                <!-- <v-card> -->

                    <v-card-text>

                        <form @submit.prevent="SubmitJobTypeInfo">
                            <h2 style="color: #D3D3D3;">What type of job you're looking for ?</h2>
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
            selectedOption: null,
            options: [
                { label: 'Full-Time',  value: 1 , icon: 'mdi-clock' },
                { label: 'Part-Time',  value: 2 , icon: 'mdi-calendar ' },
                { label: 'Contract',   value: 3 , icon: 'mdi-file-document' },
                { label: 'Internship', value: 4 , icon: 'mdi-school' },
                { label: 'Freelance',  value: 5 , icon: 'mdi-briefcase-account' },
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
        SubmitJobTypeInfo() {
            // You can perform validation here if needed
            // Emit an event or pass the contactInfo data to the parent component
            this.$emit('JobType-info-submitted', this.options.find(option => option.value === this.selectedOption).label);
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