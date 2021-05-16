<template>
  <v-row 
      justify="center" 
      align="center" 
      no-gutters
      class="d-flex"
    >
    <v-col col="6">
      <div class="text-h2">Create <br> Share <br> Enjoy</div>
    </v-col>
    <v-col col="6">
      <logo />
    </v-col>
  </v-row>
</template>

<script>

import logo from "@/components/logo"

export default {
  components: {
    logo
  }
}
</script>
