<!-- Task 4.2 Kommenteringsfunktion-->
<template>
    <div class="comment">
        <h2>Kommentarer</h2>
        <div v-if="successMsg" class="alert-box">
            <Alert alert-type="success" :alert-message="successMsg"></Alert>
        </div>
        <div v-else>
            <div class="alert-box">
                <Alert v-if="invalidErrorMsg" alert-type="warning" :alert-message="invalidErrorMsg"></Alert>
            </div>
            <div class="form-group">
                <label>Skriv ditt namn</label>
                <input type="text" placeholder="Ditt namn" v-model="nameInput" class="form-control">
            </div>
            <div class="form-group">
                <label>Skriv en Kommentar</label>
                <textarea placeholder="Skriv din kommentar" v-model="commentInput" class="form-control"></textarea>
            </div>
            <div class="center-button">
                <Button :disabled="!isInputValid" @btn-click="submitComment" btn-type="success">Skicka</Button>
            </div>
            <div class="prev-comments">
                <div v-if="comments.length > 0">
                    <h3>Befintliga kommentarer</h3>
                    <ul>
                        <li v-for="comment in comments" :key="comment._id">
                            <strong>{{ comment.name }}</strong> - {{ comment.createdAt }}
                            <p>{{ comment.comment }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Alert from './Alert.vue';
import Button from './Button.vue';
export default {
    components: {
        Alert,
        Button
    },
    props: {
        recipeId: String
    },

    data() {
        return {
            commentInput: "",
            nameInput: "",
            isCommentPosting: false,
            comments: [],
            successMsg: ""
        }
    },
    computed: {
        invalidErrorMsg() {
            if (this.commentInput == "" || this.nameInput == "") {
                return "*Var vänlig och fyll i båda fälten!";
            }

        },
        isInputValid() {
            return this.commentInput != "" && this.nameInput != "" && this.isCommentPosting == false;
        }
    },
    methods: {
        submitComment() {
            this.isCommentPosting = true;
            fetch('https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/' + this.recipeId + '/comments', {
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
                    this.successMsg = "Tack för din kommentar!"
                });
        },
        getAllComments() {
            fetch('https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/' + this.recipeId + '/comments')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.comments = data;
                });
        }


    },
    mounted() {
        this.getAllComments();
    }


}
</script>

<style scoped>
.center-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.prev-comments {
    color: black;

}

.comment {
    color: black;
}

.alert-box {
    height: 50px;
}

.prev-comments li {
    border-bottom: 1px solid black;
}
</style>

