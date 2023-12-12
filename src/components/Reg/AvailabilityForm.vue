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
                                <!-- First Row: Label -->
                                <v-row>
                                    <v-col cols="2">
                                        <v-label>Hours :</v-label>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-select v-model="selectedItem" :items="items" label="Flexible" outlined></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <v-label>Day :</v-label>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-select v-model="selectedItem" :items="items" label="Flexible" outlined></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <v-label>Week :</v-label>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-select v-model="selectedItem" :items="items" label="Flexible" outlined></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <v-label>Shift :</v-label>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-select v-model="selectedItem" :items="items" label="Flexible" outlined></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <v-label>Extra :</v-label>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-select v-model="selectedItem" :items="items" label="Flexible" outlined></v-select>
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
            selectedItem: null,
      items: [
        { text: 'Item 1', icon: 'mdi-check' },
        { text: 'Item 2', icon: 'mdi-star' },
        { text: 'Item 3', icon: 'mdi-heart' },
      ],
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
            this.$emit('Avaibalility-info-submitted', /*this.AvailabilityInfo*/{  "Hours": "8",
                                                        "Day": "Monday",
                                                        "Week": "1",
                                                        "Shift": "Morning",
                                                        "Extra": "None"});
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
    margin-left: 40px;
    /* Adjust the margin as needed */
    display: none;
}

.icon {
    display: block;
}
</style>