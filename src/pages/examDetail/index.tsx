import { View, Image } from "@tarojs/components";
// import classNames from "classnames";
import { createContext, useState, useCallback, useEffect } from "react";
import "./index.scss";
import Question from "@/components/question/question/question";
import Result from "@/components/question/result/result";
import back from "@/common/assets/exam/Left.svg";
import { navigateTo } from "@tarojs/taro";

export interface IQuestionContext {
  finishedNumber: number;
  correctNumber: number;
  errorNumber: number;
  OnSelect: (isCorrect: boolean) => void;
}

const QuestionContext = createContext<IQuestionContext>({
  finishedNumber: 0,
  correctNumber: 0,
  errorNumber: 0,
  OnSelect: () => {},
});

export { QuestionContext };

const condition_list = [
  {
    type: "correct",
    icon: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/1.png",
    color: "#12B858",
  },
  {
    type: "error",
    icon: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/2.png",
    color: "#F5222D",
  },
  {
    type: "finished",
    icon: "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/3.png",
    color: "#8C8C8C",
  },
];

const Index = () => {
  const [answerCondition, setAnswerCondition] = useState<
    Omit<IQuestionContext, "OnSelect">
  >({
    finishedNumber: 0,
    correctNumber: 0,
    errorNumber: 0,
  });

  const [isCommitted, setIsCommitted] = useState<boolean>(false);

  const [coutDown, setCountDown] = useState<number>(60 * 60);

  useEffect(() => {
    if (coutDown <= 0) {
      return;
    }

    const timer = setTimeout(() => {
      setCountDown(coutDown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [coutDown]);

  const minutes = Math.floor(coutDown / 60);
  const seconds = coutDown % 60;

  const handleOnSelect = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) {
        setAnswerCondition({
          ...answerCondition,
          finishedNumber: answerCondition.finishedNumber + 1,
          correctNumber: answerCondition.correctNumber + 1,
        });
      } else {
        setAnswerCondition({
          ...answerCondition,
          finishedNumber: answerCondition.finishedNumber + 1,
          errorNumber: answerCondition.errorNumber + 1,
        });
      }
    },
    [answerCondition],
  );

  const handleCommit = () => {
    setIsCommitted(true);
  };

  const passContext: IQuestionContext = {
    ...answerCondition,
    OnSelect: handleOnSelect,
  };

  return (
    <View className="exam">
      <View className="exam-navigation">
        <Image
          src={back}
          className="exam-navigation-img"
          mode="heightFix"
          onClick={() => navigateTo({ url: "/pages/examination/index" })}
        ></Image>
        {!isCommitted && (
          <View className="timer">
            倒计时&nbsp;{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </View>
        )}
        {isCommitted && (
          <View className="timer exam-title">答题结果</View>
        )}
      </View>
      {!isCommitted && (
        <>
          <View className="exam-detail">选择题6道,判断题4道,全部答对100分</View>
          <QuestionContext.Provider value={passContext}>
            <Question></Question>
          </QuestionContext.Provider>
          <View className="exam-footer">
            <View className="exam-footer-commit" onClick={() => handleCommit()}>
              交卷
            </View>
            <View className="exam-footer-condition">
              {condition_list.map((item) => (
                <View className="condition-item">
                  <Image
                    src={item.icon}
                    className="item-icon"
                    mode="heightFix"
                  ></Image>
                  <View className="item-text" style={`color: ${item.color}`}>
                    {item.type === "finished"
                      ? `${answerCondition.finishedNumber}/10`
                      : `${answerCondition[`${item.type}Number`]}`}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </>
      )}
      {isCommitted && (
        <Result
          correctNumber={answerCondition.correctNumber}
          subject="常见分类垃圾"
        ></Result>
      )}
    </View>
  );
};

export default Index;
