import { View, Button, Image } from "@tarojs/components";
import classNames from "classnames";
import "./style.scss";
import { useState, memo, useContext } from "react";
import { QuestionContext, IQuestionContext } from "@/pages/examDetail";
import { QuestionList1 } from "@/common/exam/examBank";

export type option = {
  sequenceWord: string;
  optionContent: string;
};

export interface QuestionParams {
  question: string;
  options: option[];
  correctIndex: number;
}

const Question = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const context = useContext<IQuestionContext>(QuestionContext);
  const renderContent = QuestionList1[Math.min(currentIndex, 9)];
  const [selectedIndex, setSeletedIndex] = useState<number>(-1);
  const isDisabled = selectedIndex !== -1;
  const correctImg =
    "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/%E6%AD%A3%E7%A1%AE.png";
  const errorImg =
    "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/%E9%94%99%E8%AF%AF.png";

  const optionClasses = (isCorrect: boolean, isError: boolean) => {
    return classNames("option", {
      "is-corrected": isCorrect,
      "is-error": isError,
    });
  };

  const contentClasses = (isShow: boolean) => {
    return classNames("option-content", {
      "is-show": isShow,
    });
  };

  const handleSelect = (index: number) => {
    setSeletedIndex(index);
    const isCorrect = index === renderContent.correctIndex;
    context.OnSelect(isCorrect);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setSeletedIndex(-1);
  };

  return (
    <View className="question">
      <View className="question-type">
        {renderContent.options.length === 2 ? "判断题" : "选择题"}
      </View>
      <View className="question-title">{renderContent.question}</View>
      {renderContent.options.map((item, index) => {
        const isCorrect =
          selectedIndex !== -1 && index === renderContent.correctIndex;
        const isError =
          selectedIndex !== -1 &&
          selectedIndex !== renderContent.correctIndex &&
          index === selectedIndex;
        const isShow =
          selectedIndex !== -1 &&
          index !== renderContent.correctIndex &&
          index !== selectedIndex;
        const img = isCorrect? correctImg : isError? errorImg : "";
        return (
          <Button
            className={optionClasses(isCorrect, isError)}
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isDisabled}
          >
            <View
              className={contentClasses(isShow)}
            >{`${item.sequenceWord}.${item.optionContent}`}</View>
            <Image className="option-img" src={img} mode="heightFix"></Image>
          </Button>
        );
      })}

      {selectedIndex !== -1 && (
        <View>
          <View className="question-result">
            <View>
              正确答案:&nbsp;
              {renderContent.options[renderContent.correctIndex].sequenceWord}
            </View>
            <View
              style={`color: ${selectedIndex === renderContent.correctIndex ? "#12BB58" : "#F5222D"}`}
            >
              您选择:&nbsp;
              {renderContent.options[selectedIndex].sequenceWord}
            </View>
          </View>
          {currentIndex !== 9 && (
            <View
              className="question-next"
              onClick={() => handleNextQuestion()}
            >
              下一题
            </View>
          )}
        </View>
      )}
    </View>
  );
});

export default Question;
