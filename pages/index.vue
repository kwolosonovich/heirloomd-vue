<template>
  <span>
    <v-row
      justify="center"
      no-gutters
      class="d-flex flex-wrap-reverse mx-auto"
    >
      <v-col cols="12" lg="6" sm="6" 
        class="text-center mx-auto my-auto" 
        style="z-index: 1"
      >
        <div class="text-h3 font-weight-thin ma-10">Search.
          <v-spacer class="mb-3"/> Enjoy.
          <v-spacer class="mb-3"/> Share.
        </div>
      </v-col>
      <v-col cols="12" lg="6" sm="6" class="text-center">
        <logo />
      </v-col>
    </v-row>
    <Inspire />
    <CreateIntro />
  </span>
</template>

<script>

import Logo from "@/components/videos-images/logo"
import Inspire from '@/components/inspire.vue'
import CreateIntro from '@/components/CreateIntro.vue'

export default {
  name: 'welcome',
  props: {
  },
  components: {
    Logo,
    Inspire,
    CreateIntro
  }
}
</script>
