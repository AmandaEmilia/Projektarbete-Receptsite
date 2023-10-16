<template>
    <main v-if="recipe">
        <h1 class="u-heading">{{ recipe.title }}</h1>
        <div class="u-container">
            <div class="u-description">{{ recipe.description }}</div>
            <div class="u-amountofingredients">
                <StarComponent :avg-rating="`${recipe.avgRating}`"></StarComponent> |
                {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                {{ recipe.timeInMins }} {{ time }}
            </div>
            <div class="u-ingredients" v-if="recipe.ingredients">
                <ul>
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient._id"> {{ ingredient.name }}
                        {{ ingredient.amount }} {{ ingredient.unit }} </li>
                </ul>
            </div>
            <div class="u-image"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="u-instructions" v-if="recipe.instructions">
                <ul>
                    <li v-for="instruction in recipe.instructions" :key="instruction._id">{{ instruction }}</li>
                </ul>
            </div>
        </div>
        <RatingComponent :recipe-id="this.$route.params.recipeId" :avg-rating="`${recipe.avgRating}`"></RatingComponent>
    </main>
</template>
<script>
import RatingComponent from './RatingComponent.vue';
import StarComponent from './StarComponent.vue';
export default {
    components: {
        RatingComponent,
        StarComponent
    },
    data() {
        return {
            recipe: "",
            recipeId: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            this.recipe = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}`)
                .then((response) => response.json())
                .then((data) => { this.recipe = data });
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<style scoped>
/* Styla <h1> elementet */



.u-description {
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 16px;
    /* color: #444; */
    line-height: 1.4;
    padding: 10px;
    /* background-color: #f9f9f9; */
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

.u-amountofingredients {
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
}

.u-minutes {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
}

.u-ingredients {
    grid-column-start: 1;
    grid-column-end: 2;
    /* color: #444; */
    line-height: 1.4;
    padding: 10px;
    margin-left: 5%;
    /* background-color: #f9f9f9; */
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

.u-image {
    grid-column-start: 2;
    grid-column-end: 3;
}


.u-instructions {
    grid-column-start: 1;
    grid-column-end: 4;
    color: #444;
    line-height: 1.4;
    padding: 10px;
    margin-left: 5%;
    background-color: #f9f9f9;
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

.u-container {
    display: grid;
    grid-gap: 20px;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 20px;
    border-radius: 10px;
}
</style>

