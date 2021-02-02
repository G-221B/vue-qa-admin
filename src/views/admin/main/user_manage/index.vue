<template>
  <div class="user-manage">
    <Add @add="add" />
    <Find @query="query" />
    <Result :user="user" @delete="deleteUser" />
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pageCount * 10"
      :hide-on-single-page="true"
      @current-change="pageChange"
    ></el-pagination>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import Find from './find'
import Add from './add'
import Result from './result'
import { getUser, createUser, deleteUserByIds } from '@/service/admin'
export default {
  data () {
    return {
      pageNum: 1,
      pageCount: 0,
      user: [],
      account: '',
      username: '',
      userType: ''
    }
  },
  components: {
    Find,
    Add,
    Result
  },
  created () {
    this.getUserData(this.account, this.username, this.userType, this.pageNum)
  },
  methods: {
    query (account, username, userType) {
      this.pageNum = 1
      this.getUserData(account, username, userType, this.pageNum)
      this.clear()
    },
    async add (account, password, userType) {
      const res = await createUser(account, password, Number(userType))
      if (res.status === 0) {
        this.getUserData(this.account, this.username, this.userType, 1)
        this.pageNum = 1
        Message.success({
          type: 'success',
          message: '创建成功'
        })
      }
    },
    deleteUser (ids) {
      if (!ids.length) {
        return Message.error('你还没选中任何行')
      }
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await deleteUserByIds(ids)
        if (res.status === 0) {
          this.clear()
          this.getUserData(this.account, this.username, this.userType, 1)
          this.pageNum = 1
          this.clear()
          Message.success({
            type: 'success',
            message: '删除成功'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 页数change
    pageChange (num) {
      this.pageNum = num
      this.getUserData(account, username, userType, this.pageNum)
    },
    clear () {
      this.account = ''
      this.username = ''
      this.userType = ''
    },
    // 获取所用的用户
    async getUserData (account, username, userType, pageNum) {
      const res = await getUser(account, username, userType, pageNum)
      if (res.status === 0) {
        this.pageCount = res.pageCount
        this.user = res.data.user
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user-manage {
  padding: 20px 20px 50px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>
