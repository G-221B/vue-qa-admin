<template>
  <div class="result">
    <el-button size="mini" type="danger" @click="deleteSelect">删除所选行</el-button>
    <el-table ref="questionRef" :data="formatQuestion" tooltip-effect="dark">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column prop="q_id" label="id" align="center" width="80px"></el-table-column>
      <el-table-column prop="username" label="提问者" align="center"></el-table-column>
      <el-table-column prop="type_name" label="类型" align="center"></el-table-column>
      <el-table-column prop="q_title" label="标题" align="center"></el-table-column>
      <el-table-column prop="q_time" label="发布日期" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="getDetail(scope.$index)">查看详情</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="问题详情" :visible.sync="dialogVisible" width="30%">
      <div class="content" v-html="content"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
export default {
  data () {
    return {
      dialogVisible: false,
      content: ''
    }
  },
  props: ['question'],
  computed: {
    formatQuestion () {
      return this.question.map(item => {
        item.q_time = formatDate(item.q_time)
        return item
      })
    }
  },
  methods: {
    deleteSelect () {
      const ids = []
      this.$refs.questionRef.selection.forEach(item => {
        ids.push(item.q_id)
      })
      this.$emit('delete', ids)
    },
    handleDelete (index) {
      const ids = [this.question[index].q_id]
      this.$emit('delete', ids)
    },
    getDetail (index) {
      this.dialogVisible = true
      this.content = this.question[index].q_content
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  img {
    max-width: 500px;
  }
}
</style>
