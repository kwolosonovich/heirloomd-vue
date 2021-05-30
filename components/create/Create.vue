<template>
  <v-container class="d-flex-block align-content-center">
    <v-card flat class="mx-auto mt-10 lightGrey">
      <v-card-title>
        <v-img style="width: 12%; max-width: 80px" src="/1.png" />
        <div class="text-h5 ml-6 font-weight-thin mx-auto">
          Search Recipies
        </div>
      </v-card-title>
    </v-card>
    <v-card class="searchFormCard">
      <v-form ref="form">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Name of Dish" class="mt-7 pt-0"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" lg="6">
            <v-text-field
              v-model="includedIngredients"
              label="Includes Ingredients"
              class="mt-0 pt-0"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" lg="6">
            <v-text-field
              v-model="excludedIngredients"
              label="Excludes Ingredients"
              class="mt-0 pt-0"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6" lg="6">
            <v-select
              v-model="selectedCuisine"
              :items="cuisine"
              label="Cuisine"
              class="mt-0 pt-0"
            ></v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" lg="6">
            <v-select
              v-model="selectedType"
              :items="type"
              label="Meal Type"
              class="mt-0 pt-0"
            ></v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" lg="6">
            <v-select
              v-model="selectedDiet"
              :items="diet"
              label="Diet"
              class="mt-0 pt-0"
            ></v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" lg="6">
            <v-select
              v-model="selectedIntolerances"
              :items="intolerance"
              label="Intolerances"
              class="mt-0 pt-0"
            ></v-select>
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
        <v-img style="width: 12%; max-width: 80px" src="/2.png" />
        <div class="text-h5 ml-6 font-weight-thin mx-auto">
          Search Results
        </div>
      </v-card-title>
    </v-card>
    <v-card class="searchResultsCard">
      <SearchResults
        class="searchResultsCard"
        v-bind:items="searchResultsArr"
        v-if="showSearchResults"
        key="search"
      />
    </v-card>
    <v-card flat class="mx-auto mt-10 lightGrey">
      <v-card-title>
        <v-img style="width: 12%; max-width: 80px" src="/3.png" />
        <v-btn class="white text-h6 ml-6 font-weight-thin mx-auto">
          Add to Gallery
        </v-btn>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import searchOptions from "./searchOptions";
import spoonacularApi from "../../api/spoonacularApi";
import SearchResults from "./SearchResults.vue";

