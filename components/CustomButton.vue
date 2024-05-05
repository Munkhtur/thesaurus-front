<template>
    <button :class="classes" @click="onClick">
        <slot></slot>
    </button>
</template>



<script setup lang="ts">

const onClick = () => {
    navigateTo(props.url)
}

const props = defineProps({
    url: String,
    level: {
        type: Number,
        default: 0
    }
});

const level = ref(0);
const classes = ref('');
level.value = props.level

const computedClasses = [
    'focus:outline-none text-white bg-templateprimary-800 hover:bg-templateprimary-900 focus:ring-4  focus:ring-templateprimary-900 font-semibold rounded-lg text-m px-4 py-2 mb-2 dark:bg-templateprimary-800  dark:hover:bg-templateprimary-900 dark:focus:ring-templateprimary-900',
    'focus:outline-none text-red-950 bg-templateprimary-500 hover:bg-templateprimary-600 focus:ring-4  focus:ring-templateprimary-900 font-semibold rounded-lg text-m px-4 py-2 mb-2 dark:bg-templateprimary-300  dark:hover:bg-templateprimary-600 dark:focus:ring-templateprimary-900',
    'focus:outline-none text-red-950 bg-templateprimary-300 hover:bg-templateprimary-300 focus:ring-4  focus:ring-templateprimary-900 font-semibold rounded-lg text-m px-4 py-2 mb-2 dark:bg-templateprimary-50  dark:hover:bg-templateprimary-300 dark:focus:ring-templateprimary-900',
    'focus:outline-none text-red-950 bg-templateprimary-50 hover:bg-templateprimary-300 focus:ring-4  focus:ring-templateprimary-900 font-semibold rounded-lg text-m px-4 py-2 mb-2 dark:bg-templateprimary-50  dark:hover:bg-templateprimary-300 dark:focus:ring-templateprimary-900',
]


classes.value = computedClasses[props.level]

</script>