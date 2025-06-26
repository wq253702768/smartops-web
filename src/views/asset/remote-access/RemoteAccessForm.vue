<template>
  <FormDialog v-model="visible" :title="id ? 'Edit Access' : 'New Access'" @submit="onSubmit">
    <el-form :model="form" label-position="top">
      <el-form-item label="Host">
        <el-input v-model="form.host" />
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input :type="showPassword ? 'text' : 'password'" v-model="form.password" />
        <el-button @click="showPassword = !showPassword" size="small" class="ml-2">{{ showPassword ? 'Hide' : 'Show' }}</el-button>
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import FormDialog from '@/components/FormDialog.vue'
import { remoteAccessApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)
const showPassword = ref(false)
const form = reactive({ host: '', username: '', password: '' })

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await remoteAccessApi.list({ id: props.id })
    Object.assign(form, res.data)
  }
})

async function onSubmit() {
  if (props.id) {
    await remoteAccessApi.update(props.id, form)
  } else {
    await remoteAccessApi.create(form)
  }
  emit('update:modelValue', false)
  emit('refresh')
}
</script>

<style scoped>
</style>
