<script setup>
import CommentComponent from "../components/CommentComponent.vue";
import RecipeComponent from "../components/RecipeComponent.vue";
import RatingComponent from "../components/RatingComponent.vue";
</script>

<template>
  <RecipeComponent></RecipeComponent>
  <CommentComponent :recipe-id="this.$route.params.recipeId"></CommentComponent>
  <RatingComponent></RatingComponent>
</template>
<style scoped></style>