<!-- Task 2.6 Lista recept-->
<template>
    <!-- Loopar genom och skriver ut enskilt recept på hemsida -->
    <div class="main" v-for="recipe in recipes" :key="recipe._id" v-if="recipes">
        <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <div class="gradient-background">
            <div class="grid-container">
                <h2 class="grid-item recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe._id}`">{{ recipe.title }}</RouterLink>
                    <StarComponent :avg-rating="`${recipe.avgRating}`">
                    </StarComponent>
                </h2>
                <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                <div class="grid-item recipe-description main">{{ recipe.description }}</div>
                <div class="grid-item recipe-foot main">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.timeInMins }} {{ time }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarComponent from './StarComponent.vue'
export default {
    components: {
        StarComponent
    },
    data() {
        return {
            heading: "ASIATISKA IT KÖKET",
            recipes: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            fetch("https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes")
                .then((response) => response.json())
                .then((data) => { this.recipes = data })
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>


<style>

.recipe-head {
    grid-area: head;
}

.recipe-img {
    grid-area: img;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
}

.recipe-foot {
    grid-area: foot;
}

.grid-container {
    display: grid;
    grid-template-areas:
        'head head head head head head'
        'main main main main img img'
        'foot foot foot foot img img';
    margin-left: 5%;
    margin-right: 5%;
    padding: 2%;
}

</style>