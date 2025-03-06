<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    layout: "horizontal" | "vertical";
}>();

const containerClass = computed(() => {
    return {
        "flex flex-row": props.layout === "horizontal",
        "flex flex-col": props.layout === "vertical",
        "gap-4 p-4 rounded shadow bg-white": true,
    };
})
</script>

<template>
    <div :class="containerClass">
        <div class="flex flex-col justify-center">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>