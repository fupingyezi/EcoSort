import { View, Image } from "@tarojs/components";
import { memo } from "react";
import { switchTab } from "@tarojs/taro";
import "./style.scss";

const resIcon = "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/answerfinish.png";
const personal = "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/toMine.png";

const Result: React.FC<{ correctNumber: number; subject: string }> = memo(
  ({ correctNumber, subject }) => {
    const score = correctNumber * 10;
    return (
      <View className="result">
        <Image src={resIcon} className="result-img1" mode="widthFix"></Image>
        <View className="result-content">
          <View className="congratulation">恭喜完成答题，你太棒了！</View>
          <View className="result-score">
            <View className="title">本次积分</View>
            <View className="score">{score}</View>
          </View>
          <View className="result-subject">
            <View className="title">{`"${subject}"`}</View>
            <View className="condition">
              <View className="condition-item">
                <View className="item-line">
                  <View className="item-title">题目数量</View>
                  <View className="item-data">10</View>
                </View>
                <View className="item-line">
                  <View className="item-title">总分</View>
                  <View className="item-data">100分</View>
                </View>
              </View>
              <View className="condition-item">
                <View className="item-line">
                  <View className="item-title">答题时长</View>
                  <View className="item-data">25分钟</View>
                </View>
                <View className="item-line">
                  <View className="item-title">及格</View>
                  <View className="item-data">60分</View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="result-personal">
          <Image
            className="result-personal-img"
            src={personal}
            mode="widthFix"
            onClick={() => switchTab({ url: "/pages/mineHome/index" })}
          ></Image>
          <View className="result-personal-text">个人中心</View>
        </View>
      </View>
    );
  },
);

export default Result;
