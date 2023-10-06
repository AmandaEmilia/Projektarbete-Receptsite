<script setup>
import CategoryListComponent from '../components/CategoryListComponent.vue'
</script>
<script>

export default {
    data() {
        return {
            category: "",
            categoryId: ""
        }
    },
    methods: {
        async fetchData() {
            this.category = null;
            const response = await fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories/${this.$route.params.categoryId}/recipes`)
            this.category = await response.json();
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.categoryId = this.fetchData(toParams || "");
            }
        )
    },
    mounted() {
        this.fetchData();
    }
}

</script>

<template>
    <CategoryListComponent></CategoryListComponent>
    <h1>{{ this.$route.params.categoryId }}</h1>

    <div v-for="recipe in category">

        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipe/${recipe.id}`">{{ recipe.title }} {{ recipe.ratings }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>


    </div>
</template>
<style scoped></style>