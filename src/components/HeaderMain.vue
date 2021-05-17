<template>
  <div class="header-wrap">
    <div class="header-title">Vue后台管理系统</div>
    <div class="header-info">
      <div class="header-date">{{date}}</div>
      <div class="header-username">您好,{{user}}</div>
      <div class="header-action">退出</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'HeaderMain',
  data () {
    return {
      user: 'admin',
      date: '',
      timer: ''
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }, 1000);
  },
  beforeDestory () {
    this.timer = '' 
  }
}
</script>

<style scoped>
.header-wrap{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-title{
  font-size: 24px;
  color: #1890ff;
}
.header-info{
  display: flex;
}
.header-date, .header-username{
  margin-right: 15px;
}
.header-action{
  color: #1890ff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
