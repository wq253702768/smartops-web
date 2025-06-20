<template>
  <FormDialog :title="data?.id ? 'Edit Customer' : 'Add Customer'" v-model:visible="visible" @ok="onSubmit">
    <el-form :model="form" ref="formRef">
      <el-form-item label="Name" prop="name" :rules="{ required: true, message: 'Required' }">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="SLA" prop="slaLevel">
        <el-input v-model="form.slaLevel" />
      </el-form-item>
      <el-form-item label="Level" prop="level">
        <el-input v-model="form.level" />
      </el-form-item>
      <el-form-item label="Contract" prop="contract">
        <el-input v-model="form.contract" />
      </el-form-item>
      <el-form-item label="Fee" prop="feeInfo">
        <el-input v-model="form.feeInfo" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useCreateCustomer, useUpdateCustomer } from '../api'
import FormDialog from '@/components/FormDialog.vue'

interface Props { visible: boolean; data?: any }
const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'saved'])

const formRef = ref()
const form = ref({
  name: '',
  slaLevel: '',
  level: '',
  contract: '',
  feeInfo: '',
})

watch(
  () => props.data,
  val => {
    if (val) Object.assign(form.value, val)
  },
  { immediate: true }
)

const { mutateAsync: create } = useCreateCustomer()
const { mutateAsync: update } = useUpdateCustomer()

const onSubmit = async () => {
  if (!formRef.value) return
  const method = props.data?.id ? update({ id: props.data.id, data: form.value }) : create(form.value)
  await method
  emit('update:visible', false)
  emit('saved')
}
</script>
