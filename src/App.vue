<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router'
import { rolesList } from '@/service/roles'

provide('roles', rolesList)
</script>

<template>
  <div class="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="w-6/12 isolate -space-x-px rounded-md shadow-sm">
      <RouterView />
    </div>
  </div>
</template>