<script>
export default {
    data() {
        return {
            heading: "Instruktioner",
            recipes: "",
            time: "min"
        }
    },
    methods: {
        async fetchData() {

            this.recipes = null;
            const response = await fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se${this.$route.path}`);
            this.recipes = await response.json();
            
            console.log(this.recipes);
            console.log(this.$route.path);
        }
    },
    beforeMount() {
        this.fetchData()
    }

}
</script>


<template>


</template>