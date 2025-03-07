<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    label: string;
    severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    disabled?: boolean;
}>();

const severity = computed(()=> {
    const baseClass = "px-4 py-2 rounded";
    const severityMap: Record<string, string> = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600"
    };

    return `${baseClass} ${severityMap[props.severity || 'primary']}`;
})

const button = computed(() => [
    severity.value,
    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
])

</script>

<template>
    <div>
        <button :class="button" type="button" :disabled="disabled">
            {{ label }}
        </button>
    </div>
</template>

<style scoped>

</style>