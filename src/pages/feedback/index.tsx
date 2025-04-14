import { View, Image, Textarea, Button } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
import flower from "@/common/assets/feedback/flower.svg";
import eStar from "@/common/assets/feedback/empty-star.svg";
import fStar from "@/common/assets/feedback/full-star.svg";
import MyNavigation from "@/common/modules/myNavigation/myNavigation";

const Index = () => {
  const [maxStarIndex, setMaxStarIndex] = useState<number>(1);
  const star_list = [1, 2, 3, 4, 5]
  return (
    <>
      <MyNavigation
        type="normal"
        url="/pages/mineHome/index"
        title="反馈与建议"
      ></MyNavigation>
      <View className="feedback">
        <Image src={flower} className="feedback-img" mode="widthFix"></Image>
        <View className="feedback-title">
          感谢您的使用!{"\n"}请对我们的产品做出评价或提出建议
        </View>
        <View className="feedback-star">
          {star_list.map((item) => (
            <Image
              src={item > maxStarIndex ? eStar : fStar}
              mode="widthFix"
              className="feedback-star-item"
              onClick={() => setMaxStarIndex(item)}
            ></Image>
          ))}
        </View>
        <Textarea className="feedback-input"></Textarea>
        <Button className="feedback-commit">提交</Button>
      </View>
    </>
  );
};

export default Index;
