<!-- Task 4.2 Kommenteringsfunktion-->
<template>
    <div>
        <h2>Kommentarer</h2>
        <div v-if="invalidErrorMsg" class="alert warning">{{ invalidErrorMsg }}</div>
       <textarea placeholder="Skriv din kommentar" v-model="commentInput"></textarea>
       <input type="text" placeholder="Ditt namn" v-model="nameInput">
       <button :disabled="!isInputValid" @click="submitComment">Skicka</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              commentInput: "",
              nameInput: "",
              isBtnEnabled: false
            }
        },
        computed: {
            invalidErrorMsg(){
                if(this.commentInput == "" || this.nameInput == ""){
                    return "Var vänlig och fyll i båda fälten!";
                }
                
            },
            isInputValid(){
                return this.commentInput != "" && this.nameInput != "";
            }
        },
        methods: {
            submitComment(){
                window.alert(`Not implemented \n Should submit \n name: ${this.nameInput} \n comment: ${this.commentInput}`)
            }
            
        }
        
    }
</script>

<style scoped>

</style>

