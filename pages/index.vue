<template>
  <div>
    <v-row 
        justify="center" 
        align="center" 
        no-gutters
        class="d-flex flex-wrap-reverse"
      >
      <v-col cols="12" lg="4" sm="6" class="text-center">
        <div class="text-h2">Create <v-spacer class="mb-3"/> Share  <v-spacer class="mb-3"/> Enjoy</div>
      </v-col>
      <v-col cols="12" lg="8" sm="6">
        <logo />
      </v-col>
    </v-row>
    <Inspire 
      :images='imageList'
    />
  </div>
</template>

<script>

import Logo from "@/components/logo"
import Inspire from '@/components/inspire.vue'

export default {
  name: 'HomePage',
  props: {
  },
  components: {
    Logo,
    Inspire
  }
}
</script>
