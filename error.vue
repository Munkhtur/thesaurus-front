<template>
    <NuxtLayout name="404">
        <div class="w-full h-screen flex justify-center items-center">
            <div class="text-center flex flex-col gap-10">
                <h1 class="text-9xl font-bold">404</h1>
                <p>Хуудас олдсонгүй: {{ $route.path }}</p>
                <div>

                    <UButton size="lg" variant="outline" @click="goBack">Буцах</UButton>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push('/')
        }
    }
}
</script>
