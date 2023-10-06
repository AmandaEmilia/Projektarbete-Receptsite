<script>
import CommentComponent from '../components/CommentComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';
export default {
    components: {
    CommentComponent,
        RatingComponent
},
    data(){
      return{
        
      }
    }
  }
</script>

<template>
    <h1>RecipeView</h1>
    <CommentComponent></CommentComponent>
    <rating-component></rating-component>
</template>
<style scoped></style>