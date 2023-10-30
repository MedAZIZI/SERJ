<!--<template>
  <Register />
</template>

<script lang="ts" setup>
  import Register from '@/components/Reg/Register.vue'
</script>
-->

<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8">
        <registration-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationForm from '@/components/Reg/RegistrationForm.vue'

export default {
  components: {
    RegistrationForm,
  },
}
</script>
