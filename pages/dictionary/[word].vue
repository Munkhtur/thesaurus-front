<template>

    <div class="container bg-black min-h-screen mx-auto p-10">

        <h1 class="my-10 main-word">{{ $route.params.word }}</h1>

        <DefnitionBlock v-for="(item, index) in items" :word="item" :index="index" />

    </div>
</template>


<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.word)


var items = [
    {
        definition: "a sudden experiencing of a physical or mental disorder",
        synonyms: ["attack", "bout", "seizure", "case", "spell", "turn", "fit",
            "siege", "pang", "breakdown", "recurrence", "relapse", "spasm", "frenzy", "collapse",
            "convulsion", "agitation", "eclampsia", "brainstorm", "paroxysm", "throe", "prostration"]
    },
    {
        definition: "a sudden experiencing of a physical or mental disorder",
        synonyms: ["attack", "bout", "seizure", "case", "spell", "turn", "fit",
            "siege", "pang", "breakdown", "recurrence", "relapse", "spasm", "frenzy", "collapse",
            "convulsion", "agitation", "eclampsia", "brainstorm", "paroxysm", "throe", "prostration"]
    }
]
</script>


<style>
.main-word {
    font-family: "Player Display sans-serif";
    font-size: 49px;
    font-weight: 700;
}
</style>