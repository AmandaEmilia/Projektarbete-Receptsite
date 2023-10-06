<!-- Task Rating-->

<template>
    <div class="recipe-rating">
        <h3>Vad tyckte du om receptet?</h3>
        <h6>Klicka på en stjärna för att ge ditt betyg!</h6>
      <span v-for="star in stars" :key="star" @click="rateRecipe(star)" :class="{ 'filled': star <= rating }">&#9733;</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: Number, // The current rating value
    },
    data() {
      return {
        stars: [1, 2, 3, 4, 5], // Number of stars for rating
      };
    },
    methods: {
      rateRecipe(star) {
        // Emit an event to update the rating in the parent component
        this.$emit('update-rating', star);
      },
    },
  };
  </script>
  
  <style scoped>
  .recipe-rating {
    font-size: 24px;
  }
  
  .recipe-rating span {
    cursor: pointer;
  }
  
  .filled {
    color: #ffcc00;
  }
  </style>
  