export default {
  // name: "Create",
  data: () => ({
    cuisine: searchOptions.cuisine,
    type: searchOptions.type,
    diet: searchOptions.diet,
    intolerance: searchOptions.intolerance,
    includedIngredients: "",
    excludedIngredients: "",
    selectedCuisine: null,
    selectedType: null,
    selectedDiet: null,
    selectedIntolerances: null,
    searchResultsArr: null,
    showSearchResults: false,
    dev: false,
    devRes: [
      {
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: false,
        veryPopular: true,
        sustainable: false,
        weightWatcherSmartPoints: 4,
        gaps: "no",
        lowFodmap: false,
        aggregateLikes: 3689,
        spoonacularScore: 99,
        healthScore: 76,
        creditsText: "Full Belly Sisters",
        license: "CC BY-SA 3.0",
        sourceName: "Full Belly Sisters",
        pricePerServing: 112.39,
        id: 716426,
        title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        readyInMinutes: 30,
        servings: 8,
        sourceUrl:
          "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        imageType: "jpg",
        nutrition: {
          nutrients: [
            {
              name: "Calories",
              title: "Calories",
              amount: 191.51,
              unit: "kcal",
              percentOfDailyNeeds: 9.58
            },
            {
              name: "Fat",
              title: "Fat",
              amount: 6.36,
              unit: "g",
              percentOfDailyNeeds: 9.78
            }
          ],
          properties: [
            {
              name: "Glycemic Index",
              title: "Glycemic Index",
              amount: 45.69,
              unit: ""
            },
            {
              name: "Glycemic Load",
              title: "Glycemic Load",
              amount: 10.77,
              unit: ""
            }
          ],
          caloricBreakdown: {
            percentProtein: 13.63,
            percentFat: 28.46,
            percentCarbs: 57.91
          },
          weightPerServing: {
            amount: 220,
            unit: "g"
          }
        },
        summary:
          'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
        cuisines: ["Chinese", "Asian"],
        dishTypes: ["side dish"],
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        occasions: [],
        analyzedInstructions: [
          {
            name: "",
            steps: [
              {
                number: 1,
                step:
                  'Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."',
                ingredients: [
                  {
                    id: 10011135,
                    name: "cauliflower florets",
                    localizedName: "cauliflower florets",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 10111135,
                    name: "cauliflower rice",
                    localizedName: "cauliflower rice",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 11135,
                    name: "cauliflower",
                    localizedName: "cauliflower",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 20028,
                    name: "couscous",
                    localizedName: "couscous",
                    image: "couscous-cooked.jpg"
                  },
                  {
                    id: 20444,
                    name: "rice",
                    localizedName: "rice",
                    image: "uncooked-white-rice.png"
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: "food processor",
                    localizedName: "food processor",
                    image: "food-processor.png"
                  }
                ]
              },
              {
                number: 2,
                step:
                  "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                ingredients: [
                  {
                    id: 1001,
                    name: "butter",
                    localizedName: "butter",
                    image: "butter-sliced.jpg"
                  },
                  {
                    id: 4582,
                    name: "cooking oil",
                    localizedName: "cooking oil",
                    image: "vegetable-oil.jpg"
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: "frying pan",
                    localizedName: "frying pan",
                    image: "pan.png"
                  }
                ]
              }
            ]
          }
        ],
        spoonacularSourceUrl:
          "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
      },
      {
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 4,
        gaps: "no",
        lowFodmap: false,
        aggregateLikes: 3689,
        spoonacularScore: 99,
        healthScore: 20,
        creditsText: "Full Belly Sisters",
        license: "CC BY-SA 3.0",
        sourceName: "Full Belly Sisters",
        pricePerServing: 112.39,
        id: 716426,
        title: "Rice",
        readyInMinutes: 60,
        servings: 5,
        sourceUrl:
          "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        imageType: "jpg",
        nutrition: {
          nutrients: [
            {
              name: "Calories",
              title: "Calories",
              amount: 191.51,
              unit: "kcal",
              percentOfDailyNeeds: 9.58
            },
            {
              name: "Fat",
              title: "Fat",
              amount: 6.36,
              unit: "g",
              percentOfDailyNeeds: 9.78
            }
          ],
          properties: [
            {
              name: "Glycemic Index",
              title: "Glycemic Index",
              amount: 45.69,
              unit: ""
            },
            {
              name: "Glycemic Load",
              title: "Glycemic Load",
              amount: 10.77,
              unit: ""
            }
          ],
          caloricBreakdown: {
            percentProtein: 13.63,
            percentFat: 28.46,
            percentCarbs: 57.91
          },
          weightPerServing: {
            amount: 220,
            unit: "g"
          }
        },
        summary:
          'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
        cuisines: ["Chinese", "Asian"],
        dishTypes: ["side dish"],
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        occasions: [],
        analyzedInstructions: [
          {
            name: "",
            steps: [
              {
                number: 1,
                step:
                  'Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."',
                ingredients: [
                  {
                    id: 10011135,
                    name: "cauliflower florets",
                    localizedName: "cauliflower florets",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 10111135,
                    name: "cauliflower rice",
                    localizedName: "cauliflower rice",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 11135,
                    name: "cauliflower",
                    localizedName: "cauliflower",
                    image: "cauliflower.jpg"
                  },
                  {
                    id: 20028,
                    name: "couscous",
                    localizedName: "couscous",
                    image: "couscous-cooked.jpg"
                  },
                  {
                    id: 20444,
                    name: "rice",
                    localizedName: "rice",
                    image: "uncooked-white-rice.png"
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: "food processor",
                    localizedName: "food processor",
                    image: "food-processor.png"
                  }
                ]
              },
              {
                number: 2,
                step:
                  "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                ingredients: [
                  {
                    id: 1001,
                    name: "butter",
                    localizedName: "butter",
                    image: "butter-sliced.jpg"
                  },
                  {
                    id: 4582,
                    name: "cooking oil",
                    localizedName: "cooking oil",
                    image: "vegetable-oil.jpg"
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: "frying pan",
                    localizedName: "frying pan",
                    image: "pan.png"
                  }
                ]
              }
            ]
          }
        ],
        spoonacularSourceUrl:
          "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
      }
    ]
  }),
  components: {
    searchOptions,
    SearchResults
  },
  methods: {
    async searchRecipes() {
      let params = {};

      if (this.includedIngredients !== "") {
        params.includeIngredients = this.includedIngredients;
      }
      if (this.excludedIngredients !== "") {
        params.excludeIngredients = this.excludedIngredients;
      }
      if (this.selectedCuisine) {
        params.cuisine = this.selectedCuisine;
      }
      if (this.selectedType) {
        params.type = this.selectedType;
      }
      if (this.selectedDiet) {
        params.diet = this.selectedDiet;
      }
      if (this.selectedIntolerances) {
        params.intolerance = this.selectedIntolerances;
      }

      if (this.dev) {
        console.log(this.dev);
        console.log(this.searchResultsArr);
        console.log(this.devRes);

        this.searchResultsArr = this.devRes;
        this.showSearchResults = true;
        console.log(this.searchResultsArr);
        console.log(this.devRes);
      } else {
        await spoonacularApi
          .getRecipes(params)
          .then(response => {
            console.log(response.data.results);
            // pass results to search component and show component
            this.searchResultsArr = response.data.results;
            this.showSearchResults = true;
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
