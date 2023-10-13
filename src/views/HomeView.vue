<template>
  <!-- <h1>HomeView</h1> -->
  <h1>{{ heading }}</h1>
  <h1>{{ info }}</h1>
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
  data() {
    return {
      heading: "ASIATISKA IT KÖKET",
      info: "Välkommen till den unika receptsidan för dig som gillar mat från Asien"
    }
  }
};
</script>


<style scoped></style>