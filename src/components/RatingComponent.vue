
<template>
  <h3>Vad tyckte du om receptet?</h3>
  <h3>Klicka på en stjärna för att ge ditt betyg!</h3>
  <!-- <span class="starRate" @click="rateRecipe(1)" v-bind:class="updateRating(1)"> ★ </span>
  <span class="starRate" @click="rateRecipe(2)" v-bind:class="updateRating(2)"> ★ </span>
  <span class="starRate" @click="rateRecipe(3)" v-bind:class="updateRating(3)"> ★ </span>
  <span class="starRate" @click="rateRecipe(4)" v-bind:class="updateRating(4)"> ★ </span>
  <span class="starRate" @click="rateRecipe(5)" v-bind:class="updateRating(5)"> ★ </span> -->
  <div v-if="rating === null || rating === 0" class="starBox">
    <span
      class="starRate"
      v-for="star in 5"
      :key="star"
      @click="rateRecipe(star)"
      :class="{ rated: star <= rating }"
    >
      &#9733;
    </span>
  </div>
  <Alert
    v-if="successMsg"
    alert-type="success"
    :alert-message="successMsg"
  ></Alert>
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
      this.rating = ratingToSet;
      console.log(ratingToSet);
      let rateObj = { rating: ratingToSet };
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
            this.successMsg = "Tack för din rating!";
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
        return "star checked";
      }
    },
  },
  emits: ["ratingSaved"],

  props: {
    avgRating: String,
    recipeId: String,
  },
};
</script>

<style>
.starBox {
  margin-left: 43%;
}

.starRate {
  color: rgb(255, 255, 255);
  font-size: 42px;
}

.starRate:hover {
  color: rgb(162, 78, 13);
  font-size: 42px;
}

.rated {
  color: rgb(164, 60, 8);
}
</style>