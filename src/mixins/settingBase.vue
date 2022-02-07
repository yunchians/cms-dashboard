<script>
export default {
  name: "",
  props: {},
  data: function () {
    // 資料
    return {
      photoOptions: [
        {
          value: 1,
          img: "photo01",
          url: "https://upload.cc/i1/2022/02/08/oxu6Ic.jpeg"
        },
        {
          value: 2,
          img: "photo02",
          url: "https://upload.cc/i1/2022/02/08/KMpntX.jpeg"
        },
        {
          value: 3,
          img: "photo03",
          url: "https://upload.cc/i1/2022/02/08/ZV2s0G.jpeg"
        },
      ],
      bgOptions: [
        {
          value: 1,
          img: "bg01",
          url: "https://upload.cc/i1/2022/02/08/NqxcU0.png"
        },
        {
          value: 2,
          img: "bg02",
          url: "https://upload.cc/i1/2022/02/08/GBYbah.png"
        },
      ],
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
  methods: {},
  // END--生命週期
};
</script>
