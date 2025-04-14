import { View, Image } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
import logo from "@/common/assets/classify/voiceLogo.svg";

const Finished: React.FC = memo(() => {
  const content =
    "根据武汉市环境保护条例，普通垃圾是不可以直接放到回收站的哦！ 你可以查询或者拨打相关部门信息获取最近的垃圾分类站点。 你提问的废旧电池是有害垃圾，处理时应回收在特殊处理场所或者投入专门的有害垃圾桶，尤其不能埋在土地里！";
  const processContent = (text: string) => {
    const punctuations = ["。", "！", "？", "；", "："];
    return text.split("").reduce((result, char, index) => {
      if (punctuations.includes(char) && index !== text.length - 1) {
        return `${result}${char}\n${text[index + 1]}`;
      }
      return `${result}${char}`;
    }, "");
  };
  
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
