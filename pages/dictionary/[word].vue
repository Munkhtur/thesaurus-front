<template>

    <div class="container w-full xl:w-1/2  md:w-[75%] sm:w-full  dark:bg-eerie_black min-h-screen mx-auto p-10">
        <template v-if="items && items.length > 0">

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
            <DefnitionBlock v-for="(item, index) in items" :key="index" :word="item" :index="index" />
        </template>
        <template v-else>
            <h1 class=" main-word">"{{ $route.params.word }}"</h1>
            <p>Таны хайсан үг олдсонгүй. Зөв бичсэн эсэхээ шалгаад дахин оролдоно уу.</p>
        </template>
    </div>
</template>


<script setup lang="ts">
import { dictionaryData } from '~/data';
const toast = useToast();

const route = useRoute()
var items = ref<IResponseWords[]>([])
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.word, "params")
// items.value = dictionaryData as any;

// Assuming items.value is an array of IResponseWords objects


onMounted(() => {
    console.log(route.params.word, "onm")
    loadData()
})

const loadData = async () => {

    try {

        const response = await useCustomFetch(`/find`, "POST", {
            body: {
                term: route.params.word
            }
        }) as any;

        if (response?.value) {
            items.value = response.value
        }
    } catch (error: any) {
        toast.add({
            title: error.value.data.message ?? "Амжилтгүй",
            color: "amber",
        });
    }

    // items.value.forEach(async (element: IResponseWords) => {
    //     const response = await useCustomFetch(`/search?code=${element.Code}`, "GET") as any;

    // console.log(response.value, "synonsymsres")
    // if (response?.value) {
    //     element!.Synonyms = response.value

    // }
    // });
}


</script>


<style>
.main-word {
    font-family: "Player Display sans-serif";
    font-size: 49px;
    font-weight: 700;
}
</style>