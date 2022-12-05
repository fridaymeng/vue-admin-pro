<script setup>
import { ref, reactive } from 'vue';
import { Login } from '@/api/user';
const ruleFormRef = ref({});
const ruleForm = reactive({
  pass: '',
  user: ''
})
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
      ruleFormRef.value.validateField('user', () => null)
    }
    callback()
  }
}
const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  userName: [{ validator: validateUser, trigger: 'blur' }]
})
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      login(valid)
    } else {
      console.log('error submit!')
      return false
    }
  })
}
async function login () {
  const { code, data } = await Login()
  if (code === 0) {
    console.log(data)
  }
}
</script>
<template>
  <div class="wrap">
    <h3 class="title">密流转发中心</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="checkPass">
        <el-input
          v-model="ruleForm.user"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.wrap {
  padding: 0;
  .title {
    padding: 0 0 0 120px;
  }
}
</style>
