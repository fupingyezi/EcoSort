import { View, ScrollView, GridView, Image } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
// import useImgStore from '@/store/imgStore'
import sub41 from "@/common/assets/index/sub4_1.png";
import sub42 from "@/common/assets/index/sub4_2.png";
import sub43 from "@/common/assets/index/sub4_3.png";
import sub44 from "@/common/assets/index/sub4_4.png";

const Exchange: React.FC = memo(() => {
  // const { exchange } = useImgStore((state) => state.indexImg);
  const textlist = [sub41, sub42, sub43, sub44];
  const exchangeList = textlist.map((item) => {
    return {
      imgUrl: item,
      tradename: "花王洁霸洗衣粉5kg",
      costnum: 36667,
      exchangenum: 0,
    };
  });
  return (
    <ScrollView
      className="exchange-container"
      type="custom"
      style={{ height: "calc(100vh - 270rpx)" }}
      scrollY={true}
      enhanced={true}
      showScrollbar={false}
    >
      <GridView type="masonry" crossAxisGap={5} mainAxisGap={5}>
        {exchangeList.map((item) => {
          return (
            <View className="exchange-item" key={item.imgUrl}>
              <Image
                src={item.imgUrl}
                mode="widthFix"
                className="exchange-img"
              ></Image>
              <View className="exchange-content">
                <View className="exchange-content-text1">{item.tradename}</View>
                <View className="exchange-content-text2">
                  <View className="exchange-content-text2-item1">{`${item.costnum}积分`}</View>
                  <View className="exchange-content-text2-item2">{`已兑换${item.exchangenum}件`}</View>
                </View>
              </View>
            </View>
          );
        })}
      </GridView>
    </ScrollView>
  );
});

export default Exchange;
