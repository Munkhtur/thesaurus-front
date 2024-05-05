<template>

    <div class="flex relative w-full my-10">
        <span class="entry"></span>
        <h1 class="anchor-label">{{ index! + 1 }} </h1>
        <div class="flex flex-col ml-10 gap-10">
            <p class="font-bold"> {{ word.Word.Definition }}</p>
            <!-- <div class="grid grid-cols-4 gap-4 "> -->
            <div class="flex flex-wrap gap-4 ">
                <div v-for="(item, index) in word.Synonyms">
                    <!-- <UButton :to="`/dictionary/${item.Word}`">
                        {{ item.Word }} {{ $props.levels?.indexOf(item.Level) }}</UButton> -->
                    <CustomButton :url="`/dictionary/${item.Word}`" :level="distinctLevels.indexOf(item.Level)">{{
                        item.Word }}</CustomButton>
                </div>

            </div>
        </div>
        <div class="anchor"></div>
    </div>

</template>


<script setup lang="ts">

const props = defineProps({
    word: {
        type: Object,
        default: () => ({ Word: '', Synonyms: [] })
    },
    index: Number,

});
const { word } = props;
var distinctLevels = ref<Number[]>([])

distinctLevels = [...new Set(word.Synonyms.map((item: any) => item.Level).flat())] as any;

</script>

<style>
.anchor {
    background: linear-gradient(180deg, #cbe1ea, rgba(203, 225, 234, .48) 21.21%, rgba(203, 225, 234, .48) 78.8%, rgba(203, 225, 234, .9));
    background: linear-gradient(180deg, #bbd5e0, #deeaef 17.8%, #deeaef 81.87%, #bbd5e0);
    border-radius: 4px;
    display: block;
    height: calc(100% - 10px);
    left: 9px;
    position: absolute;
    top: 33px;
    width: 3px;
}

.anchor-label {
    /* color: #303336; */
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    min-width: 20px;
    text-align: center;
}
</style>
