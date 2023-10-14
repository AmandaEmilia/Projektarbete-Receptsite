<template>
    <h1>{{ this.$route.params.categoryId }}</h1>

    <!-- <div v-for="recipe in category" :key="recipe._id">
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
            <StarComponent :avg-rating="`${recipe.avgRating}`"></StarComponent>
        </div>
    </div> -->


    <main v-if="category">
        <div v-for="recipe in category" :key="recipe._id">
            <div class="gradient-background">
                <div class="grid-container">
                    <div class="grid-item recipe-head">
                        <RouterLink :to="`/recipe/${recipe._id}`">{{ recipe.title }}</RouterLink>
                    </div>
                    <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                    <div class="grid-item recipe-description">{{ recipe.description }}</div>
                    <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}
                        <StarComponent :avg-rating="`${recipe.avgRating}`">
                        </StarComponent>
                    </div>
                </div>
            </div>
        </div>
    </main>
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
            time: "min"
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