<template>
  <FormDialog :title="data?.id ? 'Edit Host' : 'Add Host'" v-model:visible="visible" @ok="onSubmit">
    <el-form :model="form" ref="formRef">
      <el-form-item label="Site" prop="siteId" :rules="{ required: true, message: 'Required' }">
        <el-select v-model="form.siteId">
          <el-option v-for="s in sites" :key="s.id" :label="s.name" :value="s.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="Hostname" prop="hostname" :rules="{ required: true, message: 'Required' }">
        <el-input v-model="form.hostname" />
      </el-form-item>
      <el-form-item label="IP" prop="ip">
        <el-input v-model="form.ip" />
      </el-form-item>
      <el-form-item label="OS" prop="os">
        <el-input v-model="form.os" />
      </el-form-item>
      <el-form-item label="Status" prop="status">
        <el-select v-model="form.status">
          <el-option label="online" value="online" />
          <el-option label="offline" value="offline" />
        </el-select>
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useCreateHostAsset, useUpdateHostAsset, useSiteList } from '../api'
import FormDialog from '@/components/FormDialog.vue'

interface Props { visible: boolean; data?: any }
const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'saved'])

const formRef = ref()
const form = ref({
  siteId: undefined,
  hostname: '',
  ip: '',
  os: '',
  status: 'online',
})

watch(
  () => props.data,
  val => {
    if (val) Object.assign(form.value, val)
  },
  { immediate: true }
)

const { data: sites } = useSiteList()
const { mutateAsync: create } = useCreateHostAsset()
const { mutateAsync: update } = useUpdateHostAsset()

const onSubmit = async () => {
  const method = props.data?.id ? update({ id: props.data.id, data: form.value }) : create(form.value)
  await method
  emit('update:visible', false)
  emit('saved')
}
</script>
