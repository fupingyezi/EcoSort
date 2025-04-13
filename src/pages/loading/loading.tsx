import { View, Image, Button } from "@tarojs/components";
import { switchTab } from "@tarojs/taro";
import "./index.scss";
import logo from "@/common/assets/loading/loadingLogo.svg";
import earth from "@/common/assets/loading/earth.svg";
import icon from "@/common/assets/loading/littleIcon.svg"

const Index = () => {
  return (
    <View className="loading">
      <Image src={logo} className="loading-logo" mode="heightFix"></Image>
      <Image src={earth} className="loading-earth" mode="heightFix"></Image>
      <Image src={icon} className="loading-icon" mode="widthFix"></Image>
      <View className="loading-content">
        <View className="loading-content-item">你好!</View>
        <View className="loading-content-item">欢迎来到&nbsp;拉风侠</View>
        <View className="loading-content-item">垃圾分类小程序</View>
      </View>
      <View className="loading-floor">
        <Button className="loading-floor-btn" onClick={() => switchTab({ url: "/pages/indexHome/index" })}>立即体验</Button>
      </View>
    </View>
  );
};

export default Index;
