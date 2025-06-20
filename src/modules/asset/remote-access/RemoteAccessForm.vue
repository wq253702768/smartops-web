<template>
  <FormDialog :title="data?.id ? 'Edit Remote Access' : 'Add Remote Access'" v-model:visible="visible" @ok="onSubmit">
    <el-form :model="form" ref="formRef">
      <el-form-item label="Type" prop="type" :rules="{ required: true, message: 'Required' }">
        <el-select v-model="form.type">
          <el-option label="SSH" value="SSH" />
          <el-option label="RDP" value="RDP" />
          <el-option label="VNC" value="VNC" />
        </el-select>
      </el-form-item>
      <el-form-item label="Host" prop="host">
        <el-input v-model="form.host" />
      </el-form-item>
      <el-form-item label="Port" prop="port">
        <el-input v-model="form.port" />
      </el-form-item>
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Password" prop="passwordEncrypted">
        <el-input :type="showPassword ? 'text' : 'password'" v-model="form.passwordEncrypted">
          <template #suffix>
            <el-button text @click="showPassword = !showPassword">{{ showPassword ? 'Hide' : 'Show' }}</el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useCreateRemoteAccess, useUpdateRemoteAccess } from '../api'
import FormDialog from '@/components/FormDialog.vue'

interface Props { visible: boolean; data?: any }
const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'saved'])

const formRef = ref()
const showPassword = ref(false)
const form = ref({
  type: 'SSH',
  host: '',
  port: 22,
  username: '',
  passwordEncrypted: '',
})

watch(
  () => props.data,
  val => {
    if (val) Object.assign(form.value, val)
  },
  { immediate: true }
)

const { mutateAsync: create } = useCreateRemoteAccess()
const { mutateAsync: update } = useUpdateRemoteAccess()

const onSubmit = async () => {
  const method = props.data?.id ? update({ id: props.data.id, data: form.value }) : create(form.value)
  await method
  emit('update:visible', false)
  emit('saved')
}
</script>
