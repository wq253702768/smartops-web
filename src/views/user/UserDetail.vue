<template>
  <el-drawer v-model="visible" :with-header="false" size="400px">
    <el-descriptions :title="user?.username" column="1">
      <el-descriptions-item label="Email">{{ user?.email }}</el-descriptions-item>
      <el-descriptions-item label="Role">{{ user?.role }}</el-descriptions-item>
    </el-descriptions>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { userApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue'])
const visible = ref(false)
const user = ref<any>()

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await userApi.detail(props.id)
    user.value = res.data
  }
})
</script>

<style scoped>
</style>
