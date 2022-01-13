<template>
  <div class="app-container">
    <div class="search-wrapper">
      <el-select v-model="selectUserId">
      <el-option
        v-for="item in userIdOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" style="margin: 0px 15px;" @click="getList()">{{ $ln('查詢') }}</el-button>
    </div>
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
import base from '@/mixins/base'

export default {
  name: "",
  props: {},
  mixins: [
    base
  ],
  data () {
    // 資料
    return {
      selectUserId: 1,
      userIdOptions: [
        {
          label: 'Dua Lipa',
          value: 1
        },
        {
          label: 'Kate Perry',
          value: 2
        },
        {
          label: 'Avicii',
          value: 3
        },
        {
          label: 'Maroon 5',
          value: 4
        },
        {
          label: 'Bruno Mars',
          value: 5
        },
        {
          label: 'Adele',
          value: 6
        },
        {
          label: 'Rihanna',
          value: 7
        },
        {
          label: 'Sia',
          value: 8
        },
        {
          label: 'Christina Aguilera',
          value: 9
        },
        {
          label: 'Marshmello',
          value: 10
        }
      ]
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
      this.list = []
      this.listLoading = true
      const params = {
        userId: this.selectUserId
      }
      const data = await getAlbumsList(params)
      console.log('data', data);
      if (data.length > 0) {
        this.list = data
      } else {
        // 回來是單筆的obj格式
        this.list.push(data)
      }
      this.listLoading = false
    }
  },
  // END--生命週期
};
</script>
<style lang="scss" scoped></style>