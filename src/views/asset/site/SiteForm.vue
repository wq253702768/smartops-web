<template>
  <FormDialog v-model="visible" :title="id ? 'Edit Site' : 'New Site'" @submit="onSubmit">
    <el-form :model="form" label-position="top">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Contact">
        <el-input v-model="form.contact" />
      </el-form-item>
      <el-form-item label="Manager">
        <el-input v-model="form.manager" />
      </el-form-item>
      <el-form-item label="Deployed Products">
        <el-select v-model="form.deployedProducts" multiple>
          <el-option label="Product A" value="A" />
          <el-option label="Product B" value="B" />
        </el-select>
      </el-form-item>
      <el-form-item label="Location">
        <el-input v-model="form.location" />
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="form.description" />
      </el-form-item>
    </el-form>
  </FormDialog>
</template>

<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import FormDialog from '@/components/FormDialog.vue'
import { siteApi } from '@/api'

const props = defineProps<{ modelValue: boolean; id: string | null }>()
const emit = defineEmits(['update:modelValue', 'refresh'])
const visible = ref(false)
const form = reactive({
  name: '',
  contact: '',
  manager: '',
  deployedProducts: [] as string[],
  location: '',
  description: '',
})

watchEffect(async () => {
  visible.value = props.modelValue
  if (props.id) {
    const res = await siteApi.detail(props.id)
    Object.assign(form, res.data)
  }
})

async function onSubmit() {
  if (props.id) {
    await siteApi.update(props.id, form)
  } else {
    await siteApi.create(form)
  }
  emit('update:modelValue', false)
  emit('refresh')
}
</script>

<style scoped>
</style>
