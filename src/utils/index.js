// 保存data到localStorage
export function saveDataToStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
// 从localStorage获取数据
export function getDataFromStorage (key) {
  let res = window.localStorage.getItem(key)
  if (res) {
    res = JSON.parse(res)
  }
  return res
}
// 从localStorage中移除数据
export function removeStorageDataByKey (key) {
  window.localStorage.removeItem(key)
}
// 格式化日期
export function formatDate (dateStr) {
  const date = new Date(dateStr)
  let res = ''
  res += date.getFullYear() + '-'
  res += (date.getMonth() + 1) + '-'
  res += date.getDate()
  return res
}
// 格式化好周数据：{日：数据量}
export function formatWeekData (arr) {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const date = new Date()
  const year = date.getFullYear()
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    month_day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }
  let day = date.getDate()
  const month = date.getMonth()
  const dateObj = {}
  let res = []
  arr.forEach(item => {
    dateObj[item.date] = item.count
  })
  for (let i = 0; i < 7; i++) {
    if (day - 1 === 0) {
      day = month_day[month]
    } else {
      day -= 1
    }
    if (dateObj[day]) {
      res.unshift(dateObj[day].toString())
    } else {
      res.unshift('0')
    }
  }
  return res
}