<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ getName }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      getName: 'user/getName'
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    width: 95%;
    margin: 0px auto;
  }
  &-text {
    font-size: 28px;
    line-height: 46px;
    margin: 5px 0px;
  }
}
</style>
