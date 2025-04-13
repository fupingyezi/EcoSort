import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, {
  requirePlugin,
  showToast,
  useDidShow,
  useUnload,
} from "@tarojs/taro";
import MyNavigation from "@/common/modules/myNavigation/myNavigation";
import { Primary, Ongoing, Finished } from "@/components/voiceProfile";
import "./index.scss";
import back from "@/common/assets/classify/city.svg";
import mic1 from "@/common/assets/classify/mic1.svg";
import mic2 from "@/common/assets/classify/mic2.svg";
import ani1 from "@/common/assets/classify/aniBack/aniBack1.svg";
import ani2 from "@/common/assets/classify/aniBack/aniBack2.svg";
import ani3 from "@/common/assets/classify/aniBack/aniBack3.svg";
import ani4 from "@/common/assets/classify/aniBack/aniBack4.svg";

type conditionType = "primary" | "ongoing" | "finished";

const Index = () => {
  const [condition, setCondition] = useState<conditionType>("primary");
  const [content, setContent] = useState<string>("");
  const bgc =
    condition === "finished"
      ? "background: linear-gradient(180deg, #74A4DE 0%, #68B5DD 100%);"
      : "background: linear-gradient(180deg, #45C186 0%, #62E16E 100%);";

  const img = condition === "finished" ? mic2 : mic1;

  let longPressTimer;

  const handleClick = () => {
    if (condition === "finished") setCondition("primary");
    else {
      Taro.showToast({
        duration: 1000,
        title: "太短了哦",
        icon: "none",
      });
    }
  };

  const plugin = requirePlugin("WechatSI");
  const manager = plugin.getRecordRecognitionManager();

  const initRecord = () => {
    manager.onStart = () => {
      console.log("开始录音");
    }
    manager.onStop = (res) => {
      Taro.hideLoading();
      if (res.result) {
        setContent(res.result);
        setCondition("finished");
      } else {
        setCondition("primary");
        showToast({
          title: "录音取消或未识别到内容",
          duration: 1000,
          icon: "none",
        });
      }
    };
    manager.onError = (err) => {
      Taro.hideLoading();
      console.log(err);
        showToast({
          title: `识别失败(${err.retcode})`,
          duration: 1000,
          icon: "none",
        });
        setCondition("primary");
    }
  };

  useDidShow(initRecord);

  const startRecording = () => {
    setCondition("ongoing");
    manager.start({ lang: "zh_CN" });
  };
  const stopRecording = () => {
    Taro.showLoading({ title: "正在识别..." });
    manager.stop();
  };

  const onLongPress = () => {
    longPressTimer = setTimeout(() => {
      startRecording();
    }, 200);
  };

  const onTouchEnd = () => {
    clearTimeout(longPressTimer);
    if (condition === "ongoing") {
      stopRecording();
    } else {
      handleClick();
    }
  };

  return (
    <>
      <MyNavigation
        title="语音识别"
        url="/pages/classifyHome/index"
        type="normal"
      ></MyNavigation>
      <View className="classifyVoice">
        <View className="classifyVoice-content">
          {condition === "primary" && <Primary />}
          {condition === "ongoing" && <Ongoing />}
          {condition === "finished" && <Finished />}
        </View>
        <Image
          src={back}
          mode="widthFix"
          className="classifyVoice-back"
        ></Image>
        <View
          className="classifyVoice-voice"
          style={`${bgc}`}
          onLongPress={onLongPress}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={img}
            className="classifyVoice-voice-style"
            mode="widthFix"
          ></Image>
        </View>
        {condition === "ongoing" && (
          <Image src={ani1} className="animationBack1" mode="widthFix"></Image>
        )}
        {condition === "ongoing" && (
          <Image src={ani2} className="animationBack2" mode="widthFix"></Image>
        )}
        {condition === "finished" && (
          <Image src={ani3} className="animationBack3" mode="widthFix"></Image>
        )}
        {condition === "finished" && (
          <Image src={ani4} className="animationBack4" mode="widthFix"></Image>
        )}
      </View>
    </>
  );
};

export default Index;
