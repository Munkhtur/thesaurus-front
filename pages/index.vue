<template>

    <div class="hero w-full">
        <div class="w-full flex justify-center items-center ">
            <div class="w-full xl:w-1/3  md:w-1/2 sm:w-full   flex flex-col justify-center max-w-xl">

                <div class="hero-text my-10 text-center leading-none text-4xl md:text-5xl sm:text-5xl font-extrabold ">
       Үг бол нэршилийн мартагдсан сүнс юм. Нэршил хүчтэйн адилаар үг
                    <div class="bg-templateprimary-600">

                        <div class="slide-in" :key="currentWord">{{ currentWord }}</div>
                    </div>
                 

                </div>

                <!-- <SearchSuggesions /> -->
                <HomeSearch />
            </div>
        </div>
        <div class="flex justify-center gap-10 text-3xl">
            <div class="flex flex-col justify-center items-center">
                <div class="font-bold">1300+</div>
                <div>Толгой үг</div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="font-bold">17000+</div>
                <div>Нийт үг</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


definePageMeta({
    layout: "home",
});

const words = ["хүчтэй", "бядтай", "тэнхээтэй", "эрчтэй", "тамиртай", "дорвитой", "бяртай", "чадалтай"]
var currentIndex = ref(0)
var currentWord = ref('')

var animated = ref(false)
onMounted(() => {

    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % words.length;
    }, 3000)
})

currentWord = computed(() => {
    return words[currentIndex.value]
})

</script>


<style scoped>
/* .hero-text {
    font-family: "Player Display sans-serif";
    font-size: 70px;
    font-weight: 700;
} */



.hero {
    height: 87vh
}

.slide-in {
  animation: moveFromTop 1s ease-in-out;
}


@keyframes moveFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}


@keyframes slideInAnimation {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
}

@keyframes changeWord {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
      transform: translateY(50%);
    opacity: 0;
  }
}
</style>
