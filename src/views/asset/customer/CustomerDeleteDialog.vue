<template>
  <el-dialog v-model="visible" title="Confirm" width="300px">
    <span>Are you sure to delete this customer?</span>
    <template #footer>
      <el-button @click="visible = false">Cancel</el-button>
      <el-button type="danger" @click="onDelete">Delete</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { customerApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)

watchEffect(() => {
  visible.value = props.modelValue
})

async function onDelete() {
  if (props.id) {
    await customerApi.delete(props.id)
    emit('refresh')
  }
  emit('update:modelValue', false)
}
</script>

<style scoped>
</style>
