import { View, Image, Input } from "@tarojs/components";
import { useState } from "react";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import useImgStore from "@/store/imgStore";
import {
  Knowledge,
  Policy,
  Community,
  Exchange,
} from "@/components/indexProfile";
import LoginWindow from "@/components/loginWindow/loginWindow";
import "./index.scss";
import arrowLeft from "@/common/assets/index/arrow-left.svg";
import search from "@/common/assets/index/search.svg";
import classNames from "classnames";
import IndexContent from "@/components/indexContent/indexContent";

interface choiceType {
  img: string;
  imgAct: string;
  type: "c1" | "c2" | "c3" | "c4"; 
  text: string;
}

const Index = () => {
  const [selectedPage, setSelectedPage] = useState<"c1" | "c2" | "c3" | "c4">(
    "c1",
  );
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState<"login_begin" | "get_phone">(
    "login_begin",
  );
  const { indexImg } = useImgStore(); 
  
  const choiceList: choiceType[] = [
    {
      img: indexImg.pageImg[2] || "",
      imgAct: indexImg.pageImg[6] || "",
      type: "c1",
      text: "知识库",
    },
    {
      img: indexImg.pageImg[3] || "",
      imgAct: indexImg.pageImg[7] || "",
      type: "c2",
      text: "各地政策",
    },
    {
      img: indexImg.pageImg[4] || "",
      imgAct: indexImg.pageImg[8] || "",
      type: "c3",
      text: "社区活动",
    },
    {
      img: indexImg.pageImg[5] || "",
      imgAct: indexImg.pageImg[9] || "",
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
              src={indexImg.pageImg[1] || ''}
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
          <View style={{display: selectedPage === "c1" ? 'flex' : 'none'}}>
            <Knowledge />
          </View>
          <View style={{display: selectedPage === "c2" ? 'flex' : 'none'}}>
            <Policy />
          </View>
          <View style={{display: selectedPage === "c3" ? 'flex' : 'none'}}>
            <Community />
          </View>
          <View style={{display: selectedPage === "c4" ? 'flex' : 'none'}}>
            <Exchange />
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;
