<template>
  <div class="login">
    <div class="login-body">
      <h2 class="title">在线问答后台管理系统</h2>
      <el-form status-icon ref="loginFormRef" :model="loginForm" label-width="0" class="login-form">
        <el-form-item :rules="[{required: true, message: '账号不能为空'}]" prop="account">
          <el-input
            prefix-icon="el-icon-s-custom"
            type="text"
            placeholder="账号"
            v-model="loginForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item :rules="[{required: true, message: '密码不能为空'}]" prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="密码"
            type="password"
            :show-password="true"
            v-model="loginForm.password"
            autocomplete="on"
            @keydown.native.enter="submitForm('loginFormRef')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginFormRef')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Message } from 'element-ui'
import { adminLogin } from '@/service/admin'
import { saveDataToStorage } from '@/utils'
export default {
  data () {
    return {
      loginForm: {
        account: 'admin',
        password: 'admin'
      }
    }
  },
  components: {

  },
  methods: {
    ...mapActions([
      'saveUserId'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          return false
        }
        const res = await adminLogin(this.loginForm.account, this.loginForm.password)
        if (res.status === 0) {
          Message.success({
            type: 'success',
            message: '登陆成功'
          })
          this.saveUserId(res.data.user_id)
          saveDataToStorage('token', res.data.token)
          saveDataToStorage('account', this.loginForm.account)
          this.$router.push('/admin/user')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  height: 100%;
  background-color: #2e3b4b;
  .login-body {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 440px;
    height: 250px;
    padding: 20px;
    text-align: center;
    transform: translate(-50%, -50%);
    .title {
      margin-bottom: 20px;
      color: #fff;
    }
    .login-form {
      .el-form-item__content {
        button {
          width: 100%;
          border: none;
        }
      }
    }
  }
}
</style>
