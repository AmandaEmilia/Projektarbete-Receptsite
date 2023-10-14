
<template>
  <span class="star" @click="rateRecipe(1)" v-bind:class="updateRating(1)"> ★ </span>
  <span class="star" @click="rateRecipe(2)" v-bind:class="updateRating(2)"> ★ </span>
  <span class="star" @click="rateRecipe(3)" v-bind:class="updateRating(3)"> ★ </span>
  <span class="star" @click="rateRecipe(4)" v-bind:class="updateRating(4)"> ★ </span>
  <span class="star" @click="rateRecipe(5)" v-bind:class="updateRating(5)"> ★ </span>

  <Alert v-if="successMsg" alert-type="success" :alert-message="successMsg"></Alert>
  <Alert v-if="errorMsg" alert-type="danger" :alert-message="errorMsg"></Alert>
</template>

<script>
import Alert from "./Alert.vue";
export default {
  components: {
    Alert,
  },
  data() {
    return {
      rating: null,
      errorMsg: null,
      successMsg: "",
    };
  },

  methods: {
    async rateRecipe(ratingToSet) {
      console.log(ratingToSet);
      let rateObj = { rating: ratingToSet };

      console.log(rateObj);

      console.log(this.recipeId);

      fetch(
        `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.recipeId}/ratings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rateObj),
        }
      )
        .then((response) => {
          if (!response.ok) {
            console.log(response);
          }
          return response.text();
        })
        .then((responseText) => {
          if (!responseText) {
            this.successMsg = "Tack för din rating!"
            console.log("Tack för din rating");
            this.$emit("ratingSaved");
          } else {
            this.errorMsg = responseText;
            console.log("Felmeddelande: ", responseText);
          }
        })
        .catch((error) => {
          console.error("Fetch-fel:", error);
        });
    },
    updateRating(value) {
      if (value <= this.avgRating) {
        return 'star checked'
      }
    }
  },
  emits: ["ratingSaved"],

  props: {
    avgRating: Number,
    recipeId: String,
  },
};
</script>

<style>
.star {
  color: orange;
  font-size: 42px;
}

.star:hover {
  color: whitesmoke;
  font-size: 42px;
}

.checked {
  color: red;
  font-size: 42px;
}
</style>