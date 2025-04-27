import { View, Image } from "@tarojs/components";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import ClassifyCamera from "@/components/classifycamera/classifyWindow/classifycamera";
import "./index.scss";
import { navigateTo } from "@tarojs/taro";
import { useState } from "react";
import useImgStore from "@/store/imgStore";

const Index = () => {
  const [isSelectedCamera, setIsSelectedCamera] = useState(false);
  const { pageImg } = useImgStore((state) => state.classifyImg);
  return (
    <>
      {isSelectedCamera && (
        <ClassifyCamera
          setIsSelectedCamera={setIsSelectedCamera}
        ></ClassifyCamera>
      )}
      <MyNavigation title="垃圾分类" url="" type="tab"></MyNavigation>
      <View className="classify">
        <View className="classify-title">请选择你需要的分类方式</View>
        <View
          className="classify-item"
          style={"background-color: #27C36C;"}
          onClick={() => navigateTo({ url: "/pages/classifyText/index" })}
        >
          <Image
            src={pageImg[0]}
            mode="heightFix"
            className="classify-item-img"
          ></Image>
          <View className="classify-item-text">文字查询</View>
        </View>
        <View
          className="classify-item"
          style={"background-color: #85C03F"}
          onClick={() => setIsSelectedCamera(true)}
        >
          <View className="classify-item-text">图像识别</View>
          <Image
            src={pageImg[1]}
            mode="heightFix"
            className="classify-item-img"
          ></Image>
        </View>
        <View
          className="classify-item"
          style={"background-color: #33D7A9"}
          onClick={() => navigateTo({ url: "/pages/classifyVoice/index" })}
        >
          <Image
            src={pageImg[2]}
            mode="heightFix"
            className="classify-item-img"
          ></Image>
          <View className="classify-item-text">语音问答</View>
        </View>
      </View>
    </>
  );
};

export default Index;
