<template>
  <TableWrapper :data="items" :pagination="pagination" @update:page="onPageChange">
    <el-table-column prop="hostname" label="Hostname" />
    <el-table-column prop="ip" label="IP" />
    <el-table-column prop="os" label="OS" />
    <el-table-column prop="status" label="Status" />
    <el-table-column prop="siteName" label="Site" />
    <el-table-column label="Actions">
      <template #default="{ row }">
        <el-button size="small" @click="openEdit(row.id)">Edit</el-button>
        <el-button size="small" type="danger" @click="openDelete(row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </TableWrapper>
  <HostAssetForm v-model="showForm" :id="currentId" @refresh="fetchData" />
  <HostAssetDeleteDialog v-model="showDelete" :id="currentId" @refresh="fetchData" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TableWrapper from '@/components/TableWrapper.vue'
import HostAssetForm from './HostAssetForm.vue'
import HostAssetDeleteDialog from './HostAssetDeleteDialog.vue'
import { hostAssetApi } from '@/api'
import { usePaginated } from '@/composables/usePaginated'

const { data: items, page, pageSize, total, setResult } = usePaginated<any>()
const pagination = { page, pageSize, total }
const showForm = ref(false)
const showDelete = ref(false)
const currentId = ref<string | null>(null)

async function fetchData() {
  const res = await hostAssetApi.list({ page: page.value, pageSize: pageSize.value })
  setResult({ items: res.data.items, total: res.data.total })
}

function onPageChange(p: number) {
  page.value = p
  fetchData()
}

function openEdit(id: string) {
  currentId.value = id
  showForm.value = true
}

function openDelete(id: string) {
  currentId.value = id
  showDelete.value = true
}

onMounted(fetchData)
</script>

<style scoped>
</style>
