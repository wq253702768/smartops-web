<template>
  <div>
    <el-select v-model="customerId" placeholder="Customer" class="mb-2 mr-2">
      <el-option label="All" value="" />
      <el-option v-for="c in customers" :key="c.id" :label="c.name" :value="c.id" />
    </el-select>
    <el-input v-model="search" placeholder="Search" class="mb-2" />
    <el-button type="primary" class="mb-2" @click="openForm">Add</el-button>
    <TableWrapper :data="list" :pagination="{ pageSize, total, onChange }">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="customerName" label="Customer" />
      <el-table-column prop="contact" label="Contact" />
      <el-table-column prop="manager" label="Manager" />
      <el-table-column prop="location" label="Location" />
      <el-table-column prop="deployedProducts" label="Products" />
      <el-table-column prop="description" label="Description" />
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button size="small" @click="edit(row)">Edit</el-button>
          <el-button size="small" type="danger" @click="remove(row)">Delete</el-button>
          <el-button size="small" type="primary" @click="view(row)">Detail</el-button>
        </template>
      </el-table-column>
    </TableWrapper>
    <SiteForm v-model:visible="formVisible" :data="current" @saved="refetch" />
    <SiteDeleteDialog v-model:visible="deleteVisible" :data="current" @confirm="doDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
import { useSiteList, useDeleteSite, useCustomerList } from '../api'
import { useRouter } from 'vue-router'
import TableWrapper from '@/components/TableWrapper.vue'
import SiteForm from './SiteForm.vue'
import SiteDeleteDialog from './SiteDeleteDialog.vue'
import { usePaginated } from '@/composables/usePaginated'

const props = defineProps<{ customerId?: number }>()
const customerId = ref(props.customerId ?? '')
const search = ref('')
const { data: customers } = useCustomerList()
const { page, pageSize, total, setTotal, onChange } = usePaginated()
const { data, refetch } = useSiteList({ search, customerId, page, pageSize })
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

const { mutate } = useDeleteSite()
const doDelete = () => {
  mutate(current.value.id)
  deleteVisible.value = false
}

const router = useRouter()
const view = (row: any) => {
  router.push(`/asset/site/${row.id}`)
}
</script>
