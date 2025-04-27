import { View, Image, ScrollView } from "@tarojs/components";
import "./index.scss";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import { examChoiceList } from "@/common/test/constValue";
import ExamChoice from "@/components/examChoice/examChoice";

const back = "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/answer1.png";

const Index = () => {
  return (
    <View className="examination">
      <MyNavigation
        type="normal"
        url="/pages/mineHome/index"
        title="答题积分"
      ></MyNavigation>
      <ScrollView
        scrollY={true}
        enhanced={true}
        showScrollbar={false}
        style={{ width: "100%", height: "calc(100vh - 180rpx)" }}
      >
        <View className="examination-content">
          <Image
            src={back}
            className="examination-back"
            mode="widthFix"
          ></Image>
          <View className="examination-gap"></View>
          {examChoiceList.map((item) => (
            <ExamChoice {...item}></ExamChoice>
          ))}
          <View className="examination-gap-btm"></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
