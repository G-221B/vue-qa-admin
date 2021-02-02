<template>
  <div class="operate-manage">
    <h2 class="user-title">近七日的用户注册量</h2>
    <div id="user" style="width: 100%;height:400px;"></div>
    <h2 class="question-title">近七日用户提问量</h2>
    <div id="question" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
import { getWeekData } from '@/service/admin'
import { formatWeekData } from '@/utils'
let echarts = require('echarts/lib/echarts')
export default {
  data () {
    return {
      charts: '',
      userData: [],
      questionData: []
    }
  },
  components: {

  },
  async created () {
    const res = await getWeekData()
    if (res.status === 0) {
      this.userData = formatWeekData(res.data.userData)
      this.questionData = formatWeekData(res.data.questionData)
    }
    this.$nextTick(function () {
      console.log(res)
      console.log(this.userData)
      console.log(this.questionData)
      this.drawLine('user', '注册量', this.userData)
      this.drawLine('question', '提问量', this.questionData)
    })
  },
  methods: {
    drawLine (id, title, data) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [title]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: title,
          type: 'line',
          stack: '总量',
          data: data
        }]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.operate-manage {
  background-color: #fff;
  padding: 30px 50px;
  .question-title {
    margin-top: 30px;
  }
}
</style>
