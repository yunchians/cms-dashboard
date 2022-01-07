<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international" icon-class="international" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        繁體中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.getLanguage
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      if (lang === 'zh') {
        document.title = 'CMS 後台系統'
      } else {
        document.title = 'CMS Dashboard'
      }
      this.$lnChange(lang)
      this.$message({
        message: this.$ln('切換語言成功'),
        type: 'success'
      })
    }
  }
}
</script>
