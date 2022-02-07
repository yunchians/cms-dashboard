<template>
  <div class="app-container settings-page">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="背景色">
        <el-color-picker v-model="form.bgColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="背景圖片" class="bg">
        <el-radio-group v-model="form.bgImg">
          <el-radio
            v-for="item in bgOptions"
            :key="item.value"
            :label="item.value"
          >
            <img
              :src="require(`../../assets/${item.img}.png`)"
              class="bg-option"
            />
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="按鈕顏色">
        <el-color-picker v-model="form.btnColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="按鈕顏色(hover)">
        <el-color-picker v-model="form.btnHoverColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="大頭貼" class="photo">
        <el-radio-group v-model="form.photo">
          <el-radio
            v-for="item in photoOptions"
            :key="item.value"
            :label="item.value"
          >
            <img
              :src="require(`../../assets/${item.img}.jpeg`)"
              class="photo-option"
            />
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="名稱" class="name">
        <el-input v-model="form.name" clearable />
      </el-form-item>
      <el-form-item label="連結列表" class="urlList">
        <div class="add-block">
          <el-button icon="el-icon-plus" size="small" @click="addItem()"
            >新增</el-button
          >
          <el-button icon="el-icon-delete" size="small" @click="delItem()"
            >刪除</el-button
          >
        </div>
        <ul>
          <li v-for="item in form.urlList">
            <el-input v-model="item.title" placeholder="標題" clearable />
            <el-input v-model="item.url" placeholder="連結" clearable />
          </li>
        </ul>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import settingBase from "@/mixins/settingBase";

export default {
  name: "",
  props: {},
  mixins: [settingBase],
  data() {
    // 資料
    return {
      form: {
        bgColor: null,
        btnColor: "#E644CD",
        btnHoverColor: "#BD64DD",
        photo: 1,
        bgImg: 1,
        name: "茜茜",
        urlList: [
          {
            title: "YouTube",
            url: "",
          },
        ],
        photoBase64: "",
        bgBase64: "",
      },
    };
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
  mounted: function () {
    // 元素已掛載， el 被建立。
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
    /**
     * 新增連結
     */
    addItem() {
      this.form.urlList.push({
        title: "",
        url: "",
      });
    },
    /**
     * 刪除連結
     */
    delItem() {
      // 清單為空時不操作
      if (this.form.urlList.length === 0) {
        console.log("this.form.urlList.length", this.form.urlList.length);
        return;
      } else {
        this.form.urlList.pop();
      }
    },
    /**
     * 提交更新
     */
    onSubmit() {
      this.form.photoBase64 = this.photoOptions[this.form.photo - 1].base64;
      this.form.bgBase64 = this.bgOptions[this.form.bgImg - 1].base64;
      console.log("this.form", this.form);
      localStorage.setItem("settingsData", JSON.stringify(this.form));
    },
  },
  // END--生命週期
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 20px;
}
.name {
  .el-input {
    width: 180px;
  }
}
.el-radio {
  margin-right: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
img.photo-option {
  width: 40px;
}
img.bg-option {
  width: 150px;
}
.urlList {
  ul {
    margin: 0px;
    padding: 0px;
    li {
      list-style-type: none;
      margin-bottom: 10px;
      .el-input {
        width: 400px;
        margin-right: 10px;
        margin-top: 5px;
      }
    }
  }
}
.add-block {
  text-align: left;
}
</style>
<style lang="scss">
.photo,
.bg {
  .el-radio__label {
    padding-left: 5px;
  }
}
.settings-page {
  .el-form-item__content {
    line-height: 0px;
  }
}
</style>
