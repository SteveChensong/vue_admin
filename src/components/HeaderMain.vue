<template>
  <div class="header-wrap">
    <div>Vue后台管理系统</div>
    <div class="header-info">
      <div>{{new Date()}}</div>
      <div>您好，{{user}}</div>
      <div>退出</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  data () {
    return {
      user: 'admin'
    }
  }
}
</script>

<style scoped>
.header-wrap{
  padding: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D9ECFF;
}
.header-info{
  display: flex;
}
</style>
