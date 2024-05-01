<template>

    <div class="h-screen w-full">
        <div class="w-full flex justify-center items-center h-60">
            <div class="w-full xl:w-1/3  md:w-1/2 sm:w-full   ">

                <SearchSuggesions />
            </div>
        </div>
        <h1>Welcome to the homepage</h1>

        This is an auto-imported component
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>

    </div>
</template>

<script setup lang="ts">


definePageMeta({
    layout: "home",
});

</script>
