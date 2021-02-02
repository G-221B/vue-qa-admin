<template>
  <div class="type-manage">
    <el-form :inline="true" :model="type" class="demo-form-inline">
      <el-form-item label="分区名">
        <el-input v-model="type.name" placeholder="分区名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onCreate">创建</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="formatTypes" style="width: 800px">
      <el-table-column prop="question_tid" label="id"></el-table-column>
      <el-table-column prop="type_name" label="分区名"></el-table-column>
      <el-table-column prop="create_time" label="创建日期"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { getQuestionType, updateTypeName, createNewType } from '@/service/admin'
import { formatDate } from '@/utils'
export default {
  data () {
    return {
      type: {
        name: ''
      },
      types: [],
    }
  },
  components: {

  },
  computed: {
    // format数据
    formatTypes () {
      return this.types.map(item => {
        item.create_time = formatDate(item.create_time)
        return item
      })
    }
  },
  created () {
    this.getTypes()
  },
  methods: {
    // 创建
    async onCreate () {
      const type_name = this.type.name
      const res = await createNewType(type_name)
      if (res.status === 0) {
        this.type.name = ''
        this.getTypes()
        Message.success({
          type: 'success',
          message: '创建成功'
        })
      }
    },
    // 编辑
    edit (index) {
      const question_tid = this.types[index].question_tid
      this.$prompt('请输入新分区名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S{2,10}/,
        inputErrorMessage: '请输入长度2-10的新分区名'
      }).then(async ({ value }) => {
        const res = await updateTypeName(question_tid, value)
        if (res.status === 0) {
          this.getTypes()
          Message.success({
            type: 'success',
            message: '更新成功'
          })
        }

      }).catch((err) => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });

    },
    async getTypes () {
      const res = await getQuestionType()
      if (res.status === 0) {
        this.types = res.data.question_type
      }
    }
  }
}
</script>

<style scoped lang="scss">
.type-manage {
  padding: 15px;
  background-color: #fff;
}
</style>
