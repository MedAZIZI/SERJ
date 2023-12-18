<template class="cont">
    <v-container>
        <v-row v-if="cardItems.length > 0">
            <v-col v-for="(item, index) in cardItems" :key="index" cols="12" md="4">
                <v-card class="crd">
                    <v-row class="insideCard">
                        <v-col cols="3">
                            <v-img :src="item.imageUrl" height="100px"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <v-card-text>
                                <v-row class="mt-2">
                                    <div>{{ item.text }}</div>

                                </v-row>
                                <br><br>
                                <v-row class="justify-end">
                                    <v-btn @click="handleButton1Click(item)" class="bluebtn">View</v-btn>
                                    <v-btn @click="handleButton2Click(item)" class="bluebtn">Discard</v-btn>
                                </v-row>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <!-- Si cardItems est vide, affichez un message -->
            <v-col cols="12" class="text-center">
                <p>Aucun message à afficher pour le moment. Vous pouvez postuler à des offres dans le catalogue.</p>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import UserDataService from '../../services/UserDataService'
export default {
    data() {
        return {
            cardItems: [
                /*{
                    imageUrl: "src/assets/bee.png",
                    text: "Good news!!Bee Restaurant scheduled an interview for the Dish Washer job on 09/10/2024 at 12 pm.",
                },
                {
                    imageUrl: "src/assets/bee.png",
                    text: "Your online interview with Mr. xx will be via: www.googlemeetblabla.com/hdjee. Don’t forget to check our interview advices & Good luck!",
                },
                {
                    imageUrl: "src/assets/bee.png",
                    text: "Hello Lea!! We would like happily to inform you that you are accepted in Dish Washer job! Please sign the following contract here",
                },*/
            ],
        };
    },
    mounted() {
        UserDataService.getConversation(localStorage.getItem('userId'),localStorage.getItem('userType')).then(response => {
            console.log(response.data)
            this.cardItems.push({imageUrl: "src/assets/bee.png", text: response.data[0].ConversationUE.content})

        })
        if(localStorage.getItem('userType')=='entreprise') {
            this.cardItems=[{imageUrl: "src/assets/bee.png",
                    text: "You received an application for your Event Planner job."}]
        }
  },
    methods: {
        handleButton1Click(item) {
            console.log('Button 1 clicked for:', item);
        },
        handleButton2Click(item) {
            console.log('Button 2 clicked for:', item);
        },
    },
};
</script>
  
<style scoped>
.bluebtn {
    background: #A3C8D3;
    border-radius: 25px;
    margin-left:5px;
}

.v-container {
    height: 100%;
    background: #A3C8D3;
}

.crd {
    border-radius: 25px;
    border-bottom-left-radius: 0px;
}

.insideCard {
    padding: 15px
}
</style>
  