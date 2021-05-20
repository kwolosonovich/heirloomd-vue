<template>
  <span>
    <v-row
      justify="center" 
      align="center" 
      no-gutters
      class="d-flex flex-wrap-reverse"
      style="max-height: 400px"
    >
      <v-col cols="12" lg="" sm="6" class="text-center">
        <div class="text-h3 font-weight-thin">Create.
          <v-spacer class="mb-3"/> Share.
          <v-spacer class="mb-3"/> Enjoy.
        </div>
      </v-col>
      <v-col cols="12" lg="" sm="6" class="text-center">
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
  name: 'HomePage',
  props: {
  },
  components: {
    Logo,
    Inspire,
    CreateIntro
  }
}
</script>
