<template>
  <FormDialog v-model="visible" :title="id ? 'Edit User' : 'New User'" @submit="onSubmit">
    <el-form :model="form" label-position="top">
      <el-form-item label="Username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Role">
        <el-input v-model="form.role" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import FormDialog from '@/components/FormDialog.vue'
import { userApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)
const form = reactive({ username: '', email: '', role: '' })

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await userApi.detail(props.id)
    Object.assign(form, res.data)
  }
})

async function onSubmit() {
  if (props.id) {
    await userApi.update(props.id, form)
  } else {
    await userApi.create(form)
  }
  emit('update:modelValue', false)
  emit('refresh')
}
</script>

<style scoped>
</style>
