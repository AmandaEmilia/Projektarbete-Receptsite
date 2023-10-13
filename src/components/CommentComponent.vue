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
            <div class="comment-box">
                <div class="form-group">
                    <input type="text" placeholder="Ditt namn" v-model="nameInput" class="form-control">
                </div>
                <div class="form-group">
                    <textarea placeholder="Skriv din kommentar" v-model="commentInput" class="form-control"></textarea>
                </div>
            </div>
                <div class="center-button">
                    <Button :disabled="!isInputValid" @btn-click="submitComment" btn-type="success">Skicka</Button>
                </div>
            <div class="prev-comments">
                <div v-if="comments.length > 0">
                    <h3>Befintliga kommentarer</h3>
                    <ul>
                        <li v-for="comment in comments" :key="comment._id">
                            <strong>{{ comment.name }}</strong> - {{ formatDate(comment.createdAt) }}
                            <p>{{ comment.comment }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Alert from "./Alert.vue";
import Button from "./Button.vue";
export default {
  components: {
    Alert,
    Button,
  },
  props: {
    recipeId: String,
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
        },

         formatDate(dateString) {
           const options = {
           year: 'numeric',
           month: 'numeric',
           day: 'numeric',
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }


    },
    mounted() {
        this.getAllComments();
    }


}
</script>

<style scoped>
.comment-box{

    margin-left: 30%;
  

}
.center-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.prev-comments {
    color: black;
    height: 50%;
    width: 50%;
    margin-left: 20%;
}

.alert-box {
    height: 50px;
}

.prev-comments li {
    background-color: white;
    border-bottom: 1px solid black;
    padding: 15px;
    margin-bottom: 10px;
}
</style>

