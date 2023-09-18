<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        </div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
                            <div>
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                    Имя
                                </label>
                                <div class="mt-1">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        v-model="props.user.firstName"
                                        class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                                    Фамилия
                                </label>
                                <div class="mt-1">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        v-model="props.user.lastName"
                                        class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3 mt-2">
                            <label for="role" class="block text-sm font-medium leading-6 text-gray-900">
                                Роль
                            </label>
                            <div class="mt-1">
                                <input type="text" name="role" id="role" autocomplete="family-name" disabled
                                    v-model="roleName"
                                    class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div v-if="props.user.roleId == '2'" class="sm:col-span-3 mt-2">
                            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">
                                Номер телефона
                            </label>
                            <div class="mt-1">
                                <input id="phone" name="phone" type="phone" autocomplete="phone"
                                    v-model="props.user.phoneNumber"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="col-span-full mt-2">
                            <label for="file-upload" class="block text-sm font-medium leading-6 text-gray-900">
                                Загрузить фото
                            </label>
                            <div
                                class="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <img class="mx-auto h-20 w-20 flex-none rounded-full bg-gray-50"
                                        :src="props.user.imageUrl" alt="" />
                                    <div class="mt-2 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>
                                                Выбрать фото
                                            </span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only"
                                                @input="onImageUpload">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gap-2 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <ButtonSubmit :text="'Изменить'" @on-click="emit('onEdit', props.user.id, props.user)" />
                        <ButtonDefault :text="'Отмена'" @on-click="emit('onCancel')" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { UserRole } from '@/types/roles';
import type { User, UserEdit } from '@/types/users';
import { inject } from 'vue';
import ButtonDefault from './common/ButtonDefault.vue';
import ButtonSubmit from './common/ButtonSubmit.vue'

const roles: UserRole[] = inject('roles') || [];

const emit = defineEmits({
    onCancel() { return true },
    onEdit(id: string, user: UserEdit) { return true },
})

const roleName: string | undefined = roles.find(r => r.id == props.user.roleId)?.role

const props = defineProps<{
    user: User
}>()

const onImageUpload = (event: any) => {
    props.user.imageUrl = URL.createObjectURL(event.target.files[0])
}

</script>