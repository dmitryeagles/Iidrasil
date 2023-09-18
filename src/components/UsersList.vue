<template>
    <ul role="list" class="divide-y divide-gray-100 w-50">
        <li v-for="user in usersStore.users" :key="user.id" class="flex justify-between gap-x-6 py-1 mb-3">
            <div class="flex min-w-0 gap-x-4">
                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="user.imageUrl" alt="" />
                <div class="min-w-0 flex-auto">
                    <div class="flex gap-x-1">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                            {{ user.firstName }}
                        </p>
                        <p v-if="props.showLastNames" class="text-sm font-semibold leading-6 text-gray-900">
                            {{ user.lastName }}
                        </p>
                    </div>
                    <p class="text-sm leading-6 text-gray-900">
                        {{ roles.find(r => r.id == user.roleId)?.role }}
                    </p>
                </div>
                <div v-if=user.phoneNumber class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                        Номер телефона:
                    </p>
                    <p class="text-sm leading-6 text-gray-500">
                        {{ user.phoneNumber }}
                    </p>
                </div>
            </div>
            <div class="flex items-center">
                <!-- Изменить -->
                <button type="button" @click="emit('onShowEdit', user.id)"
                    class="inline-flex mr-2 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
                <!-- Удалить -->
                <button type="button" @click="usersStore.deleteUser(user.id)"
                    class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-50">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
import type { UserRole } from '@/types/roles';
import { inject } from 'vue';

const roles: UserRole[] = inject('roles') || []

const emit = defineEmits({
    onShowEdit(id: string) { return true },
})


const usersStore = useUsersStore()

const props = defineProps({
    showLastNames: Boolean,
})

</script>



