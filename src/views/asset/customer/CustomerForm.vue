<template>
  <FormDialog v-model="visible" :title="id ? 'Edit Customer' : 'New Customer'" @submit="onSubmit">
    <el-form :model="form" label-position="top">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Contact">
        <el-input v-model="form.contact" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import FormDialog from '@/components/FormDialog.vue'
import { customerApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)
const form = reactive({ name: '', contact: '' })

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await customerApi.detail(props.id)
    Object.assign(form, res.data)
  }
})

async function onSubmit() {
  if (props.id) {
    await customerApi.update(props.id, form)
  } else {
    await customerApi.create(form)
  }
  emit('update:modelValue', false)
  emit('refresh')
}
</script>

<style scoped>
</style>
