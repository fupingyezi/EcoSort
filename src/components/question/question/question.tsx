import { View, Button } from "@tarojs/components";
import classNames from "classnames";
import "./style.scss";
import { useState, memo, useContext, useEffect } from "react";
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

  const optionClasses = (index: number) => {
    return classNames("option", {
      "is-corrected":
        selectedIndex !== -1 && index === renderContent.correctIndex,
      "is-error":
        selectedIndex !== -1 &&
        selectedIndex !== renderContent.correctIndex &&
        index === selectedIndex,
    });
  };

  const contentClasses = (index: number) => {
    return classNames("option-content", {
      "is-show":
        selectedIndex !== -1 &&
        index !== renderContent.correctIndex &&
        index !== selectedIndex,
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
      {renderContent.options.map((item, index) => (
        <Button
          className={optionClasses(index)}
          key={index}
          onClick={() => handleSelect(index)}
          disabled={isDisabled}
        >
          <View
            className={contentClasses(index)}
          >{`${item.sequenceWord}.${item.optionContent}`}</View>
        </Button>
      ))}

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
