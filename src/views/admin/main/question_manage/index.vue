<template>
  <div class="question_manage">
    <el-form :inline="true" :model="query" class="demo-form-inline">
      <el-form-item label="id">
        <el-input v-model="query.id" placeholder="id"></el-input>
      </el-form-item>
      <el-form-item label="提问者">
        <el-input v-model="query.user" placeholder="提问者"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="query.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="query.t_id" placeholder="分区">
          <el-option label="全部" :value="undefined"></el-option>
          <el-option
            :label="item.type_name"
            :value="item.question_tid"
            v-for="item in type"
            :key="item.question_tid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <Result :question="question" @delete="deleteQuestions" />
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
import Result from './result'
import { getQuestionType, queryQuestion, deleteQuestionsByIds } from '@/service/admin.js'
export default {
  data () {
    return {
      query: {
        id: '',
        username: '',
        t_id: '',
        title: ''
      },
      type: [],
      pageNum: 1,
      pageCount: 0,
      question: []
    }
  },
  components: {
    Result
  },
  async created () {
    this.getType()
    this.getQuestion(this.query.id, this.query.username, this.query.t_id, this.query.title, this.pageNum)
  },
  methods: {
    onQuery () {
      this.pageNum = 1
      this.getQuestion(this.query.id, this.query.username, this.query.t_id, this.query.title, this.pageNum)
      this.clear()
    },
    pageChange (num) {
      this.pageNum = num
      this.getQuestion(this.query.id, this.query.username, this.query.t_id, this.query.title, this.pageNum)
    },
    deleteQuestions (ids) {
      this.$confirm('此操作将永久删除该提问, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await deleteQuestionsByIds(ids)
        if (res.status === 0) {
          this.clear()
          this.pageNum = 1
          this.getQuestion(this.query.id, this.query.username, this.query.t_id, this.query.title, this.pageNum)
          Message.success({
            type: 'success',
            message: '删除成功'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    clear () {
      this.query.id = ''
      this.query.username = ''
      this.query.t_id = ''
      this.query.title = ''
    },
    async getQuestion (id, username, t_id, title, pageNum) {
      const res = await queryQuestion(id, username, t_id, title, pageNum)
      if (res.status === 0) {
        this.pageCount = res.data.pageCount
        this.question = res.data.question
      }
    },
    async getType () {
      const res = await getQuestionType()
      if (res.status === 0) {
        this.type = res.data.question_type
      }
    }
  }
}
</script>

<style scoped lang="scss">
.question_manage {
  padding: 15px;
  background-color: #fff;
}
</style>
