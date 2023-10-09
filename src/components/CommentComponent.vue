<!-- Task 4.2 Kommenteringsfunktion-->
<template>
    <div class="comment">
        <h2>Kommentarer</h2>
        <div v-if="invalidErrorMsg" class="alert warning">{{ invalidErrorMsg }}</div>
        <div class="form-group">
            <input type="text" placeholder="Ditt namn" v-model="nameInput" class="form-control">
        </div>
        <div class="form-group">
            <textarea placeholder="Skriv din kommentar" v-model="commentInput" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <button :disabled="!isInputValid" @click="submitComment">Skicka</button>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        recipeId: String
    },

    data() {
        return {
            commentInput: "",
            nameInput: "",
            isBtnEnabled: false
        }
    },
    computed: {
        invalidErrorMsg() {
            if (this.commentInput == "" || this.nameInput == "") {
                return "*Var vänlig och fyll i båda fälten!";
            }

        },
        isInputValid() {
            return this.commentInput != "" && this.nameInput != "";
        }
    },
    methods: {
        submitComment() {
            console.log("Should submit comment for recipeid: ", this.recipeId);
            fetch('https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/'+this.recipeId+'/comments', {
                method: 'POST',
                body: JSON.stringify({
                    comment: this.commentInput,
                    name: this.nameInput
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)

                });


        }


    },


}
</script>

<style scoped></style>

