import { View, Image } from "@tarojs/components";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import "./index.scss";
import { navigateTo } from "@tarojs/taro";
import useUserStore from "@/store/userStore";
import useImgStore from "@/store/imgStore";

const Index = () => {
  const { userInfo } = useUserStore();
  const { pageImg } = useImgStore((state) => state.mineImg);

  const order_list: { title: string; img: string }[] = [
    {
      title: "分类记录",
      img: pageImg[1],
    },
    {
      title: "题目练习",
      img: pageImg[2],
    },
    {
      title: "反馈与建议",
      img: pageImg[3],
    },
    {
      title: "我的积分",
      img: pageImg[4],
    },
  ];
  const setting_list: { title: string; img: string }[] = [
    {
      title: "设置",
      img: pageImg[6],
    },
    {
      title: "我的环保记录",
      img: pageImg[7],
    },
    {
      title: "常见问题",
      img: pageImg[8],
    },
    {
      title: "操作手册",
      img: pageImg[9],
    },
    {
      title: "隐私政策",
      img: pageImg[10],
    },
  ];
  const handleClick = (title) => {
    if (title === "题目练习") {
      navigateTo({ url: "/pages/examination/index" });
    }
    if (title === "反馈与建议") {
      navigateTo({ url: "/pages/feedback/index" });
    }
  };
  return (
    <>
      <MyNavigation type="tab" title="个人中心" url="" />
      <View className="mineHome">
        <View className="mineHome-userColumn">
          <Image
            src={userInfo.avatar}
            className="mineHome-userColumn-avatar"
          ></Image>
          <View className="mineHome-userColumn-name">{userInfo.username}</View>

          <Image
            src={pageImg[0]}
            mode="widthFix"
            style={"width:50rpx"}
            onClick={() => navigateTo({ url: "/pages/mineSetting/index" })}
          ></Image>
        </View>
        <View className="mineHome-orderColumn">
          {order_list.map((item, index) => (
            <View
              className="mineHome-orderColumn-item"
              key={index}
              onClick={() => handleClick(item.title)}
            >
              <Image
                src={item.img}
                mode="widthFix"
                style={"width: 76rpx"}
              ></Image>
              <View>{item.title}</View>
            </View>
          ))}
        </View>
        <View className="mineHome-infoColumn">
          <Image
            src={pageImg[5]}
            mode="heightFix"
            style={"height: 32rpx; padding-left: 32rpx"}
          ></Image>
          <View className="mineHome-infoColumn-text">
            您有一条新的社区通知需要处理
          </View>
          <View className="mineHome-infoColumn-go">
            立即查看
            <Image
              src={pageImg[11]}
              mode="widthFix"
              style={"width: 24rpx; margin-left: 10rpx;"}
            ></Image>
          </View>
        </View>
        <View className="mineHome-studyColumn">
          <View className="mineHome-studyColumn-title">学习记录</View>
          <View className="mineHome-studyColumn-record">
            <View className="mineHome-studyColumn-record-left">
              <View className="mineHome-studyColumn-record-back">
                <View
                  style={
                    "width: 100%; font-size: 30rpx; color: #fff; margin: 20rpx 20rpx;"
                  }
                >
                  常见分类垃圾
                </View>
                <View className="mineHome-studyColumn-record-text">
                  继续学习
                  <Image
                    src={pageImg[12]}
                    mode="widthFix"
                    style={"width: 24rpx; margin-left: 10rpx;"}
                  ></Image>
                </View>
              </View>
              <Image
                src=""
                mode="aspectFit"
                className="mineHome-studyColumn-record-img"
              ></Image>
            </View>
            <View className="mineHome-studyColumn-record-right">
              <View className="mineHome-studyColumn-record-title">
                <View>用户累计学习时长</View>
                <View>4.5小时</View>
              </View>
              <View className="mineHome-studyColumn-record-percent">
                <View
                  style={
                    "width:240rpx; height:24rpx; background-color:#f5f5f5; border-radius: 24rpx; position: relative;"
                  }
                >
                  <View
                    style={
                      "width: 50%; height: 100%; background-color:#12B858; border-radius: 24rpx; position: absolute; top: 0; left: 0;"
                    }
                  ></View>
                </View>
                <View>50%</View>
              </View>
            </View>
          </View>
        </View>
        <View className="mineHome-settingColumn">
          {setting_list.map((item, index) => (
            <View className="mineHome-settingColumn-item" key={index}>
              <View className="mineHome-settingColumn-item-img">
                <Image
                  src={item.img}
                  mode="widthFix"
                  style={"width: 40rpx"}
                ></Image>
                <View>{item.title}</View>
              </View>
              <View className="mineHome-settingColumn-item-arrow">
                <Image
                  src={pageImg[13]}
                  mode="widthFix"
                  style={"width: 24rpx; margin-left: 10rpx;"}
                ></Image>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default Index;
