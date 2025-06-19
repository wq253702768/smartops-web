<template>
  <div>
    <el-input v-model="search" placeholder="Search" class="mb-2" />
    <el-button type="primary" class="mb-2" @click="openForm">Add</el-button>
    <TableWrapper :data="list" :pagination="{ pageSize: pageSize, total: total, onChange }">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="slaLevel" label="SLA" />
      <el-table-column prop="level" label="Level" />
      <el-table-column prop="contract" label="Contract" />
      <el-table-column prop="feeInfo" label="Fee" />
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button size="small" @click="edit(row)">Edit</el-button>
          <el-button size="small" type="danger" @click="remove(row)">Delete</el-button>
        </template>
      </el-table-column>
    </TableWrapper>
    <CustomerForm v-model:visible="formVisible" :data="current" @saved="refetch" />
    <CustomerDeleteDialog v-model:visible="deleteVisible" :data="current" @confirm="doDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCustomerList, useDeleteCustomer } from '../api'
import TableWrapper from '@/components/TableWrapper.vue'
import CustomerForm from './CustomerForm.vue'
import CustomerDeleteDialog from './CustomerDeleteDialog.vue'
import { usePaginated } from '@/composables/usePaginated'

const search = ref('')
const { page, pageSize, total, setTotal, onChange } = usePaginated()
const { data, refetch } = useCustomerList({ search, page, pageSize })
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

const { mutate } = useDeleteCustomer()
const doDelete = () => {
  mutate(current.value.id)
  deleteVisible.value = false
}
</script>
