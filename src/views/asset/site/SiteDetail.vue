<template>
  <el-drawer v-model="visible" :with-header="false" size="400px">
    <el-descriptions :title="site?.name" column="1">
      <el-descriptions-item label="Contact">{{ site?.contact }}</el-descriptions-item>
      <el-descriptions-item label="Manager">{{ site?.manager }}</el-descriptions-item>
      <el-descriptions-item label="Location">{{ site?.location }}</el-descriptions-item>
      <el-descriptions-item label="Description">{{ site?.description }}</el-descriptions-item>
    </el-descriptions>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { siteApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue'])
const visible = ref(false)
const site = ref<any>()

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await siteApi.detail(props.id)
    site.value = res.data
  }
})
</script>

<style scoped>
</style>
