import { View, Image } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
import logo from "@/common/assets/classify/voiceLogo.svg";

export const processContent = (text: string) => {
  console.log(text);
  const punctuations = ["。", "！", "？", "；", "："];
  return text.split("").reduce((result, char, index) => {
    if (punctuations.includes(char) && index !== text.length - 1) {
      return `${result}${char}\n${text[index + 1]}`;
    }
    return `${result}${char}`;
  }, "");
};

const Finished: React.FC<{ content: string }> = memo(({ content }) => {
  console.log(content);

  return (
    <View className="finished">
      <View className="finished-title">
        <Image src={logo} mode="heightFix" style={"height:78rpx"}></Image>
        <View style={"height: 78rpx;"}>拉风侠</View>
      </View>
      <View className="finished-content">{processContent(content)}</View>
    </View>
  );
});

export default Finished;
