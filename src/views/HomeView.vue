<template>
  <!-- <h1>HomeView</h1> -->
  <Header>Välkommen till den unika receptsidan för dig som gillar mat från Asien</Header>
 
  <div class="flex-container">
    <div class="flex-item-one">
      <CategoryListComponent></CategoryListComponent>
    </div>
    <div class="flex-item-two">
      <SearchBoxComponent></SearchBoxComponent>
      <AllRecipesComponent></AllRecipesComponent>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SearchBoxComponent from "../components/SearchBoxComponent.vue";
import AllRecipesComponent from "../components/AllRecipesComponent.vue";
import CategoryListComponent from "../components/CategoryListComponent.vue";

export default {
  components: {
    Header,
    SearchBoxComponent,
    AllRecipesComponent,
    CategoryListComponent,
  }
};
</script>


<style scoped>



@media screen and (max-width: 768px) {
  .flex-container {
    width: 100%;
    margin-top: 0;
    flex-direction: column;
  }
}
</style>