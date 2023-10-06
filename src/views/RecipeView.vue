<script>
import CommentComponent from '../components/CommentComponent.vue';
import RecipeComponent from '../components/RecipeComponent.vue';
export default {
    components: {
    CommentComponent,
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
    <CommentComponent></CommentComponent>
</template>
<style scoped></style>