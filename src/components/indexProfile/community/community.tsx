import { View, Image } from "@tarojs/components";
import { memo, useState } from "react";
import "./style.scss";
import example from "@/common/assets/index/example.png";

interface infoType {
  title: string;
  views: number;
  time: string;
  img: string;
}

const circle_list: infoType[] = [
  {
    title: "华中师范大学志愿队进社区协助居委会进行垃圾回收",
    views: 1234,
    time: "2小时前",
    img: example,
  },
  {
    title: "武汉市环保局组织2025年度春季废旧衣物回收",
    views: 1234,
    time: "2小时前",
    img: example,
  },
  {
    title: "武汉市中小学实行环保学校行为守则",
    views: 1234,
    time: "2小时前",
    img: example,
  },
];

const trans_list: infoType[] = [
  {
    title: "国家环保局发布2025年度最新分类流程规章制度",
    views: 1234,
    time: "2小时前",
    img: example,
  },
  {
    title: "永州冷水滩区：助推食品安全“两个责任”落地落实落细",
    views: 1234,
    time: "2小时前",
    img: example,
  },
  {
    title: "武汉市中小学实行环保学校行为守则",
    views: 1234,
    time: "2小时前",
    img: example,
  },
];

const Community: React.FC = memo(() => {
  const [selectedTitle, setSeletedTitle] = useState<"circle" | "trans">("circle");
  return (
    <View className="community">
      <View className="community-title">
        <View
          className="community-title-item"
          style={selectedTitle === "circle" ? "background-color: #F5F5F5;" : ""}
          onClick={() => setSeletedTitle("circle")}
        >
          垃圾回收
        </View>
        <View
          className="community-title-item"
          style={selectedTitle === "trans" ? "background-color: #F5F5F5;" : ""}
          onClick={() => setSeletedTitle("trans")}
        >
          变废为宝
        </View>
      </View>
      <View className="community-list">
        {(selectedTitle === "circle" ? circle_list : trans_list).map(
          (item, index) => {
            return (
              <View className="community-list-item" key={index}>
                <View className="community-list-item-left">
                  <View style={"font-size: 30rpx; color: #1A1A1A;"}>
                    {item.title}
                  </View>
                  <View
                    style={"font-size: 24rpx; color: #8C8C8C;"}
                  >{`阅读量${item.views}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item.time}`}</View>
                </View>
                <Image
                  src={item.img}
                  mode="heightFix"
                  className="community-list-item-right"
                ></Image>
              </View>
            );
          },
        )}
      </View>
    </View>
  );
});

export default Community;
