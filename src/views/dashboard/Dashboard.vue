<template>
  <div class="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <el-card v-for="kpi in kpis" :key="kpi.label" class="text-center">
      <div class="text-xl">{{ kpi.value }}</div>
      <div class="text-gray-500">{{ kpi.label }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

interface Kpi { label: string; value: number }

const { data: kpis } = useQuery<Kpi[]>({
  queryKey: ['kpis'],
  queryFn: () => axios.get('/api/kpis').then(res => res.data),
})
</script>

<style scoped>
</style>
