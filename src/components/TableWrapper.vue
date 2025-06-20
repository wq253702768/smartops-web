<template>
  <el-table v-bind="$attrs" :data="data">
    <slot />
  </el-table>
  <el-pagination
    v-if="pagination"
    class="mt-4"
    layout="total, prev, pager, next"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    @current-change="pagination.onChange"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Pagination {
  pageSize: number
  total: number
  onChange: (page: number) => void
}

defineProps<{ data: any[]; pagination?: Pagination }>()
</script>
