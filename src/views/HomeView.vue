<template>
  <!-- <h1>HomeView</h1> -->
  <SearchBoxComponent></SearchBoxComponent>
  <CategoryListComponent></CategoryListComponent>
  <AllRecipesComponent></AllRecipesComponent>
</template>

<script >
import SearchBoxComponent from "../components/SearchBoxComponent.vue";
import AllRecipesComponent from "../components/AllRecipesComponent.vue";
import CategoryListComponent from "../components/CategoryListComponent.vue";

export default {
  components: {
    SearchBoxComponent,
    AllRecipesComponent,
    CategoryListComponent,
  },
};
</script>


<style scoped></style>