<template>
  <div class="menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :router="true"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#409eff"
    >
      <el-menu-item index="/admin/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/question">
        <i class="el-icon-s-order"></i>
        <span slot="title">问题管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/type">
        <i class="el-icon-menu"></i>
        <span slot="title">分区管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/operate">
        <i class="el-icon-s-data"></i>
        <span slot="title">运营管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 44px;
  width: 244px;
  height: 100%;
  background-color: #324157;
  li {
    width: 244px;
  }
}
</style>
