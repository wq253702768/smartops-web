<template>
  <div>
    <h2 class="text-xl mb-2">Sites</h2>
    <SiteList :customer-id="id" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SiteList from '../site/SiteList.vue'

defineProps<{ id: number }>()
</script>
