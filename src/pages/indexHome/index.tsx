import { View, Image, Input } from "@tarojs/components";
import { useState } from "react";
import MyNavigation from "@/common/modules/myNavigation/myNavigation";
import {
  Knowledge,
  Policy,
  Community,
  Exchange,
} from "@/components/indexProfile";
import LoginWindow from "@/components/loginWindow/loginWindow";
import "./index.scss";
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
import classNames from "classnames";
import IndexContent from "@/components/indexContent/IndexContent";

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
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState<"login_begin" | "get_phone">(
    "login_begin",
  );

  const loginWindowContext = {
    isOpen,
    setIsOpen,
    status,
    setStatus,
  };

  return (
    <>
      <LoginWindow {...loginWindowContext} />
      <MyNavigation type="tab" url="" title="拉风侠" />
      <View className="index">
        <View className="index-header">
          <IndexContent />
          <View className="index-header-info">
            <Image
              src={img2}
              mode="heightFix"
              className="index-header-info-img"
            ></Image>
            <View className="index-header-info-text">通知</View>
            <View className="line"></View>
            <Image
              src={arrowLeft}
              mode="heightFix"
              className="index-header-info-arrow"
            ></Image>
            <View className="index-header-info-content">
              上海市出台《城市居民垃圾分类准则3.0》
            </View>
          </View>
          <View className="index-header-choice">
            {choiceList.map((item) => {
              const tag = selectedPage === item.type;
              return (
                <View
                  className={classNames("index-header-choice-item", {
                    "is-active": tag,
                  })}
                  key={item.type}
                  onClick={() => setSelectedPage(item.type)}
                >
                  <Image
                    src={tag ? item.imgAct : item.img}
                    mode="widthFix"
                    className="index-header-choice-item-img"
                  ></Image>
                  <View className="index-header-choice-item-text">
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
              className="index-header-search-icon"
            ></Image>
            <Input
              className="index-header-search-input"
              placeholder={placeholderText[selectedPage]}
              placeholderClass="placehoderStyle"
            ></Input>
          </View>
        </View>
        <View>
          {selectedPage === "c1" && <Knowledge />}
          {selectedPage === "c2" && <Policy />}
          {selectedPage === "c3" && <Community />}
          {selectedPage === "c4" && <Exchange />}
        </View>
      </View>
    </>
  );
};

export default Index;
