<template>
  <el-dialog v-model="visible" :title="title" @close="onClose">
    <slot />
    <template #footer>
      <el-button @click="onClose">Cancel</el-button>
      <el-button type="primary" @click="onOk">OK</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ title: string; visible: boolean }>()
const emit = defineEmits(['update:visible', 'ok'])

const onClose = () => emit('update:visible', false)
const onOk = () => emit('ok')
</script>
