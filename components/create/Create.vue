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
        </v-list-item>
        <v-list-item class="ma-10">
          <v-img style="width: 15%; max-width: 100px" src="/white2.png" />
          <v-list-item-title>
            <v-btn outlined class="white text-h6 ml-6 font-weight-thin mx-auto">
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
import spoonacularApi from '../../api/spoonacularApi'

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
    selectedIntolerances: null
  }),
  components: {
    searchOptions
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
