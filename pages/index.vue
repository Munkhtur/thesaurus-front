<template>

    <div class="hero w-full">
        <div class="w-full flex justify-center items-center ">
            <div class="w-full xl:w-1/3  md:w-1/2 sm:w-full   flex flex-col justify-center max-w-xl">
                <h1 class="hero-text my-10 text-center leading-none text-4xl md:text-7xl sm:text-5xl font-extrabold ">
                    <span :class="{ 'slide-in': animated }">{{ currentWord }}</span>    Lorem ipsum
                    dolor sit amet  consectetur.
                </h1> 
                <!-- <SearchSuggesions /> -->
                <HomeSearch />
            </div>
        </div>
        <div class="flex justify-center gap-44 my-20 text-3xl">
            <div class="flex flex-col justify-center items-center">
                <div class="font-bold">30000+</div>
                <div>snlsrejng</div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="font-bold">30000+</div>
                <div>snlsrejng</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


definePageMeta({
    layout: "home",
});

const words = ["jnvj", "kjhdkf"]
var currentIndex = ref(0)
var currentWord = ref('')
var animated = ref(false)

onMounted(()=>{

    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % words.length;
        animated.value = true;
        setTimeout(() => {
            animated.value = false;
        }, 1000); // Adjust timing as needed
    }, 3000)

})

currentWord = computed(() => {
    return words[currentIndex.value]
})

</script>


<style>
/* .hero-text {
    font-family: "Player Display sans-serif";
    font-size: 70px;
    font-weight: 700;
} */

.hero {
    height: 87vh
}

.slide-in {
    animation: slideInAnimation 1s forwards;
}

@keyframes slideInAnimation {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
