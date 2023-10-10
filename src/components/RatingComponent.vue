<!-- Task Rating-->

<!-- <template>
  <div class="recipe-rating">
    <h3>Vad tyckte du om receptet?</h3>

    <h6>
      Klicka på en stjärna för att ge ditt betyg!
    </h6>
    
    <p>Recept ID: {{ recipeId }}</p>

    <span
      v-for="star in stars"
      :key="star"
      @click="rateRecipe(star)"
      :class="{ filled: star <= rating }"
      >&#9733;</span
    > 
  </div>
</template>
  
<script>
export default {
  props: ["initialValue", "recipeId"],
  data() {
    return {
      showThankYouMessage: false,
      stars: [1, 2, 3, 4, 5],
      rating: this.initialValue,
      recipeId: this.recipeId,
    };
  },
  methods: {
    async rateRecipe(star) {

      this.rating = star;
      const dataToSend = {
        rating: star,
      
      };

      const jsonData = JSON.stringify(dataToSend);

      try {
        const response = await fetch(
          `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.recipeId}/ratings`,
          {
            method: "POST",
            body: jsonData,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        if (!response.ok) {
          throw new Error('Något gick fel med POST-anropet');
        }

        const updatedData = await response.json();
        this.recipes.avgRating = updatedData.newAvgRating;

        this.showRatingMessage = true;
        console.log('Receptbetyget har uppdaterats', updatedData);

      } catch (error) {
        console.error('Det uppstod ett fel vid POST-anropet', error);
      }
    },
  },
};
</script> -->

<template>
  <div v-if="recipes">
    <h1>Vad tyckte du om receptet?</h1>
    <div>
      <p>Receptnamn: {{ recipes.title }}</p>
      <p>AvgRating: {{ recipes.avgRating }}</p>
    </div>
    <div>
      <!--Visar rating för receptet-->
      <span
        v-for="star in convertRatingToStars(recipes.avgRating).filled"
        :key="star"
        class="filled-star"
        >&#9733;</span
      >
      <span
        v-for="star in convertRatingToStars(recipes.avgRating).empty"
        :key="star"
        class="empty-star"
        >&#9733;</span
      >
    </div>
    <div>
      <!-- Visa tomma stjärnor som användaren kan klicka på -->
      <span
        v-for="star in 5"
        :key="star"
        @click="rateRecipe(star)"
        class="empty-star"
        >&#9733;</span
      >
    </div>
  </div>
</template>


<script>
export default {
  props: {
    recipeId: String,
  },
  data() {
    return {
      recipes: "",
    };
  },
  methods: {
    async fetchData() {
      this.recipes = null;
      const response = await fetch(
        "https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se " +
          this.recipeId
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.recipes = data;
            })
      );
    },

    convertRatingToStars(rating) {
      const filledStars = Math.round(rating);
      const emptyStars = 5 - filledStars;

      return {
        filled: filledStars,
        empty: emptyStars,
      };
    },
    async rateRecipe(star) {
      // Beräkna det nya betyget baserat på användarens klick
      const newRating = star;

      const dataToSend = {
        rating: newRating,
      };

      const jsonData = JSON.stringify(dataToSend);

      try {
        /* const response = await fetch(
      `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.recipes._id}/ratings`,
      {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-type": "application/json"
        },
      }
    ); */

        fetch(
          `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.recipes._id}/ratings`,
          {
            method: "POST",
            body: JSON.stringify({
              avgRating: "newRating",
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((json) => console.log(json));

        if (!response.ok) {
          throw new Error("Något gick fel med POST-anropet");
        }

        const updatedData = await response.json();

        this.recipes.avgRating = updatedData.newAvgRating;
        this.rating = newRating;

        console.log("Receptbetyget har uppdaterats", updatedData);
      } catch (error) {
        console.error("Det uppstod ett fel vid POST-anropet", error);
      }
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>

  
<style scoped>
.filled-star {
  color: #d8600a; /* Färg för fyllda stjärnor */
}
.empty-star {
  color: #ffffff; /* Färg för tomma stjärnor */
  cursor: pointer;
}

.empty-star:active {
  color: #ffcc00; /* Ange den klickade färgen här */
}
</style>

  


