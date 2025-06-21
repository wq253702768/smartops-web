<template>
  <el-container class="h-screen">
    <el-aside width="200px" class="border-r">
      <el-menu router class="h-full" :default-active="$route.path">
        <el-sub-menu index="1">
          <template #title>Asset</template>
          <el-menu-item index="/asset/customer">Customers</el-menu-item>
          <el-menu-item index="/asset/site">Sites</el-menu-item>
          <el-menu-item index="/asset/host-asset">Host Assets</el-menu-item>
          <el-menu-item index="/asset/remote-access">Remote Access</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
</script>
