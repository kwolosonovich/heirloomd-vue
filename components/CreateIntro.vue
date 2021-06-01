<template>
  <v-container class='mt-15 secondary createContainer mx-auto'>
    <v-row class="d-flex align-conent-center my-8 mx-sm-6 mx-md-13">
      <v-card flat color="secondary" width="100%">
        <v-card-title class="lightGrey--text text-md-h2 text-sm-h3">
          Get Started
        </v-card-title>
        <v-card-text class="text-sm-h5 text-xs-h6 font-weight-light text-left lightGrey--text mt-2">
          Snap a picture of a hand-written recipe <br>
          Design and customize your recipe <br>
          Add to your recipe card gallery, download, and share! 
        </v-card-text>
        <v-card-actions class="mt-6">
          <!-- <v-btn outlined color="lightGrey" class="btnPair">
            Examples
          </v-btn> -->
          <v-btn block color="lightGrey" to="/create">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import CameraVideo from '@/components/videos-images/camera'

export default {
  name: "Create",
  components: {
    CameraVideo
  }
}
</script>
