import { View, Image } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
import titleIcon from "@/common/assets/exam/title-icon.svg";
import classNames from "classnames";
import arrow from "@/common/assets/exam/arrow-right.svg";
import { navigateTo } from "@tarojs/taro";

export interface ExamChoiceProps {
  title: string;
  finished: number;
  unfinished: number;
  error: number;
}

interface ConditionItemProps {
  isRed?: boolean;
  isGreen?: boolean;
  data: number | string;
  type: string;
}

const ConditionItem: React.FC<ConditionItemProps> = memo(
  ({ isRed = false, isGreen = false, data, type }) => {
    const numberclasses = classNames("number", {
      "red-font": isRed,
      "green-font": isGreen,
    });
    return (
      <View className="ConditionItem">
        <View className={numberclasses}>{data}</View>
        <View className="type">{type}</View>
      </View>
    );
  },
);

const ExamChoice: React.FC<ExamChoiceProps> = memo(
  ({ title, finished, unfinished, error }) => {
    const accuracy = Math.floor(((finished - error) / finished) * 100) + "%";
    const condition_list: ConditionItemProps[] = [
      {
        data: unfinished,
        type: "未做题",
      },
      {
        data: finished,
        type: "已做题",
      },
      {
        data: error,
        type: "错题",
      },
      {
        isRed: (finished - error) / finished <= 0.5,
        isGreen: (finished - error) / finished > 0.5,
        data: accuracy,
        type: "正确率",
      },
    ];
    return (
      <View className="exam-test-choice">
        <View className="title">
          <Image
            src={titleIcon}
            className="title-icon"
            mode="heightFix"
          ></Image>
          <View className="title-text">{title}</View>
        </View>
        <View className="condition">
          {condition_list.map((item) => (
            <ConditionItem {...item}></ConditionItem>
          ))}
        </View>
        <View
          className="btn"
          onClick={() => navigateTo({ url: "/pages/examDetail/index" })}
        >
          <View className="btn-text">开始学习</View>
          <Image src={arrow} className="btn-img" mode="heightFix"></Image>
        </View>
      </View>
    );
  },
);

export default ExamChoice;
