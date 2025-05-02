import { View, Image, Button } from "@tarojs/components";
import { switchTab } from "@tarojs/taro";
import "./index.scss";
import Taro from "@tarojs/taro";
import useImgStore from "@/store/imgStore";
import { get } from "@/common/utils/request";

const loadingImg = {
  logo: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/logo_max.png",
  earth: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/91C2DB2811BF06B49F233201A2B4DF47.png",
  icon: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/BEA03782BD977C329F2DD759F88D30CC.png",
}

const Index = () => {
  const { setIndexImg, setClassifyImg, setFeedbackImg, setMineImg } = useImgStore();
  Taro.useDidShow(() => {
    get("/img/index").then((res) => {
      setIndexImg(res.data);
    });
    get("/img/classify").then((res) => {
      setClassifyImg(res.data);
    });
    get("/img/feedback").then((res) => {
      setFeedbackImg(res.data);
    });
    get("/img/mine").then((res) => {
      console.log(res.data);
      setMineImg(res.data);
    })
  })
  return (
    <View className="loading">
      <Image src={loadingImg.logo} className="loading-logo" mode="heightFix"></Image>
      <Image src={loadingImg.earth} className="loading-earth" mode="heightFix"></Image>
      <Image src={loadingImg.icon} className="loading-icon" mode="widthFix"></Image>
      <View className="loading-content">
        <View className="loading-content-item">你好!</View>
        <View className="loading-content-item">欢迎来到&nbsp;慧绿互联</View>
        <View className="loading-content-item">垃圾分类小程序</View>
      </View>
      <View className="loading-floor">
        <Button className="loading-floor-btn" onClick={() => switchTab({ url: "/pages/indexHome/index" })}>立即体验</Button>
      </View>
    </View>
  );
};

export default Index;
