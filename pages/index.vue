<template>
  <span>
    <v-row
      justify="center" 
      no-gutters
      class="d-flex flex-wrap-reverse mx-auto"
    >
      <v-col cols="12" lg="4" md="3" class="text-center mx-auto my-auto">
        <div class="text-h3 font-weight-thin">Create.
          <v-spacer class="mb-3"/> Share.
          <v-spacer class="mb-3"/> Enjoy.
        </div>
      </v-col>
      <v-col cols="12" lg="8" md="9" class="text-center">
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
