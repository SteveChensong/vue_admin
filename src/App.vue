<template>
  <div id="app" :style="{height: appHeight + 'px'}">
    <el-container>
      <el-header :style="{height: appHeight*0.1 + 'px'}"><HeaderMain /></el-header>
      <el-container :style="{height: appHeight*0.9 + 'px'}">
        <el-aside width='140px'><NavBar /></el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer>@版权所有</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain';
import NavBar from './components/NavBar';
import './mixins/reset.css';

export default {
  name: 'App',
  data () {
    return {
      appHeight: '',
    }
  },
  components: {
    HeaderMain,
    NavBar
  },
  mounted (){
    this.appHeight = window.innerHeight;
  }
}
</script>

<style>
.el-header, .el-footer{
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
}
.el-aside{
  background-color: #000c17;
  opacity: .8;
  color: #fff;
  text-align: center;
  overflow: hidden;
}
.el-main{
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.content-wrap{
  display: flex;
}
.el-footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-align: center;
}
</style>
