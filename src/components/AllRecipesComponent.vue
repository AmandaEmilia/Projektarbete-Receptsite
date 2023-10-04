<!-- Task 2.6 Lista recept-->
<script>
export default { // Hämtar ut alla recept från API
    data() {
        return {
            heading: "Alla recept",
            recipes: [],
            time: "min"
        }
    },
    methods: {
        async fetchData() {
            this.recipes = null;
            const response = await fetch("https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes");
            this.recipes = await response.json();
        }
    },
    beforeMount() {
        this.fetchData()
    }
}
</script>

<template>
    <h1>{{ heading }}</h1>
    <!-- Loopar genom och skriver ut enskilt recept på hemsida -->
    <main v-for="recipe in recipes">
        <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipe/${recipe._id}`">{{ recipe.title }} {{ recipe.ratings }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>
    </main>
</template>

<style>
div {
    color: black;
    background-color: whitesmoke;
}

h1 {
    text-align: center;
}

img {
    height: 100px;
    width: 100px;
    float: inline-start;

}

.recipe-head {
    grid-area: head;
    font-size: 30px;
    text-align: center;
}

.recipe-img {
    grid-area: img;
}

.recipe-main {
    grid-area: main;
}

.recipe-foot {
    grid-area: foot;
}

.grid-item {
    background-color: darkgrey;
}

.grid-container {
    display: grid;
    grid-template-areas:
        'head head head head head head'
        'main main main main img img'
        'foot foot foot foot img img';
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5px;
    margin-top: 5px;
}
</style>