<template>
    <div class="flex items-center mb-2 justify-between">
        <ButtonDefault
            :text="'Добавить пользователя'"
            @on-click="emit('onShowAdd')"
        />
        <div class="flex text-sm leading-6 items-center ml-2">
            <label for="comments" class="font-medium text-gray-900">
                Показывать фамилии
            </label>
            <input id="comments" name="comments" type="checkbox" v-model="showLastNames"
                @change="emit('onShowLastName', showLastNames)"
                class="ml-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonDefault from './common/ButtonDefault.vue';


const emit = defineEmits({
    onShowAdd() { return true },
    onShowLastName(show: boolean) {
        return true
    }
})

const showLastNames = ref(false)

</script>