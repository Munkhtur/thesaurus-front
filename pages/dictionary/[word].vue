<template>

    <div class="container w-full xl:w-1/2  md:w-[75%] sm:w-full  dark:bg-eerie_black min-h-screen mx-auto p-10">
        <template v-if="loading">
            <div class="flex flex-col gap-4">
                <USkeleton class="h-10 w-[250px]" />
                <div class="flex items-center gap-5">

                    <USkeleton class="h-6 w-6" :ui="{ rounded: 'rounded-full' }" />
                    <USkeleton class="h-4 w-[250px]" />
                </div>
                <div class="flex flex-wrap ml-5 gap-5">
                    <USkeleton v-for="i in 20" class="h-10 w-[100px]" />
                </div>
                <div class="flex items-center gap-5">

                    <USkeleton class="h-6 w-6" :ui="{ rounded: 'rounded-full' }" />
                    <USkeleton class="h-4 w-[250px]" />
                </div>
                <div class="flex flex-wrap ml-5 gap-5">
                    <USkeleton v-for="i in 20" class="h-10 w-[100px]" />
                </div>
    
  </div>
        </template>
        <template v-else-if="items && items.length > 0">

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
                    <div class="w-3 h-2 rounded bg-white border-2 border-templateprimary-50 "></div>
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
var loading = ref(false)

onMounted(() => {
    console.log(route.params.word, "onm")
    loadData()
})

const loadData = async () => {
        loading.value = true
    try {

        const response = await $fetch("http://localhost:8000/find" , {
            method: "post",
            body:{
                word: route.params.word
            }
        })
        console.log(response, "response 0000000")
        if (response) {
            items.value = response as any
        }
        loading.value = false
    } catch (error: any) {
        toast.add({
            title: error.value.data.message ?? "Амжилтгүй",
            color: "amber",
        });
        loading.value = false
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