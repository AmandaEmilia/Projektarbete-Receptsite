<!-- Task 2.5 Lista Kategorier-->
<template>
        <div class="category-background">
            <h2>Kategorier</h2>
            <nav v-for="category in categories" :key="categories._id">
                <RouterLink :to="`/category/${category.name}`">{{ category.name }} ({{ category.count }})</RouterLink>
            </nav>
        </div>
</template>

<script>
export default {
    data() {
        return {
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
<style scoped>
.category-background {
    width: 100%;
    height: 50%;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(237, 22, 59, 0.25) 0%, rgba(237, 22, 59, 0.25) 0.01%, rgba(217, 217, 217, 0.00) 76.04%);
    padding: 3%;
    
}

.category-background nav {
    padding-top: 10%;
}
</style>