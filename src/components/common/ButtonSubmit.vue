<template>
    <button type="button" @click="emit('onClick')"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500 sm:mt-0 sm:w-auto">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
    const emit = defineEmits({
        onClick() { return true },
    })

    const props = defineProps<{
        text: String
    }>()
</script>