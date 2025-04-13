import { View, ScrollView, Image, Input } from "@tarojs/components";
import { useState } from "react";
import MyNavigation from "@/common/modules/myNavigation/myNavigation";
import {
  Knowledge,
  Policy,
  Community,
  Exchange,
} from "@/components/indexProfile";
import "./index.scss";
import img1 from "@/common/assets/index/index1.svg";
import img2 from "@/common/assets/index/info.svg";
import arrowLeft from "@/common/assets/index/arrow-left.svg";
import c1 from "@/common/assets/index/icon1.svg";
import c2 from "@/common/assets/index/icon2.svg";
import c3 from "@/common/assets/index/icon3.svg";
import c4 from "@/common/assets/index/icon4.svg";
import actc1 from "@/common/assets/index/icon1Act.svg";
import actc2 from "@/common/assets/index/icon2Act.svg";
import actc3 from "@/common/assets/index/icon3Act.svg";
import actc4 from "@/common/assets/index/icon4Act.svg";
import search from "@/common/assets/index/search.svg";

interface choiceType {
  img: string;
  imgAct: string;
  type: "c1" | "c2" | "c3" | "c4"; //四个选项
  text: string;
}

const choiceList: choiceType[] = [
  {
    img: c1,
    imgAct: actc1,
    type: "c1",
    text: "知识库",
  },
  {
    img: c2,
    imgAct: actc2,
    type: "c2",
    text: "各地政策",
  },
  {
    img: c3,
    imgAct: actc3,
    type: "c3",
    text: "社区活动",
  },
  {
    img: c4,
    imgAct: actc4,
    type: "c4",
    text: "积分兑换",
  },
];

const placeholderText = {
  c1: "想要了解哪些知识？",
  c2: "最新政策 实时把控",
  c3: "搜索社区热门活动~",
  c4: "搜索心仪的商品吧~",
};

const Index = () => {
  const [selectedPage, setSelectedPage] = useState<"c1" | "c2" | "c3" | "c4">(
    "c1",
  );
  return (
    <>
      <MyNavigation type="tab" url="" title="拉风侠" />
      <View className="index" style={{ height: "calc(100vh - 180rpx)" }}>
        <View className="index-header">
          <View style={"height: 320rpx; width: 100%;"}>
            <Image
              src={img1}
              className="index-header-img"
              mode="widthFix"
            ></Image>
            <View className="index-header-text">
              <View
                className="index-header-text-item"
                style={"font-size:40rpx; margin-bottom: 10rpx"}
              >
                正在答题......
              </View>
              <View
                className="index-header-text-item"
                style={"font-size:26rpx;"}
              >
                垃圾分类的重要性
              </View>
              <View
                className="index-header-text-item"
                style={"font-size:20rpx;"}
              >
                你已经超过80%的用户了!
              </View>
            </View>
          </View>
          <View className="index-header-info">
            <Image
              src={img2}
              mode="heightFix"
              style={"height: 32rpx; padding-left:32rpx;"}
            ></Image>
            <View
              style={"font-size:26rpx; color: #1A1A1A; white-space: nowrap;"}
            >
              通知
            </View>
            <View className="line"></View>
            <Image
              src={arrowLeft}
              mode="heightFix"
              style={"height: 24rpx;"}
            ></Image>
            <View style={"font-size:26rpx; color: #3D3D3D;padding-right:32rpx"}>
              上海市出台《城市居民垃圾分类准则3.0》
            </View>
          </View>
          <View className="index-header-choice">
            {choiceList.map((item, index) => {
              const tag = selectedPage === item.type;
              return (
                <View
                  className="index-header-choice-item"
                  style={
                    tag
                      ? "background-color: #12B858;"
                      : "background-color: #fff;"
                  }
                  key={index}
                  onClick={() => setSelectedPage(item.type)}
                >
                  <Image
                    src={tag ? item.imgAct : item.img}
                    mode="widthFix"
                    style={"width : 48rpx"}
                  ></Image>
                  <View style={tag ? "color:#fff" : "color:#3D3D3D"}>
                    {item.text}
                  </View>
                </View>
              );
            })}
          </View>
          <View className="index-header-search">
            <Image
              src={search}
              mode="heightFix"
              style={"height: 32rpx; padding-left: 24rpx"}
            ></Image>
            <Input
              style={"font-size: 28rpx;color: #1A1A1A;"}
              placeholder={placeholderText[selectedPage]}
              placeholderClass="placehoderStyle"
            ></Input>
          </View>
        </View>
        {selectedPage === "c1" && <Knowledge />}
        {selectedPage === "c2" && <Policy />}
        {selectedPage === "c3" && <Community />}
        {selectedPage === "c4" && <Exchange />}
      </View>
    </>
  );
};

export default Index;
