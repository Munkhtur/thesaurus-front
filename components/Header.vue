<template>

    <nav type="primary" class="flex gap-5 bg-grey-500 p-6 justify-between items-center" padded>
        <a slot="brand" class="navbar-brand justify-start" href="#">Navbar</a>
        <div class="w-1/2 z-10">

            <UButtonGroup size="xl" orientation="horizontal" class="w-full relative z-10">

                <UInput v-model="inputValue" icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white"
                    placeholder="Search..." @input="handleInput" class="w-full" variant="outline"
                    input-class="dark:focus:ring-none" />
                <UButton icon="i-heroicons-magnifying-glass-20-solid" class="px-5" />
                <SearchSuggesions :is-visible="open"
                    class="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1 bg-white text-black w-[102%] p-5 -z-10 rounded">
                    <ul class="mt-10">
                        <li>gdbdr</li>
                        <li>gdbdr</li>
                        <li>gdbdr</li>
                        <li>gdbdr</li>
                        <li>gdbdr</li>
                    </ul>
                </SearchSuggesions>
            </UButtonGroup>
        </div>
        <div></div>
    </nav>
</template>


<script setup lang="ts">
var open = ref(false)
var inputValue = ref('')


const handleInput = (event: any) => {
    var inputValue2 = event.target.value;
    console.log(event.target.value, "target")
    console.log(inputValue.value)
    if (inputValue2.length > 1) {
        open.value = true
    } else {
        open.value = false
    }
}

const people = [{
    id: 'benjamincanac',
    label: 'benjamincanac',
    href: 'https://github.com/benjamincanac',
    target: '_blank',
    // avatar: { src: 'https://avatars.githubusercontent.com/u/739984?v=4' }
}, {
    id: 'Atinux',
    label: 'Atinux',
    href: 'https://github.com/Atinux',
    target: '_blank',
    avatar: { src: 'https://avatars.githubusercontent.com/u/904724?v=4' }
}, {
    id: 'smarroufin',
    label: 'smarroufin',
    href: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
}, {
    id: 'nobody',
    label: 'Nobody',
    icon: 'i-heroicons-user-circle'
}]

const selected = ref({})
</script>