<!-- Task Söka recept bara inom vald kategori när man befinners sig på categoryView-->

<script>
export default {
    data() {
        return {
            heading: "Sök recept",
            searchBoxInput: "",
            searchResult: [],
            time: "min"
        }
    },
    methods: {
        async fetchData() {
            this.searchResult = null;
            const response = await fetch(`${this.$hostname}/categories/${this.$route.params.categoryId}/recipes/?query=${this.searchBoxInput}`);
            this.searchResult = await response.json();
        }
    }
}

</script>


<template>
    <h1>{{ heading }} inom kategori: {{ this.$route.params.categoryId }}</h1>

    <input v-model="searchBoxInput" placeholder="Search within category.." name="search">
    <button type="submit" @click="fetchData">{{ heading }}</button>

    <div v-for="search in searchResult">
        <!-- {{ search.title }} -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipe/${search._id}`">{{ search.title }} </RouterLink>
                {{ search.ratings }}
            </div>
            <div class="grid-item recipe-img"><img :src="search.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ search.description }}</div>
            <div class="grid-item recipe-foot">{{ search.timeInMins }} {{ time }}</div>
        </div>
    </div>
</template>