<template>

    <nav type="primary" class="flex gap-5  p-6 justify-between items-center sticky top-0 w-full z-10 bg-eerie_black">
        <a slot="brand" class="navbar-brand justify-start text-white" @click="navigateTo('/')">Logo</a>
        <div class="w-full xl:w-1/3  md:w-1/2 sm:w-full  z-10">
            <SearchSuggesions />
        </div>
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            " color="gray" size="md" variant="solid" @click="isDark = !isDark" />
    </nav>
</template>


<script setup lang="ts">
const colorMode = useColorMode();


const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>