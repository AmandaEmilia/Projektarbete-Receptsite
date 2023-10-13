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
        <!-- <h1 class="green">{{ heading }}</h1> -->
        <form class="formwrapper">
            <input type="text" id="searchbox" placeholder="Search for..." required>
            <input type="submit" value="go" id="btn" @click="fetchData">
        </form>
    </div>
    <main v-for="recipe in recipes">
        <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>
    </main>
</template>