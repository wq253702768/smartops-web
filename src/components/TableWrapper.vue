<template>
  <div class="p-4">
    <el-table :data="data" border class="w-full" v-bind="$attrs">
      <slot />
    </el-table>
    <div class="flex justify-end mt-2">
      <el-pagination
        v-if="pagination"
        background
        layout="prev, pager, next"
        :total="pagination.total"
        :current-page="pagination.page"
        :page-size="pagination.pageSize"
        @current-change="onPageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Pagination {
  page: number
  pageSize: number
  total: number
}

const props = defineProps<{ data: any[]; pagination?: Pagination }>()
const emit = defineEmits(['update:page'])

function onPageChange(page: number) {
  emit('update:page', page)
}
</script>

<style scoped>
</style>
