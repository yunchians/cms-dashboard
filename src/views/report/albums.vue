<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column width="180" :label="$ln('歌手')">
        <template slot-scope="scope">
          {{ scope.row.userId | name(1) }}
        </template>
      </el-table-column>
      <el-table-column :label="$ln('專輯名稱')">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getAlbumsList } from '@/api/report'
export default {
  name: "",
  props: {},
  data () {
    // 資料
    return {
        list: null,
        aaa: '111',
        listLoading: true
    }
  },
  computed: {
    // 相依的資料改變時才做計算方法
  },
  watch: {
    // 監聽值
  },
  // BEGIN--生命週期
  beforeCreate: function () {
    // 實體初始化
  },
  created: function () {
    // 實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
  },
  beforeMount: function () {
    // 執行元素掛載之前。
  },
  mounted: function() {
    // 元素已掛載， el 被建立。
    this.getList()
  },
  beforeUpdate: function () {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    // 當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    // 實體還可使用。
  },
  destroyed: function () {
    // 實體銷毀。
  },
  methods: {
    async getList() {
      this.listLoading = true
      const data = await getAlbumsList()
      console.log(data)
      this.list = data
      this.listLoading = false
    }
  },
  // END--生命週期
};
</script>
<style lang="scss" scoped></style>