<template>
  <v-row class="ma-10">
    <v-col class="text-center mx-auto">
      <div class="text-h3 font-weight-thin mx-auto">
        Get Creative
      </div>
    </v-col>
    <Create />
  </v-row>
</template>

<script>
import Create from '@/components/create/Create'

export default {
  name: 'create',
  props: {
  },
  components: {
    Create
  }
}
</script>