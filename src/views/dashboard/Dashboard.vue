<template>
  <div v-if="loading">加载中…</div>
  <div v-else-if="data" class="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <el-card v-for="(value, key) in data" :key="key" class="text-center">
      <div class="text-xl">{{ value }}</div>
      <div class="text-gray-500">{{ key }}</div>
    </el-card>
  </div>
  <div v-else>暂无数据</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const data = ref<Record<string, number> | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('/api/kpis')
    data.value = res.data
  } catch (err) {
    ElMessage.error('获取 KPI 数据失败，请稍后重试')
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
</style>
