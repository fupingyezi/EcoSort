export default {
  pages: [
    "pages/loading/loading",
    "pages/indexHome/index",
    "pages/classifyHome/index",
    "pages/mineHome/index",
    "pages/classifyText/index",
    "pages/classifyVoice/index",
    "pages/examDetail/index",
    "pages/examination/index",
    "pages/feedback/index",
  ],
  tabBar: {
    color: "#D8D8D8",
    selectedColor: "#12B858",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/indexHome/index",
        text: "首页",
        iconPath: "common/assets/tabbar/indexIcon.png",
        selectedIconPath: "common/assets/tabbar/indexIconAct.png",
      },
      {
        pagePath: "pages/classifyHome/index",
        text: "垃圾分类",
        iconPath: "common/assets/tabbar/sortIcon.png",
        selectedIconPath: "common/assets/tabbar/sortIcon.png",
      },
      {
        pagePath: "pages/mineHome/index",
        text: "个人中心",
        iconPath: "common/assets/tabbar/mineIcon.png",
        selectedIconPath: "common/assets/tabbar/mineIcon.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },

  plugins: {
    WechatSI: {
      version: "0.3.4",
      provider: "wx069ba97219f66d99",
    },
  },
};
