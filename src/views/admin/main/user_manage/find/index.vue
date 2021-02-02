<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="账号">
      <el-input v-model="formInline.account" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="formInline.username" placeholder="昵称"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="formInline.usertype" placeholder="用户类型">
        <el-option label="用户" :value="0"></el-option>
        <el-option label="管理员" :value="1"></el-option>
        <el-option label="全部" :value="undefined"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        account: '',
        username: '',
        usertype: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('query', this.formInline.account, this.formInline.username, this.formInline.usertype)
    }
  }
}
</script>

<style lang="scss">
.find {
  text-align: center;
}
</style>