import { View, Input, Image } from "@tarojs/components";
import "./index.scss";
import MyNavigation from "@/common/modules/myNavigation/myNavigation";
import search from "@/common/assets/classify/search2.svg";
import back from "@/common/assets/classify/city.svg";

interface itemProps {
  id: number;
  objname: string;
  classify: string;
  attention: string;
}

const result_list: itemProps[] = [
  {
    id: 1,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 2,
    objname: "南孚电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 3,
    objname: "注射器",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 4,
    objname: "实验室药盒",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 5,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 6,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 7,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 8,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 9,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
  {
    id: 10,
    objname: "废旧电池",
    classify: "有害垃圾",
    attention: "有害垃圾应该交由特殊部门处理，不可随意丢在土里！",
  },
];

const Index = () => {
  const placehoderText = "请输入你要查询的垃圾名称......";
  return (
    <>
      <MyNavigation
        title="文字查询"
        url="/pages/classifyHome/index"
        type="normal"
      ></MyNavigation>
      <View className="classifyText">
        <View className="classifyText-search">
          <View className="classifyText-search-input">
            <Input
              placeholder={placehoderText}
              placeholderClass="placeholder-Style"
              className="classifyText-search-inputStyle"
              style={"font-size:30rpx; color: #1A1A1A"}
            ></Input>
          </View>
          <View className="classifyText-search-btn">
            <Image src={search} mode="heightFix" style={"height:39rpx"}></Image>
          </View>
        </View>
        <View className="classifyText-title">总查询记录</View>
        <View className="classifyText-form">
          <View className="classifyText-form-meter">
            <View className="meter1">序号</View>
            <View className="meter2">名称</View>
            <View className="meter3">类别</View>
            <View className="meter4">注意事项</View>
          </View>
          <View className="classifyText-form-content">
            {result_list.map((item, index) => {
              return (
                <View className="container" key={index}>
                  <View className="container-content1">{item.id}</View>
                  <View className="container-content2">{item.objname}</View>
                  <View className="container-content3">{item.classify}</View>
                  <View className="container-content4">{item.attention}</View>
                </View>
              );
            })}
          </View>
        </View>
        <Image
          src={back}
          mode="widthFix"
          className="classifyText-back"
        ></Image>
      </View>
    </>
  );
};

export default Index;
