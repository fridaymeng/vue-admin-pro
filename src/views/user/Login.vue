<script setup>
import { ref, reactive } from 'vue';
import { Login } from '@/api/user';
import { getUUID } from '@/utils/uuid';
import router from "@/router";
const ruleFormRef = ref({});
const ruleForm = reactive({
  pass: '',
  user: ''
})
const submitLoading = ref(false);
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validateUser = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the userName'))
  } else {
    if (ruleForm.user !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkUser', () => null)
    }
    callback()
  }
}
const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  userName: [{ validator: validateUser, trigger: 'blur' }]
})
const submitForm = (formEl) => {
  submitLoading.value = true
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
      localStorage.setItem('authenticated', getUUID())
      router.push('/')
      // login(valid)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
async function login () {
  const { code, data } = await Login()
  if (code === 0) {
    submitLoading.value = false
    console.log(data)
  }
}
</script>
<template>
  <div class="wrap">
    <h3 class="title">图形管理中心</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="ruleForm-wrap"
    >
      <el-form-item label="用户名" prop="checkUser">
        <el-input
          v-model="ruleForm.user"
          autocomplete="off"
          maxlength="12"
          :disabled="submitLoading"
          size="large"
        />
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          maxlength="12"
          :disabled="submitLoading"
          size="large"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          :loading="submitLoading"
          size="large"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
html, body {
  background: #f3f4f5 !important;
}
</style>
<style scoped lang="less">
.wrap {
  padding: 200px 0 0 0;
  max-width: 600px;
  margin: 0 auto;
  .title {
    padding: 0 0 0 120px;
  }
}
</style>
