<template>
  <FormDialog title="Delete Remote Access" v-model:visible="visible" @ok="confirm">
    Are you sure to delete {{ data?.host }}?
  </FormDialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import FormDialog from '@/components/FormDialog.vue'

interface Props { visible: boolean; data?: any }
const props = defineProps<Props>()
const emit = defineEmits(['update:visible', 'confirm'])

const confirm = () => emit('confirm')
</script>
