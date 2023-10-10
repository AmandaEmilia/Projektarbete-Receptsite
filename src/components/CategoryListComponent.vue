<!-- Task 2.5 Lista Kategorier-->
<script>
export default {
    data() {
        return {
            heading: "Kategorier",
            categories: []
        }
    },
    methods: {
        fetchData() {
            this.categories = null;
            fetch("https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories")
                .then((response) => response.json())
                .then((data) => {
                    this.categories = data;
                })
        }
    },
    mounted() {
        this.fetchData()
    }
}

</script>


<template>
    <h1>{{ heading }}</h1>

    <nav v-for="category in categories">
        <RouterLink :to="`/category/${category.name}`">{{ category.name }} ({{ category.count }})</RouterLink>
    </nav>
</template>