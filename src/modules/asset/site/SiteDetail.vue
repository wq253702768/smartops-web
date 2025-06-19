<template>
  <div>
    <el-card class="mb-4">
      <div><strong>Name:</strong> {{ data.name }}</div>
      <div><strong>Customer:</strong> {{ data.customerName }}</div>
      <div><strong>Contact:</strong> {{ data.contact }}</div>
      <div><strong>Manager:</strong> {{ data.manager }}</div>
      <div><strong>Location:</strong> {{ data.location }}</div>
      <div><strong>Products:</strong> {{ data.deployedProducts.join(', ') }}</div>
      <div><strong>Description:</strong> {{ data.description }}</div>
    </el-card>
    <RemoteAccessList :site-id="data.id" />
    <HostAssetList :site-id="data.id" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import RemoteAccessList from '../remote-access/RemoteAccessList.vue'
import HostAssetList from '../host-asset/HostAssetList.vue'
import { Site } from '../types'

defineProps<{ data: Site }>()
</script>
