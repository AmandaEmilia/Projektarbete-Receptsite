<!-- Task 2.4  Söka Recept-->
<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }

})

//TESTAR PUSH

function search() {
    let inputSearchBox = document.getElementById("searchbox").value;
    console.log(inputSearchBox);
    fetchDataFromSearch(inputSearchBox);
}

function fetchDataFromSearch(inputSearchBox) {

    fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes?query=${inputSearchBox}`)
        .then(response => {
            if (!response.ok) {
                console.log("Not successful")
            }
            return response.json()
        })
        .then(data => renderData(data, inputSearchBox))
        .then(res => { console.log(res) })

}

function renderData(data, search) {
    let channelArray = [];

    for (let d of data) {
        let c = {
            avgRating: d.avgRating,
            categories: d.categories, //[]
            description: d.description,
            imageUrl: d.imageUrl,
            ingredients: d.ingredients, //[] OBJEKT ARRAY
            instructions: d.instructions, //[]
            timeInMins: d.timeInMins,
            title: d.title,
            id: d._id
        }

        channelArray.push(c);

    }

    console.log(channelArray[0]);

    if (channelArray.length == 0 || search === "") {
        document.getElementById("search").innerHTML = `Inga matchningar på "${search}"`;
    }
    else {
        document.getElementById("search").innerHTML = `Du har sökt på "${search}" och fått ${channelArray.length} recept`;
        return channelArray;
    }

}
</script>

<template>
    <div class="greetings">
        <h1 id="search"></h1>
        <h1 class="green">{{ msg }}</h1>
        <input id="searchbox" type="text" placeholder="Search..">
        <button type="input" id="btn" @click="search">Search</button>
    </div>
</template>