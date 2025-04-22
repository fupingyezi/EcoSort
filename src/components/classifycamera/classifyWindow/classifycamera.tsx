import { View, Image, Button } from "@tarojs/components";
import { useState } from "react";
import { memo } from "react";
import "./style.scss";
import img from "@/common/assets/classify/camera2.svg";
import AlbumWindow from "../AlbumWindow/albumWindow";
import warning from "@/common/assets/classify/warning.svg";
import test from "@/common/assets/classify/test.png";

const ClassifyCamera: React.FC<{
  setIsSelectedCamera: (isSelect: boolean) => void;
}> = memo(({ setIsSelectedCamera }) => {
  const [isShow, setIsShow] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <View className="classifycamera">
        <View className="classifycamera-back"></View>
        <View className="classifycamera-window">
          {imgUrl === "" && (
            <>
              <Image
                src={img}
                mode="heightFix"
                style={"height: 200rpx"}
              ></Image>
              <View className="classifycamera-window-title">
                点击使用相片识别进行垃圾分类
              </View>
              <View className="classifycamera-window-btn">
                <Button
                  className="classifycamera-window-btn-item"
                  style={"background-color: #FF3B30 "}
                  onClick={() => setIsSelectedCamera(false)}
                >
                  取消
                </Button>
                <Button
                  className="classifycamera-window-btn-item"
                  style={"background-color: #12B858"}
                  onClick={() => setIsShow(true)}
                >
                  提交
                </Button>
              </View>
            </>
          )}
          {imgUrl !== "" && (
            <>
              <View
                className="classifycamera-window-cancle"
                onClick={() => setIsSelectedCamera(false)}
              >
                ×
              </View>
              <Image
                src={test}
                mode="aspectFit"
                className="classifycamera-window-img"
              ></Image>
              <View className="classifycamera-window-text">
                <Image
                  src={warning}
                  mode="widthFix"
                  className="classifycamera-window-text-img"
                ></Image>
                <View className="classifycamera-window-text-content">
                  {content}
                </View>
              </View>
            </>
          )}
        </View>
      </View>
      {isShow && (
        <AlbumWindow
          isVisiable={isShow}
          setIsVisible={setIsShow}
          type="op"
          setImgUrl={setImgUrl}
          isOverlay={false}
          setContent={setContent}
        ></AlbumWindow>
      )}
    </>
  );
});

export default ClassifyCamera;
