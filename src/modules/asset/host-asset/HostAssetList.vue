<template>
  <div>
    <el-select v-model="status" placeholder="Status" class="mb-2 mr-2">
      <el-option label="All" value="" />
      <el-option label="online" value="online" />
      <el-option label="offline" value="offline" />
    </el-select>
    <el-select v-model="os" placeholder="OS" class="mb-2 mr-2">
      <el-option label="All" value="" />
      <el-option label="Windows" value="Windows" />
      <el-option label="Linux" value="Linux" />
    </el-select>
    <el-select v-if="props.siteId === undefined" v-model="siteId" placeholder="Site" class="mb-2 mr-2">
      <el-option label="All" value="" />
      <el-option v-for="s in sites" :key="s.id" :label="s.name" :value="s.id" />
    </el-select>
    <el-input v-model="search" placeholder="Search" class="mb-2" />
    <el-button type="primary" class="mb-2" @click="openForm">Add</el-button>
    <TableWrapper :data="list" :pagination="{ pageSize, total, onChange }">
      <el-table-column prop="hostname" label="Hostname" />
      <el-table-column prop="ip" label="IP" />
      <el-table-column prop="os" label="OS" />
      <el-table-column prop="status" label="Status" />
      <el-table-column prop="siteName" label="Site" />
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button size="small" @click="edit(row)">Edit</el-button>
          <el-button size="small" type="danger" @click="remove(row)">Delete</el-button>
        </template>
      </el-table-column>
    </TableWrapper>
    <HostAssetForm v-model:visible="formVisible" :data="current" @saved="refetch" />
    <HostAssetDeleteDialog v-model:visible="deleteVisible" :data="current" @confirm="doDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
import { useHostAssetList, useDeleteHostAsset, useSiteList } from '../api'
import TableWrapper from '@/components/TableWrapper.vue'
import HostAssetForm from './HostAssetForm.vue'
import HostAssetDeleteDialog from './HostAssetDeleteDialog.vue'
import { usePaginated } from '@/composables/usePaginated'

const props = defineProps<{ siteId?: number }>()
const siteId = ref(props.siteId ?? '')
const status = ref('')
const os = ref('')
const search = ref('')
const { data: sites } = useSiteList()
const { page, pageSize, total, setTotal, onChange } = usePaginated()
const { data, refetch } = useHostAssetList({ status, os, search, siteId, page, pageSize })
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

const { mutate } = useDeleteHostAsset()
const doDelete = () => {
  mutate(current.value.id)
  deleteVisible.value = false
}
</script>
