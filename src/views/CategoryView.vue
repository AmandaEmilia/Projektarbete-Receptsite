<!-- Task 3.1 CategoryView-->
<template>
    <Header>Välkommen till den unika receptsidan för dig som gillar mat från Asien</Header>
    <CategorySearchBox></CategorySearchBox>
    <!--<CategoryListComponent></CategoryListComponent>-->
    <CategoryComponent></CategoryComponent>
</template>
<script>
import Header from '../components/Header.vue';
import CategoryListComponent from '../components/CategoryListComponent.vue'
import CategorySearchBox from '../components/CategorySearchBox.vue';
import CategoryComponent from '../components/CategoryComponent.vue'
export default {
    components: {
        Header,
        CategoryListComponent,
        CategorySearchBox,
        CategoryComponent
    }
}
</script>
<style scoped></style>