import { Component } from "react";
import Taro from "@tarojs/taro";
import type { PropsWithChildren } from "react";

import "./app.scss";

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    this.loadFontFace();
  }

  loadFontFace = async () => {
    try {
      await Taro.loadFontFace({
        family: 'DingTalk JinBuTi',
        source: 'url("http://172.20.10.12:8000/static/fonts/DingTalk-JinBuTi.ttf")',
        success: (res) => {
          console.log('字体加载成功', res);
        },
        fail: (err) => {
          console.error('字体加载失败：', err);
          Taro.showToast({ title: '字体加载失败', icon: 'none' });
        },
        global: true,
      });
    } catch (error) {
      console.error('字体加载异常：', error);
    }
  }

  componentDidShow() {}

  componentDidHide() { }


  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
