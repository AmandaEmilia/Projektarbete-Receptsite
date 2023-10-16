<!-- Task Söka recept bara inom vald kategori när man befinners sig på categoryView-->
<template>
    <input v-model="searchBoxInput" :placeholder="`Sök ${this.$route.params.categoryId}`" name="search">
    <button type="submit" @click="fetchData">{{ heading }} {{ this.$route.params.categoryId }}</button>

    <div v-for="search in searchResult" :key="searchResult._id">
        <!-- {{ search.title }} -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${search._id}`">{{ search.title }} </RouterLink>
                {{ search.ratings }}
            </div>
            <div class="grid-item recipe-img"><img :src="search.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ search.description }}</div>
            <div class="grid-item recipe-foot">{{ search.timeInMins }} {{ time }}</div>
        </div>
    </div>


    <div class="main-grid">
        <h1>ASIATISKA IT-KÖKET</h1>
        <h3>Välkommen till den unika receptsidan för dig som gillar mat från Asien</h3>
        <div class="greetings">
            <form>
                <div id="search-icon">
                    <img src="../assets/search.png">
                </div>
                <input v-model="searchBoxInput" :placeholder="`Sök ${this.$route.params.categoryId}`" name="search">
                <button type="submit" @click="fetchData">{{ heading }} {{ this.$route.params.categoryId }}</button>
            </form>
        </div>
        <div v-for="search in searchResult" :key="searchResult._id">
            <!-- {{ search.title }} -->

            <div class="grid-container">
                <div class="recipe-head">
                    <RouterLink :to="`/recipe/${search._id}`">{{ search.title }} </RouterLink>
                </div>
                <div class="recipe-img"><img :src="search.imageUrl" alt="picture"></div>
                <div class="recipe-main">{{ search.description }}</div>
                <div class="recipe-foot">{{ search.timeInMins }} {{ time }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            heading: "Sök ",
            searchBoxInput: "",
            searchResult: [],
            time: "min"
        }
    },
    methods: {
        fetchData() {
            this.searchResult = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories/${this.$route.params.categoryId}/recipes/?query=${this.searchBoxInput}`)
                .then((response) => response.json())
                .then((data) => { this.searchResult = data })

        }
    }
}
</script>

<style scoped>
.greetings {
    width: 50%;
    border-radius: 55px;
    background: linear-gradient(180deg, rgba(237, 22, 59, 0.50) 0%, rgba(255, 255, 255, 0.00) 22.4%);
}

#searchbox {
    color: white;
    font-family: Kameron;
    font-size: 20px;
    background-color: transparent;
    border: none;
    width: 60%;
    margin-right: 8%;
}

#btn {
    border: #ED163B 1px solid;
    background: transparent;
    color: white;
    vertical-align: middle;
}

#search-icon {
    color: #ED163B;
    width: 3%;
    margin-left: 10%;
    margin-top: 3%;
}

.main-grid {
    display: grid;
    gap: 10px;
    justify-items: center;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
}

.grid-container {
    display: grid;
    gap: 5px;
    text-align: center;
}
</style>

