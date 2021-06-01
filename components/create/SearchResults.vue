<template>
  <v-app id="inspire">
    <v-container fluid class="wordWrap text-wrap">
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar dark rounded color="accentPink" class="mb-2">
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <v-spacer />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer />
              <v-btn-toggle v-model="sortDesc" mandatory>
                <v-btn depressed color="accentPink" :value="false">
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn depressed color="accentPink" :value="true">
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col
              class="px-1 pb-1 pt-3"
              v-for="(item, index) in props.items"
              :key="item.title"
              :index="index"
              cols="12"
              sm="6"
              md="4"
              lg="4"
            >
              <v-card class="wordWrap">
                <v-card-text class="wordWrap text-h5" v-text="item.title" />
                  <!-- <v-checkbox
                    :v-model="favorite"
                    :key="item.title"
                    :index="index"
                    off-icon="mdi-star-plus-outline"
                    on-icon="mdi-star"
                    @change="addFavorite(item)"
                  ></v-checkbox> -->
                <v-card-text class="chipGroup">
                  <v-chip
                    outlined
                    class="recipeChip caption px-1"
                    v-if="item.veryPopular"
                    :key="item.veryPopular"
                    >Popular</v-chip
                  >
                  <v-chip
                    outlined
                    class="recipeChip caption px-1"
                    :key="item.healthScore"
                    :v-if="item.healthScore"
                    >Health Score: {{ item.healthScore }}</v-chip
                  >
                </v-card-text>
                <v-divider />
                <v-img contain v-bind:src="item.image" />
                <v-card-text class="chipGroup">
                  <v-chip class="recipeChip caption px-1"
                    >{{ item.readyInMinutes }} minutes</v-chip
                  >
                  <v-chip class="recipeChip caption px-1"
                    >Servings: {{ item.servings }}</v-chip
                  >
                </v-card-text>
                <v-divider />
                <v-card-subtitle class="mb-0 pb-0">
                  Directions:
                </v-card-subtitle>
                <v-card-text
                  class="my-1 pb-0"
                  v-for="step in item.analyzedInstructions[0].steps"
                  :key="step.step"
                  :v-if="step.step"
                >
                  {{ step.number }}. {{ step.step }}
                </v-card-text>
                <v-card-text class="caption">
                  Visit
                  <a :href="item.sourceUrl"> {{ item.sourceName }} </a>
                  for recipe details
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-slot:footer>
          <v-row class="mt-2" align="center" justify="center">
            <span class="grey--text caption ml-3">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer />
            <span class="mr-4 grey--text text-caption">
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              small
              fab
              color="primary"
              class="mx-1 mb-2"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              small
              fab
              color="primary"
              class="ml-1 mr-3 mb-2"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    itemsPerPageArray: [3, 9, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 3,
    sortBy: "title",
    keys: ["Title"],
    favorite: false,
    favoritesArr: {type: Array, value: []}
  }),
  props: {
    items: Array
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== "Title");
    },
    addfavorite() {
      console.log('favorite')
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    // addFavorite(item) {
    // console.log(this.favoritesArr.value.length)

    //   if (this.favoritesArr.value.length = 0) {
    //     this.favoritesArr.value.push(item)
    //   } else {
    //     for (item in this.favoritesArr) {
    //       let index = this.favoritesArr.indexOf(favoritesArr[item].title)
    //       console.log(index)
    //       // if (this.favoritesArr.indexOf(favoritesArr[item].title) !== -1) {
    //       //   this.favoritesArr.push(item)
    //       // } else {}
    //     }
    //   }
    //   console.log(this.favoritesArr)

      // this.favorite === true ? this.favoritesArr.push(item) : this.favoritesArr.indexOf(this.favoritesArr.find(id  => id === item.id)) = -1

      // if (this.favorite === true) {
      //   this.favoritesArr.push(item)
      //   console.log(this.favoritesArr)
      // } else {
      //   this.favoritesArr.filter(function(favoritesArr, item) {
      //     let index = favoritesArr.indexOf(item)
      //     console.log(index)
      //   })
      //         console.log(this.favoritesArr)

      //   this.favoritesArr.filter(function(item) {
      //   item.id = item.id
      //   console.log(item.id, item.index)
      //   console.log(this.favoritesArr.indexOf(item.id))
      //   // indexOf(item) = -1
      //   })
        // this.favoritesArr.indexOf(item) = -1
      // }
      
      // console.log(this.favoritesArr.length)
        // let findItem = this.favoritesArr.find(id  => id === item.id)
        // this.favoritesArr.indexOf(this.favoritesArr.find(id  => id === item.id)) = -1
      

      // let removeItem = (favoritesArr, item) => {
        // favoritesArr.indexOf(favoritesArr.find(id  => id === item.id)) = -1
        // this.favoritesArr.indexOf(remove) = -1
        // console.log(this.favoritesArr)
        // return favoritesArr
      // }
    // }
  }
};
</script>
