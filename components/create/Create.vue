<template>
  <v-container>
    <v-card class="mainCard mx-auto mt-10">
      <v-list>
        <v-list-item class="mx-10 mt-10">
          <v-img style="width: 15%; max-width: 100px" src="/white1.png" />
          <v-list-item-title>
            <div class="text-h5 ml-6 font-weight-thin mx-auto">
              Search Recipies
            </div>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="mx-15">
          <v-card flat>
            <v-card-text class="px-5">
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Name of Dish" class="mt-0 pt-0"></v-text-field>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-text-field label="Includes Ingredients" class="mt-0 pt-0"></v-text-field>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-text-field label="Excludes Ingredients" class="mt-0 pt-0"></v-text-field>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-select :items="getCuisines()" label="Cuisine" class="mt-0 pt-0"></v-select>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-select :items="getTypes()" label="Meal Type" class="mt-0 pt-0"></v-select>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-select :items="getDiets()" label="Diet" class="mt-0 pt-0"></v-select>
                </v-col>
                <v-col class="12" sm="6" lg="6">
                  <v-select :items="getIntolerances()" label="Intolerances" class="mt-0 pt-0"></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <div class="mx-4">
              <v-btn outlined color="primary" class="btnPair">
                Reset
              </v-btn>
              <v-btn color="primary" class="btnPair">
                Search
              </v-btn>
            </div>
          </v-card>
        </v-list-item>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white2.png" />
          <v-list-item-title>
            <v-btn class="white text-h6 ml-6 font-weight-thin mx-auto">
              View Search Results
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white3.png" />
          <v-list-item-title>
            <v-btn class="white text-h6 ml-6 font-weight-thin mx-auto">
              Add to Gallery
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>

import searchOptions from './searchOptions'

export default {
  name: "Upload",
  data: {
    cuisine: searchOptions.cuisine,
    type: searchOptions.type,
    diet: searchOptions.diet,
    intolerance: searchOptions.intolerance,
    rules: [v => v.length <= 25 || "Max 25 characters"]
  },
  components: {
  },
  methods: {
    getCuisines () {
      return searchOptions.cuisine
    },
    getTypes () {
      return searchOptions.type
    },
    getDiets () {
      return searchOptions.diet
    },
    getIntolerances () {
      return searchOptions.intolerance
    }

  }
}
</script>
