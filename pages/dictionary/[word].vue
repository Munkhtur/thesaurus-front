<template>

    <div class="container w-full xl:w-1/2  md:w-[75%] sm:w-full  dark:bg-eerie_black min-h-screen mx-auto p-10">

        <div class="flex justify-between items-center my-10">

            <h1 class=" main-word">{{ $route.params.word }}</h1>
            <div class="flex gap-1 items-center">
                <UPopover mode="hover">
                    <!-- <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" /> -->
                    <h1 class="underline decoration-1 mb-1 font-light">Хамаарал</h1>
                    <template #panel>
                        <div class="p-4 w-60 text-wrap">
                            <p>Тод өнгө хамгийн ойр утгай үгийг илтгэнэ.</p>
                        </div>
                    </template>
                </UPopover>
                <div class="w-3 h-2 rounded bg-templateprimary-950"></div>
                <div class="w-3 h-2 rounded bg-templateprimary-600"></div>
                <div class="w-3 h-2 rounded bg-templateprimary-300"></div>
            </div>
        </div>

        <DefnitionBlock v-for="(item, index) in items" :word="item" :index="index" :levels="distinctLevels" />

    </div>
</template>


<script setup lang="ts">
import { dictionaryData } from '~/data';

const route = useRoute()
var items = ref<IResponseWords[]>([])
var distinctLevels = ref<Number[]>([])
// When accessing /posts/1, route.params.id will be 1

items.value = dictionaryData as any;
// Assuming items.value is an array of IResponseWords objects
distinctLevels = [...new Set(items.value.map(item => item.Synonyms.map(synonym => synonym.Level)).flat())] as any;

console.log(distinctLevels)
// onMounted(()=>{
//     console.log(route.params.word, "onm")
//     loadData()
// })

// const loadData= async ()=>{
//     const response = await useCustomFetch(`/find?term=${route.params.word}`, "GET") as any;

//         console.log(response.value, "resз")
//         if (response?.value) {
//             items.value = response.value

//         }

//         items.value.forEach(async (element: IResponseWords) => {
//             const response = await useCustomFetch(`/search?code=${element.Code}`, "GET") as any;

//         console.log(response.value, "synonsymsres")
//         if (response?.value) {
//             element!.Synonyms = response.value

//         }
//         });
// }


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