
<template>
  <RecipeComponent></RecipeComponent>
  <CommentComponent :recipe-id="this.$route.params.recipeId"></CommentComponent>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue";
import RecipeComponent from "../components/RecipeComponent.vue";
export default {
  components: {
    CommentComponent,
    RecipeComponent,
  }
}
</script>

<style scoped></style>