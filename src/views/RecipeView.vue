

<template>
  <h1>RecipeView</h1>
  <RecipeComponent></RecipeComponent>
  <CommentComponent :recipe-id="this.$route.params.recipeId"></CommentComponent>
  <RatingComponent :recipe-id="this.$route.params.recipeId"  :avg-rating="this.$route.params.avgRating" @rating-saved="updateSomethingWhenRateISPosted"></RatingComponent>
<AvgRating :avg-rating="avgRating"></AvgRating>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue";
import RecipeComponent from "../components/RecipeComponent.vue";
import RatingComponent from "../components/RatingComponent.vue";

export default {
  components: {
    CommentComponent,
    RecipeComponent,
    RatingComponent
  },
  data() {
    return {
      avgRating: null
    }
  },
  methods: {
    updateSomethingWhenRateISPosted(){
      alert("Do something when rate is saved");
      //this.avgRating -> get from API
    }
  },
 // created: {
    //this.avgRating -> get from API
//  }
}
</script>

<style scoped></style>