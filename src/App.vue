<template>
  <div id="app">
    <HeaderMain />
    <div class="content-wrap">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain';
import NavBar from './components/NavBar';
import './mixins/reset.css';

export default {
  name: 'App',
  components: {
    HeaderMain,
    NavBar
  }
}
</script>

<style>
#id{
  width: 100%;
  height: 100%;
}
.content-wrap{
  display: flex;
}
</style>
