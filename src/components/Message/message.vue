<template class="cont">
    <v-container>
        <v-row>
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
                                    <v-btn @click="handleButton1Click(item)" class="bluebtn">Accept</v-btn>
                                    <v-btn @click="handleButton2Click(item)" class="bluebtn">Modify</v-btn>
                                </v-row>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            cardItems: [
                {
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
                },
            ],
        };
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
  