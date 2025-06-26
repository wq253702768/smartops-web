<template>
  <TableWrapper :data="users" :pagination="pagination" @update:page="onPageChange">
    <el-table-column prop="username" label="Username" />
    <el-table-column prop="email" label="Email" />
    <el-table-column label="Actions">
      <template #default="{ row }">
        <el-button size="small" @click="openDetail(row.id)">Detail</el-button>
        <el-button size="small" @click="openEdit(row.id)">Edit</el-button>
        <el-button size="small" type="danger" @click="openDelete(row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </TableWrapper>
  <UserForm v-model="showForm" :id="currentId" @refresh="fetchUsers" />
  <UserDeleteDialog v-model="showDelete" :id="currentId" @refresh="fetchUsers" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TableWrapper from '@/components/TableWrapper.vue'
import UserForm from './UserForm.vue'
import UserDeleteDialog from './UserDeleteDialog.vue'
import { userApi } from '@/api'
import { usePaginated } from '@/composables/usePaginated'

const { data: users, page, pageSize, total, setResult } = usePaginated<any>()
const pagination = { page, pageSize, total }
const showForm = ref(false)
const showDelete = ref(false)
const currentId = ref<string | null>(null)

async function fetchUsers() {
  const res = await userApi.list({ page: page.value, pageSize: pageSize.value })
  setResult({ items: res.data.items, total: res.data.total })
}

function onPageChange(p: number) {
  page.value = p
  fetchUsers()
}

function openDetail(id: string) {
  currentId.value = id
  showForm.value = true
}

function openEdit(id: string) {
  currentId.value = id
  showForm.value = true
}

function openDelete(id: string) {
  currentId.value = id
  showDelete.value = true
}

onMounted(fetchUsers)
</script>

<style scoped>
</style>
