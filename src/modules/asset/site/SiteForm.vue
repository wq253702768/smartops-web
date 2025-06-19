<template>
  <FormDialog :title="data?.id ? 'Edit Site' : 'Add Site'" v-model:visible="visible" @ok="onSubmit">
    <el-form :model="form" ref="formRef">
      <el-form-item label="Customer" prop="customerId" :rules="{ required: true, message: 'Required' }">
        <el-select v-model="form.customerId">
          <el-option v-for="c in customers" :key="c.id" :label="c.name" :value="c.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="Name" prop="name" :rules="{ required: true, message: 'Required' }">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Contact" prop="contact">
        <el-input v-model="form.contact" />
      </el-form-item>
      <el-form-item label="Manager" prop="manager">
        <el-input v-model="form.manager" />
      </el-form-item>
      <el-form-item label="Location" prop="location">
        <el-input v-model="form.location" />
      </el-form-item>
      <el-form-item label="Products" prop="deployedProducts">
        <el-select v-model="form.deployedProducts" multiple filterable>
          <el-option label="PACS" value="PACS" />
          <el-option label="RIS" value="RIS" />
        </el-select>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="form.description" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useCreateSite, useUpdateSite, useCustomerList } from '../api'
import FormDialog from '@/components/FormDialog.vue'

interface Props { visible: boolean; data?: any }
const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'saved'])

const formRef = ref()
const form = ref({
  customerId: undefined,
  name: '',
  contact: '',
  manager: '',
  location: '',
  deployedProducts: [] as string[],
  description: '',
})

watch(
  () => props.data,
  val => {
    if (val) Object.assign(form.value, val)
  },
  { immediate: true }
)

const { data: customers } = useCustomerList()
const { mutateAsync: create } = useCreateSite()
const { mutateAsync: update } = useUpdateSite()

const onSubmit = async () => {
  const method = props.data?.id ? update({ id: props.data.id, data: form.value }) : create(form.value)
  await method
  emit('update:visible', false)
  emit('saved')
}
</script>
