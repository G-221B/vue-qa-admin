<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="账号">
      <el-input v-model="formInline.account" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="formInline.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="formInline.usertype" placeholder="用户类型">
        <el-option label="用户" :value="0"></el-option>
        <el-option label="管理员" :value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { Message } from 'element-ui'
export default {
  data () {
    return {
      formInline: {
        account: '',
        password: '',
        usertype: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.formInline.account === '' || this.formInline.password === '' || this.formInline.userType === '') {
        return Message.error('请完善输入项')
      }
      this.$emit('add', this.formInline.account, this.formInline.password, this.formInline.usertype)
      this.clear()
    },
    clear () {
      this.formInline.account = ''
      this.formInline.password = ''
      this.formInline.usertype = ''
    }
  }
}
</script>