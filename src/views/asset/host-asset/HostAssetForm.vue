<template>
  <FormDialog v-model="visible" :title="id ? 'Edit Host Asset' : 'New Host Asset'" @submit="onSubmit">
    <el-form :model="form" label-position="top">
      <el-form-item label="Hostname">
        <el-input v-model="form.hostname" />
      </el-form-item>
      <el-form-item label="IP">
        <el-input v-model="form.ip" />
      </el-form-item>
      <el-form-item label="OS">
        <el-input v-model="form.os" />
      </el-form-item>
      <el-form-item label="Status">
        <el-input v-model="form.status" />
      </el-form-item>
      <el-form-item label="Site">
        <el-input v-model="form.siteName" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import FormDialog from '@/components/FormDialog.vue'
import { hostAssetApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)
const form = reactive({ hostname: '', ip: '', os: '', status: '', siteName: '' })

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await hostAssetApi.list({ id: props.id })
    Object.assign(form, res.data)
  }
})

async function onSubmit() {
  if (props.id) {
    await hostAssetApi.update(props.id, form)
  } else {
    await hostAssetApi.create(form)
  }
  emit('update:modelValue', false)
  emit('refresh')
}
</script>

<style scoped>
</style>
