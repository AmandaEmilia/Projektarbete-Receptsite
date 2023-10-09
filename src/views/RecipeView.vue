<script>
import CommentComponent from '../components/CommentComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';
import RecipeComponent from '../components/RecipeComponent.vue';

export default {
    components: {
    CommentComponent,
    RatingComponent,
    RecipeComponent
},
    data(){
      return{
        
      }
    }
  }
</script>

<template>
    <h1>RecipeView</h1>
    <RecipeComponent></RecipeComponent>
    <CommentComponent :recipe-id="this.$route.params.recipeId"></CommentComponent>
    <rating-component></rating-component>
</template>
<style scoped></style>