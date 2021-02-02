<template>
  <div class="admin">
    <Menu />
    <Header :user_info="user_info" />
    <div class="right">
      <Main />
    </div>
  </div>
</template>

<script>
import Menu from './menu'
import Main from './main'
import Header from './header'
import { getDataFromStorage } from '@/utils'
import { getUserInfo } from '@/service/admin'
export default {
  data () {
    return {
      user_info: {}
    }
  },
  components: {
    Menu,
    Main,
    Header
  },
  async created () {
    const account = getDataFromStorage('account')
    const res = await getUserInfo(account)
    if (res.status === 0) {
      this.user_info = res.data.user[0]
    }
  }
}
</script>

<style scoped lang="scss">
.admin {
  position: relative;
  height: 100%;
  .right {
    padding-left: 244px;
  }
}
</style>
