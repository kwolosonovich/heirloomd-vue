<template>
  <v-container>
    <v-card class="mainCard mx-auto mt-10">
      <v-list>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white1.png" />
          <v-list-item-title>
            <v-file-input
              class="mx-10"
              v-model="files"
              label="Add a Recipe"
              multiple
              prepend-icon="mdi-paperclip"
              >
              <template v-slot:selection="{ text }">
                <v-chip
                  small
                  label
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white2.png" />
          <v-list-item-title>
            <v-btn
              color="white"
              class="text--secondary ml-12"
            >Style
            </v-btn>
            </v-file-input>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white3.png" />
          <v-list-item-title>
            <v-btn
              color="white"
              class="text--secondary ml-12"
            >Add to Gallery
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "Upload",
  components: {
  }
}
</script>
