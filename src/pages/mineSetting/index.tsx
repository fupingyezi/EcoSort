import { View, Image, Input, Button } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import useUserStore from "@/store/userStore";
import arrow from "@/common/assets/mineHome/arrow.svg";
import LoginWindow from "@/components/loginWindow/loginWindow";
// import AlbumWindow from "@/components/classifycamera/AlbumWindow/albumWindow";
import classNames from "classnames";
import AlbumWindow1 from "@/components/AlbumWindow/AlbumWindow1";

export interface SettingPorps {
  title: string;
  content: string;
}

const Index = () => {
  const { userInfo, isLogin, setUserInfo } = useUserStore();
  const [nickname, setNickname] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isAlbumOpen, setIsAlbumOpen] = useState<boolean>(false);

  const settingList: SettingPorps[] = [
    { title: "头像", content: userInfo.avatar || "未设置" },
    {
      title: "用户名",
      content: userInfo.username || (isLogin ? "未设置" : "未登录"),
    },
    { title: "实名认证", content: userInfo.name },
    { title: "社区认证", content: userInfo.community },
    { title: "登录状态", content: isLogin ? "已登录" : "未登录" },
  ];

  const handleInputChange = (field: keyof typeof userInfo, value: string) => {
    // if (!isLogin) {
    //   Taro.showToast({ title: "请先登录", icon: "none" });
    //   return;
    // }
    setUserInfo({ ...userInfo, [field]: value });
    setNickname("");
  };

  const handleOnclick = (title: string) => {
    console.log(title);
    if (title === "用户名" && !isFocus) setIsFocus(true);
    else if (title === "登录状态" && !isLogin) setIsLoginOpen(true);
    else if (title === "头像" && !isLogin) setIsAlbumOpen(true);
  };

  const renderListItem = (list: SettingPorps[]) => {
    return list.map((item, index) => (
      <View key={index} className="mine-setting-content-item">
        <View className="item-content">
          {item.title === "头像" ? (
            <Image
              src={item.content}
              className="avatar-img"
              onClick={() => setIsAlbumOpen(true)}
            />
          ) : item.title === "用户名" ? (
            <Input
              value={nickname}
              placeholder={isFocus ? "" : item.content}
              placeholderClass="input-placeholder"
              focus={isFocus}
              // disabled={!isLogin}
              onInput={(e) => setNickname(e.detail.value)}
              onConfirm={() => handleInputChange("username", nickname)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              className="edit-input"
            />
          ) : (
            <View className="disabled-text">{item.content}</View>
          )}
        </View>
        <View className="item-title" onClick={() => handleOnclick(item.title)}>
          {item.title}
          <Image src={arrow} className="item-icon" mode="heightFix" />
        </View>
      </View>
    ));
  };

  return (
    <>
      <MyNavigation
        type="normal"
        title="个人中心"
        url="/pages/mineHome/index"
      />
      <LoginWindow isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
      <AlbumWindow1 isVisible={isAlbumOpen} setIsVisible={setIsAlbumOpen} />
      <View className="mine-setting">
        <View className="mine-setting-content">
          {renderListItem(settingList)}
        </View>
        <View className={classNames("mine-setting-footer", { none: !isLogin })}>
          <Button className="mine-setting-btn" onClick={() => {}}>
            退出登录
          </Button>
        </View>
      </View>
    </>
  );
};

export default Index;
