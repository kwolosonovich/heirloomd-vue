<template>
  <v-container class='mt-10 secondary createContainer'>
    <v-row class="d-flex justify-space-between">
      <v-col cols="12" lg="4" sm="6">
        <v-file-input
          class="ma-12t"
          v-model="files"
          label="Add Photo"
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
        <btn block lightGrey>
          Create
        </btn>
      </v-col>
      <v-col cols="12" lg="8" sm="6">
        <div class="text-h4 text-center ma-12">
          Upload a picture to <v-spacer /> create a recipe card
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Create",
}
</script>
