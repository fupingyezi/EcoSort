import { View, Image, Button } from "@tarojs/components";
import { useState, createContext } from "react";
import { memo } from "react";
import "./style.scss";
import img from "@/common/assets/classify/camera2.svg";
import AlbumWindow from "../AlbumWindow/albumWindow";
import useImgStore from "@/store/imgStore";
import { processContent } from "@/components/voiceProfile/finished/finished";

export interface ICameraIdentifyConext {
  setRes: (res: CameraIdentifyRes) => void;
}

export const CameraIdentifyContext = createContext<ICameraIdentifyConext>({
  setRes: () => {},
});

export interface CameraIdentifyRes {
  imgUrl: string;
  content: string;
  category: string;
}

const ClassifyCamera: React.FC<{
  setIsSelectedCamera: (isSelect: boolean) => void;
}> = memo(({ setIsSelectedCamera }) => {
  const [isShow, setIsShow] = useState(false);
  const [identifyRes, setIdentifyRes] = useState<CameraIdentifyRes>({
    imgUrl: "",
    content: "",
    category: "",
  });
  const { classifyImg } = useImgStore((state) => state.classifyImg);
  const categoryImg = {
    可回收物: classifyImg.recyclable || "",
    其他垃圾: classifyImg.other || "",
    有害垃圾: classifyImg.hazardous || "",
    厨余垃圾: classifyImg.kitchen || "",
  };

  const passesContext: ICameraIdentifyConext = {
    setRes: (res: CameraIdentifyRes) => {
      setIdentifyRes(res);
    },
  };

  return (
    <>
      <View className="classifycamera">
        <View className="classifycamera-back"></View>
        <View className="classifycamera-window">
          {identifyRes.imgUrl === "" && (
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
          {identifyRes.imgUrl !== "" && (
            <>
              <View
                className="classifycamera-window-cancle"
                onClick={() => setIsSelectedCamera(false)}
              >
                ×
              </View>
              <Image
                src={identifyRes.imgUrl}
                mode="heightFix"
                className="classifycamera-window-img"
              ></Image>
              <View className="classifycamera-window-text">
                <Image
                  src={categoryImg[identifyRes.category] || ""}
                  mode="widthFix"
                  className="classifycamera-window-text-img"
                ></Image>
                <View className="classifycamera-window-text-content">
                  {processContent(identifyRes.content)}
                </View>
              </View>
            </>
          )}
        </View>
      </View>
      {isShow && (
        <CameraIdentifyContext.Provider value={passesContext}>
          <AlbumWindow
            isVisible={isShow}
            setIsVisible={setIsShow}
            type="op"
            isOverlay={false}
          ></AlbumWindow>
        </CameraIdentifyContext.Provider>
      )}
    </>
  );
});

export default ClassifyCamera;
