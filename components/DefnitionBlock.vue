<template>

    <div class="flex relative w-1/2 my-10">
        <span class="entry"></span>
        <div class="anchor-label">{{ index! + 1 }}</div>
        <div class="flex flex-col ml-10 gap-10">
            <p class="font-bold">{{ word.Definition }}</p>
            <!-- <div class="grid grid-cols-4 gap-4 "> -->
            <div class="flex flex-wrap gap-4 ">
                <div v-for="(item, index) in word.Synonyms">
                    <UButton :to="`/dictionary/${item.Word}`">
                        {{ item.Word }}</UButton>
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
        default: () => ({ Definition: '', Synonyms: [] })
    },
    index: Number
});
const { word } = props;
const getHue = () => {
    // Calculate hue based on index (for demonstration, I'm using a simple logic)
    return 143; // Change the multiplication factor to adjust the hue range
};

const getSaturation = () => {
    // Calculate saturation based on index (for demonstration, I'm using a constant value)
    return 100; // Adjust the value to change saturation
};

const getLightness = (index: any) => {
    // Calculate lightness based on index (for demonstration, I'm using a constant value)
    return ((index + 1) * 40) % 360; // Adjust the value to change lightness
};
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
    color: #303336;
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    min-width: 20px;
    text-align: center;
}
</style>
