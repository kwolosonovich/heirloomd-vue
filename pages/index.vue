<template>
  <div>
    <v-row 
        justify="center" 
        align="center" 
        no-gutters
        class="d-flex flex-wrap-reverse"
      >
      <v-col cols="12" lg="4" sm="6" class="text-center">
        <div class="text-h2">Create 
          <v-spacer class="mb-3"/> Share
          <v-spacer class="mb-3"/> Enjoy
        </div>
      </v-col>
      <v-col cols="12" lg="8" sm="6" class="text-center">
        <logo />
      </v-col>
    </v-row>
    <Inspire />
    <Create />
  </div>
</template>

<script>

import Logo from "@/components/videos-images/logo"
import Inspire from '@/components/Inspire.vue'
import Create from '@/components/Create.vue'

export default {
  name: 'HomePage',
  props: {
  },
  components: {
    Logo,
    Inspire,
    Create
  }
}
</script>
