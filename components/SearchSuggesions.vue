<template>
    <div v-if="isVisible" class="modal transition-opacity">
        <div class="modal-content">
            <!-- Modal content goes here -->
            <slot></slot>
        </div>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    isVisible: Boolean,
});
</script>