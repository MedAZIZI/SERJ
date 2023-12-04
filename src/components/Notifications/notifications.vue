<template>
  <v-container>
    <h3>New activity</h3>
    <v-row>
      <v-col v-for="(item, index) in Activity" :key="index" cols="12" md="4">
        <v-card class="CRD">
          <v-row class="insideCard">
            <v-col cols="3">
              <v-img :src="item.imageUrl" height="100px"></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-text>
                <v-row class="mt-2">
                  <div><span class="gr">{{ item.emp }}</span> {{ item.text }}</div>

                </v-row>
                <br><br>

              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <h3>Applications</h3>
    <v-row>
      <v-col v-for="(item, index) in Applications" :key="index" cols="12" md="4">
        <v-card class="CRD">
          <v-row class="insideCard">
            <v-col cols="3">
              <v-img :src="item.imageUrl" height="100px"></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-text>
                <v-row class="mt-2">
                  <div><span class="gr">{{ item.emp }}</span> {{ item.text }}</div>

                </v-row>
                <br><br>

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
      Activity: [
        {
          imageUrl: "src/assets/mc.png",
          emp: "macdonald",
          text: "want to interview you!",
        },
        {
          imageUrl: "src/assets/mc.png",
          emp: "macdonald",
          text: "want to interview you!",
        },
      ],
      Applications: [
        {
          imageUrl: "src/assets/book.png",
          emp: "Booking.com",
          text: " reviewed your application.\n All the best!",
        },
        {
          imageUrl: "src/assets/book.png",
          emp: "Booking.com",
          text: " reviewed your application.\n All the best!",
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


.v-container {
  height: 100%;
}

.gr {
  color: var(--Black, #0D0D26);
  font-weight: bold;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
}

.CRD {
  border:none;
  box-shadow:none;
  margin:0px;
}

.insideCard {
  padding: 15px
}</style>