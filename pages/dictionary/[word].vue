<template>

    <div class="container bg-black min-h-screen mx-auto p-10">

        <h1 class="my-10 main-word">{{ $route.params.word }}</h1>

        <DefnitionBlock v-for="(item, index) in items" :word="item" :index="index" />

    </div>
</template>


<script setup lang="ts">
const route = useRoute()
var items = ref<IResponseWords[]>([])
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.word)

onMounted(()=>{
    console.log(route.params.word, "onm")
    loadData()
})

const loadData= async ()=>{
    const response = await useCustomFetch(`/find?term=${route.params.word}`, "GET") as any;

console.log(response.value, "resз")
if (response?.value) {
    items.value = response.value

}

items.value.forEach(async (element: IResponseWords) => {
    const response = await useCustomFetch(`/search?code=${element.Code}`, "GET") as any;

console.log(response.value, "synonsymsres")
if (response?.value) {
    element!.Synonyms = response.value

}
});
}


// var items = [
//     {
//         definition: "a sudden experiencing of a physical or mental disorder",
//         synonyms: ["attack", "bout", "seizure", "case", "spell", "turn", "fit",
//             "siege", "pang", "breakdown", "recurrence", "relapse", "spasm", "frenzy", "collapse",
//             "convulsion", "agitation", "eclampsia", "brainstorm", "paroxysm", "throe", "prostration"]
//     },
//     {
//         definition: "a sudden experiencing of a physical or mental disorder",
//         synonyms: ["attack", "bout", "seizure", "case", "spell", "turn", "fit",
//             "siege", "pang", "breakdown", "recurrence", "relapse", "spasm", "frenzy", "collapse",
//             "convulsion", "agitation", "eclampsia", "brainstorm", "paroxysm", "throe", "prostration"]
//     }
// ]
</script>


<style>
.main-word {
    font-family: "Player Display sans-serif";
    font-size: 49px;
    font-weight: 700;
}
</style>