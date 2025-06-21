<template>
  <div class="h-screen flex items-center justify-center">
    <el-card class="w-96">
      <h3 class="text-center mb-4">Login</h3>
      <el-radio-group v-model="type" class="mb-4 flex justify-center">
        <el-radio-button label="local">Local</el-radio-button>
        <el-radio-button label="ldap">LDAP</el-radio-button>
      </el-radio-group>
      <el-form :model="form" @keyup.enter="onSubmit">
        <el-form-item label="Username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
      </el-form>
      <div class="text-center mt-4">
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </div>
      <div v-if="type === 'ldap'" class="text-center text-xs mt-2">\u5185\u90e8\u5458\u5de5\u767b\u5f55</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginLocal, useLoginLdap } from './api'

const router = useRouter()
const type = ref<'local' | 'ldap'>('local')
const form = ref({ username: '', password: '' })

const { mutateAsync: loginLocal } = useLoginLocal()
const { mutateAsync: loginLdap } = useLoginLdap()

const onSubmit = async () => {
  if (type.value === 'ldap') {
    await loginLdap(form.value)
  } else {
    await loginLocal(form.value)
  }
  router.push('/asset/customer')
}
</script>
