<template>
  <div>
    <el-card class="mb-4" v-if="site">
      <div><strong>Name:</strong> {{ site.name }}</div>
      <div><strong>Customer:</strong> {{ site.customerName }}</div>
      <div><strong>Contact:</strong> {{ site.contact }}</div>
      <div><strong>Manager:</strong> {{ site.manager }}</div>
      <div><strong>Location:</strong> {{ site.location }}</div>
      <div><strong>Products:</strong> {{ site.deployedProducts.join(', ') }}</div>
      <div><strong>Description:</strong> {{ site.description }}</div>
    </el-card>
    <RemoteAccessList v-if="site" :site-id="site.id" />
    <HostAssetList v-if="site" :site-id="site.id" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import RemoteAccessList from '../remote-access/RemoteAccessList.vue'
import HostAssetList from '../host-asset/HostAssetList.vue'
import { useSite } from '../api'

const props = defineProps<{ id: number }>()
const { data: site } = useSite(props.id)
</script>
