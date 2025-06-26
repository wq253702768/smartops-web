<template>
  <div class="flex justify-center items-center h-screen">
    <el-card class="w-96">
      <div class="flex justify-between mb-4">
        <el-radio-group v-model="mode">
          <el-radio-button label="local">Local</el-radio-button>
          <el-radio-button label="ldap">LDAP</el-radio-button>
        </el-radio-group>
      </div>
      <el-form :model="form" label-position="top">
        <el-form-item label="Username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
      </el-form>
      <div class="text-right">
        <el-button type="primary" :loading="loading" @click="onSubmit">Login</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { loginLocal, loginLdap, loading } = useAuth()
const mode = ref<'local' | 'ldap'>('local')
const form = reactive({ username: '', password: '' })

async function onSubmit() {
  const { username, password } = form
  if (mode.value === 'local') {
    await loginLocal(username, password)
  } else {
    await loginLdap(username, password)
  }
  router.push('/')
}
</script>

<style scoped>
</style>
