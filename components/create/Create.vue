<template>
  <v-container>
    <v-card flat class="mx-auto mt-10 lightGrey">
      <v-card-title>
        <v-img style="width: 15%; max-width: 100px" src="/1.png" />
        <div class="text-h5 ml-6 font-weight-thin mx-auto">
          Search Recipies
        </div>
      </v-card-title>
    </v-card>
    <v-card class="mainCard mx-auto pa-10">
      <v-form ref="form">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Name of Dish" class="mt-0 pt-0"></v-text-field>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-text-field v-model="includedIngredients" label="Includes Ingredients" class="mt-0 pt-0"></v-text-field>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-text-field v-model="excludedIngredients" label="Excludes Ingredients" class="mt-0 pt-0"></v-text-field>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-select v-model="selectedCuisine" :items="cuisine" label="Cuisine" class="mt-0 pt-0"></v-select>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-select v-model="selectedType" :items="type" label="Meal Type" class="mt-0 pt-0"></v-select>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-select v-model="selectedDiet" :items="diet" label="Diet" class="mt-0 pt-0"></v-select>
          </v-col>
          <v-col class="12" sm="6" lg="6">
            <v-select v-model="selectedIntolerances" :items="intolerance" label="Intolerances" class="mt-0 pt-0"></v-select>
          </v-col>
        </v-row>
        <div>
            <v-btn outlined color="primary" class="btnPair" @click="reset">
            Reset
          </v-btn>
          <v-btn color="primary" class="btnPair" @click="searchRecipes">
            Search
          </v-btn>
        </div>
      </v-form>
    </v-card>
    <v-card flat class="mx-auto mt-10 lightGrey">
      <v-card-title>
        <v-img style="width: 15%; max-width: 100px" src="/2.png" />
          <div class="text-h5 ml-6 font-weight-thin mx-auto">
            Search Results
          </div>
        <SearchResults :v-bind="searchResults" />
      </v-card-title>
    </v-card>
    <v-card flat class="mx-auto mt-10 lightGrey">
      <v-card-title>
        <v-img style="width: 15%; max-width: 100px" src="/3.png" />
        <v-btn class="white text-h6 ml-6 font-weight-thin mx-auto">
          Add to Gallery
        </v-btn>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>

import searchOptions from './searchOptions'
import spoonacularApi from '../../api/spoonacularApi'
import SearchResults from './SearchResults.vue'

export default {
  // name: "Create",
  data: () => ({
    cuisine: searchOptions.cuisine,
    type: searchOptions.type,
    diet: searchOptions.diet,
    intolerance: searchOptions.intolerance,
    includedIngredients: '',
    excludedIngredients: '',
    selectedCuisine: null,
    selectedType: null,
    selectedDiet: null,
    selectedIntolerances: null,
    searchResults: 'search results'
  }),
  components: {
    searchOptions,
    SearchResults
  },
  methods: {
    async searchRecipes () {
      let params = {}
      if (this.includedIngredients !== '') {params.includeIngredients = this.includedIngredients}
      if (this.excludedIngredients !== '') {params.excludeIngredients = this.excludedIngredients}
      if (this.selectedCuisine) {params.cuisine = this.selectedCuisine}
      if (this.selectedType) {params.type = this.selectedType}
      if (this.selectedDiet) {params.diet = this.selectedDiet}
      if (this.selectedIntolerances) {params.intolerance = this.selectedIntolerances}

      await spoonacularApi.getRecipes(params)
        .then(response => {
          console.log(response)
          // return response
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
