<template>
  <div class="header">
    <h2 class="title">在线问答后台管理系统</h2>
    <div class="user">
      欢迎你,{{user_info.username}}
      <span class="logout" @click="logout">退出</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { saveDataToStorage } from '@/utils'
export default {
  data () {
    return {

    }
  },
  props: ['user_info'],
  components: {

  },
  methods: {
    ...mapActions([
      'saveUserId'
    ]),
    logout () {
      saveDataToStorage('token', '')
      this.saveUserId('')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  height: 44px;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #324157;
  color: #fff;
  .title {
    font-weight: 500;
    line-height: 44px;
  }
  .user {
    line-height: 44px;
    .logout {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
