import { View, Image } from "@tarojs/components";
import { memo, useState } from "react";
import "./style.scss";
import useImgStore from "@/store/imgStore";

interface infoType {
  title: string;
  views: number;
  time: string;
  img: string;
}



const Policy: React.FC = memo(() => {
  const [selectedTitle, setSeletedTitle] = useState<"near" | "hot">("near");
  const example = useImgStore((state) => state.indexImg.policyImg[0]);
  const naer_list: infoType[] = [
    {
      title: "上海市出台《城市居民垃圾分类准则3.0》",
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
  
  const hot_list: infoType[] = [
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
  return (
    <View className="policy">
      <View className="policy-title">
        <View
          className={`policy-title-item ${selectedTitle === "near" ? "active" : ""}`}
          onClick={() => setSeletedTitle("near")}
        >
          我的附近
        </View>
        <View
          className={`policy-title-item ${selectedTitle === "hot" ? "active" : ""}`}
          onClick={() => setSeletedTitle("hot")}
        >
          最新最热
        </View>
      </View>
      <View className="policy-list">
        {(selectedTitle === "near" ? naer_list : hot_list).map(
          (item, index) => {
            return (
              <View className="policy-list-item" key={index}>
                <View className="policy-list-item-left">
                  <View className="policy-list-item-title">{item.title}</View>
                  <View className="policy-list-item-info">{`阅读量${item.views}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item.time}`}</View>
                </View>
                <Image
                  src={item.img}
                  mode="heightFix"
                  className="policy-list-item-right"
                ></Image>
              </View>
            );
          },
        )}
      </View>
    </View>
  );
});

export default Policy;
