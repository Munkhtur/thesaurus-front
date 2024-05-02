<template>
    <div
        class=" bg-gradient-to-r from-linen  to-linen-50 dark:bg-gradient-to-br dark:from-eerie_black dark:to-gray-900">
        <HomeHeader />
        <div class="w-full ">

            <slot />
        </div>

        <AppFooter />
    </div>
</template>