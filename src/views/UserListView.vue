<script setup lang="ts">
import UsersList from '../components/UsersList.vue'
import UsersModalAdd from '@/components/UsersModalAdd.vue';
import ActionsGroup from '@/components/ActionsGroup.vue';
import { ref, type Ref } from 'vue';
import type { User, UserEdit } from '@/types/users';
import { useUsersStore } from '@/stores/users';
import UsersModalEdit from '@/components/UsersModalEdit.vue';

const showAdd = ref(false);
const showLastNames = ref(false);
const userEdit: Ref<User | null> = ref(null)

const usersStore = useUsersStore()

const onShowEdit = (id: string) => {
  userEdit.value = usersStore.users.find(user => user.id == id) || null
}
const onCancelEdit = () => {
  userEdit.value = null
}
const onEditUser = (id: string, user: UserEdit) => {
  const updateUser = usersStore.users.find(user => user.id == id)
  if (updateUser){
    const editabelUser: User = {
      firstName: user.firstName,
      id: id,
      imageUrl: user.imageUrl,
      lastName: user.lastName,
      roleId: updateUser.roleId,
      phoneNumber: user.phoneNumber
    }
    usersStore.updateUser(editabelUser)
  }
  userEdit.value = null
}

const onShowAdd = () => {
  showAdd.value = true
}
const onCancelAdd = () => {
  showAdd.value = false
}
const onAddUser = (user: User) => {
  usersStore.addUser(user)
  showAdd.value = false
}
const onShowLastName = (show: boolean) => {
  showLastNames.value = show
}
</script>

<template>
  <ActionsGroup @on-show-add="onShowAdd" @on-show-last-name="onShowLastName" />
  <hr />
  <UsersList :show-last-names="showLastNames" @on-show-edit="onShowEdit" />
  <UsersModalAdd v-if="showAdd" @on-cancel="onCancelAdd" @on-add="onAddUser" />

  <UsersModalEdit v-if="userEdit != null" @on-cancel="onCancelEdit" @on-edit="onEditUser"  :user="{...userEdit}" />
</template>
