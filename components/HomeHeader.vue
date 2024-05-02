<template>

    <nav type="primary" class="flex gap-5  p-2 justify-around items-center dark:bg-eerie_black">
        <a slot="brand" class="navbar-brand justify-start" href="/">Navbar</a>

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