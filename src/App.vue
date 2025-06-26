<template>
  <div class="h-screen flex">
    <SideMenu class="w-60" />
    <router-view class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
</script>
