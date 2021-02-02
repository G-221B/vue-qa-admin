<template>
  <div class="result">
    <el-button size="mini" type="danger" @click="deleteSelect">删除所选行</el-button>
    <el-table
      size="medium"
      ref="multipleTable"
      :data="formatUser"
      tooltip-effect="dark"
      :fit="true"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="id" label="id" align="center"></el-table-column>
      <el-table-column prop="account" label="账号" align="center"></el-table-column>
      <el-table-column prop="username" label="昵称" align="center"></el-table-column>
      <el-table-column prop="userType" label="类型" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center"></el-table-column>
      <el-table-column prop="create_time" label="注册日期" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
        {
          id: 1,
          type: '用户',
          username: 'wjg',
          account: '417240223',
          email: '1982414933@qq.com',
          sex: '男',
          date: '2021-11-8'
        },
      ]
    }
  },
  props: ['user'],
  computed: {
    formatUser () {
      return this.user.map(item => {
        item.userType = item.user_tid === 0 ? '用户' : '管理员'
        item.create_time = formatDate(item.create_time)
        return item
      })
    }
  },
  methods: {
    // 删除改行数据
    handleDelete (index) {
      const ids = [this.user[index].id]
      this.$emit('delete', ids)
    },
    // 删除选中的数据
    deleteSelect () {
      const ids = []
      this.$refs.multipleTable.selection.forEach(item => {
        ids.push(item.id)
      })
      this.$emit('delete', ids)
    }
  }
}
</script>

<style lang="scss">
.result {
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>