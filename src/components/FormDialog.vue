<template>
  <el-dialog v-model="visible" :title="title" width="500px" @close="onClose">
    <slot />
    <template #footer>
      <el-button @click="visible = false">Cancel</el-button>
      <el-button type="primary" @click="onSubmit">Confirm</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{ modelValue: boolean; title: string }>()
const emit = defineEmits(['update:modelValue', 'submit'])

const visible = ref(props.modelValue)

watchEffect(() => {
  visible.value = props.modelValue
})

function onClose() {
  emit('update:modelValue', false)
}

function onSubmit() {
  emit('submit')
}
</script>

<style scoped>
</style>
