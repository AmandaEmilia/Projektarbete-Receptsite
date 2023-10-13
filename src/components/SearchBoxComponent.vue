<!-- Task 2.4  Söka Recept-->
<script>
export default {
    data() {
        return {
            heading: "Sök här",
            recipes: [],
            time: "min"
        }
    },
    methods: {
        async fetchData() {
        let inputSearchBox = document.getElementById("searchbox").value;
        this.recipes = null;
        const response = await fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes?query=${inputSearchBox}`);
        this.recipes = await response.json();
        }
    }
}
</script>

<template>
    <div class="greetings">
        <input id="searchbox" type="text" placeholder="Search..">
        <button type="input" id="btn" @click="fetchData">Search</button>
    </div>
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