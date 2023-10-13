<!-- <template>
  <div>
    <h1>Vad tyckte du om receptet?</h1>
  </div>
  <div>
      <span
        v-for="star in 5"
        :key="star"
        @click="rateRecipe(star)"
        :class="{ filled: star >= rating }"
        >&#9733;</span>
    </div>
</template>

<script>
export default {
  props: {
    recipeId: String,
  },
  data() {
    return {
      rating: 0, 
      thankYouMsg: "", 
    };
  },

  methods: {
    rateRecipe(star) {
      fetch('https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/' + this.recipeId + '/ratings', {
        method: 'POST',
        body: JSON.stringify({
          rating: star,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.thankYouMsg = "Tack för din kommentar!";
      });
    },

    getRating() {
      fetch('https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/' + this.recipeId + '/ratings')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.ratings = data;
        });
    },
  },

  mounted() {
    this.getRating();
  },
};
</script>

<style scoped>
.filled {
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
 -->
<!-- 
<template>
  <div>
    <h3>Ratingen är: {{ recipe.avgRating }}</h3> 
  </div>
      <div>
        <h1>Vad tyckte du om receptet?</h1>
      </div>
  <div class="star-box">
    <span
      class="star"
      v-for="star in 5"
      :key="star"
      @click="rateRecipe(star)"
      
    >
      &#9733;</span
    >
  </div>
</template>

<script>
export default {
  props:{
      avgRating: Number
    },

  data() {
    
    return {
      star: null,
      recipe: {
        avgRating: 0,
      }
    };
  },
  methods: {
    rateRecipe(star) {

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: star }),
      };

      fetch(
        `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}/ratings`,
        requestOptions
      ).then((data) => this.recipe.avgRating = data.avgRating);

      console.log(star);
    },

    getRating() {
      
      fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}/ratings`)
        .then((response) => response.json())
        
        .then((data) => {
          this.recipe.avgRating = data.avgRating;
        }); 
    },
  
  },
     mounted() {
    this.getRating();
  },  
};

</script>

<style scoped>
.star-box{
  padding-left: 40%;
}

.star {
  color: rgb(123, 144, 173);
  font-size: 32px;
  cursor: pointer;
}

h3{
  color: darkolivegreen;
}

.star:active{
  color: rgb(150, 91, 15);

}

.filled {
  color: #d8600a;
}
</style> 


<template>
  <div>
    <h2 style="color: rgb(49, 27, 27)">
      Aktuell rating: {{ avgRating }}
    </h2>
    <div class="star-box">
      <span
        class="star"
        v-for="star in 5"
        :key="star"
        @click="rateRecipe(star)"
        :class="{ filled: star <= currentRating }"
      >
        &#9733;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipeId: String,
    avgRating: Number,
  },
  data() {
    return {
      currentRating: null,
    };
  },
  mounted() {
  this.getRating();
  },
  methods: {
    getRating() {
      fetch(
        `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}/ratings`
      )
        .then((response) => response.json())
        .then((data) => {
          this.currentRating = data.avgRating;

          console.log(this.currentRating);
        });
    },
    rateRecipe(star) {
      star = JSON.parse(`{"rating":${star}}`);
      fetch(
        `https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}/ratings`,
        {
          method: "POST",
          body: JSON.stringify(star),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          
        });
    },
  },
};
</script>
<style scoped>
.star-box {
  padding-left: 40%;
}

.star {
  color: rgb(123, 144, 173);
  font-size: 32px;
  cursor: pointer;
}

h3 {
  color: darkolivegreen;
}

.star:active {
  color: rgb(150, 91, 15);
}

.filled {
  color: #d8600a;
}
</style> 
-->


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