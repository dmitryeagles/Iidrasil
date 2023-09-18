import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/users'

const initUsers: User[] = [
    {
        id: '1',
        firstName: 'Leslie',
        lastName: 'Alexander',
        roleId: '2',
        phoneNumber: '+7-999-000-00-00',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: '2',
        firstName: 'Michael',
        lastName: 'Foster',
        roleId: '1',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: '3',
        firstName: 'Dries',
        lastName: 'Vincent',
        roleId: '1',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export const useUsersStore = defineStore('users', () => {
    const users: Ref<User[]> = ref(initUsers)

    const deleteUser = (id: string) => {
        users.value = users.value.filter((el)=>el.id != id)
    }

    const updateUser = (user: User) => {
        
        const existingIdx = users.value.findIndex(u => u.id == user.id)
        if(existingIdx >= 0){
            users.value[existingIdx] = user
        }
    }

    const addUser = (user: User) => {
        users.value.push(user)
    }

    return {
        users: users,
        updateUser: updateUser,
        deleteUser:deleteUser,
        addUser: addUser,
    }
})
