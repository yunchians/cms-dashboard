<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    console.log('env', process.env.NODE_ENV)
  }
}
</script>

<style lang="scss">
#app {
  .sidebar-container {
    width: 245px !important;
    .svg-icon {
      margin-right: 8px;
      font-size: 20px;
    }
    .sub-el-icon {
      margin-right: 8px;
      font-size: 20px;
    }
  }
  .main-container {
    margin-left: 245px;
  }
}
</style>
