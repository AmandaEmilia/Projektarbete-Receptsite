<template>
    <h1>{{ this.$route.params.categoryId }}</h1>
    <div class="main" v-if="category">
        <div v-for="recipe in category" :key="recipe._id">
            <div class="gradient-background">
                <div class="grid-container">
                    <div class="grid-item recipe-head">
                        <RouterLink class="router-link" :to="`/recipe/${recipe._id}`">{{ recipe.title }}</RouterLink>
                        <StarComponent :avg-rating="`${recipe.avgRating}`"></StarComponent>
                    </div>
                    <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                    <div class="grid-item recipe-description">{{ recipe.description }}</div>
                    <div class="grid-item recipe-foot">
                        {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                        {{ recipe.timeInMins }} {{ time }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarComponent from './StarComponent.vue';
export default {
    components: {
        StarComponent
    },
    data() {
        return {
            category: "",
            categoryId: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            this.category = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories/${this.$route.params.categoryId}/recipes`)
                .then((response) => response.json())
                .then((data) => { this.category = data })

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