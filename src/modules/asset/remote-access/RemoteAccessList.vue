<template>
  <div>
    <el-select v-model="type" placeholder="Type" class="mb-2">
      <el-option label="All" value="" />
      <el-option label="SSH" value="SSH" />
      <el-option label="RDP" value="RDP" />
      <el-option label="VNC" value="VNC" />
    </el-select>
    <el-input v-model="search" placeholder="Search" class="mb-2" />
    <el-button type="primary" class="mb-2" @click="openForm">Add</el-button>
    <TableWrapper :data="list" :pagination="{ pageSize, total, onChange }">
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="host" label="Host" />
      <el-table-column prop="port" label="Port" />
      <el-table-column prop="username" label="User" />
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button size="small" @click="edit(row)">Edit</el-button>
          <el-button size="small" type="danger" @click="remove(row)">Delete</el-button>
        </template>
      </el-table-column>
    </TableWrapper>
    <RemoteAccessForm v-model:visible="formVisible" :data="current" @saved="refetch" />
    <RemoteAccessDeleteDialog v-model:visible="deleteVisible" :data="current" @confirm="doDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRemoteAccessList, useDeleteRemoteAccess } from '../api'
import TableWrapper from '@/components/TableWrapper.vue'
import RemoteAccessForm from './RemoteAccessForm.vue'
import RemoteAccessDeleteDialog from './RemoteAccessDeleteDialog.vue'
import { usePaginated } from '@/composables/usePaginated'

const type = ref('')
const search = ref('')
const { page, pageSize, total, setTotal, onChange } = usePaginated()
const { data, refetch } = useRemoteAccessList({ type, search, page, pageSize })
watch(data, () => setTotal(data.value?.length || 0))

const list = data
const formVisible = ref(false)
const deleteVisible = ref(false)
const current = ref()

const openForm = () => {
  current.value = undefined
  formVisible.value = true
}

const edit = (row: any) => {
  current.value = row
  formVisible.value = true
}

const remove = (row: any) => {
  current.value = row
  deleteVisible.value = true
}

const { mutate } = useDeleteRemoteAccess()
const doDelete = () => {
  mutate(current.value.id)
  deleteVisible.value = false
}
</script>
