<template>
  <div>
    <el-card class="mb-4" v-if="customer">
      <div><strong>Name:</strong> {{ customer.name }}</div>
      <div><strong>SLA:</strong> {{ customer.slaLevel }}</div>
      <div><strong>Level:</strong> {{ customer.level }}</div>
      <div><strong>Contract:</strong> {{ customer.contract }}</div>
      <div><strong>Fee:</strong> {{ customer.feeInfo }}</div>
    </el-card>
    <h2 class="text-xl mb-2">Sites</h2>
    <SiteList :customer-id="id" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useCustomer } from '../api'
import SiteList from '../site/SiteList.vue'

const props = defineProps<{ id: number }>()
const { data } = useCustomer(props.id)
const customer = computed(() => data.value)
</script>
