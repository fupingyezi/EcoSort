import { PageContainer, View, Button, Image } from "@tarojs/components";
import React, { useState } from "react";
import "./style.scss";
import classNames from "classnames";
import close from "@/common/assets/index/close-outline.svg";
import { handleLogin } from "@/common/utils/handleLogin";
import useUserStore from "@/store/userStore";

interface LoginWindowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  status: "login_begin" | "get_phone";
  setStatus: (status: "login_begin" | "get_phone") => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({
  isOpen,
  setIsOpen,
  status,
  // setStatus,
}) => {
  console.log("isOpen", isOpen);
  const welcomeText = "Hi~\n欢迎登录拉风侠\n爱分类 爱生活";
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const setLogin = useUserStore((state) => state.setLogin);

  const renderContent = () => {
    const [isAgree, setIsAgree] = useState(false);
    const agreeBtnClass = classNames("agree-btn", {
      "is-agree": isAgree,
    });

    switch (status) {
      case "login_begin": {
        const handleClick = () => {
          handleLogin("/user/login-with-wechat", setUserInfo, setLogin);
          setIsOpen(false);
        };

        return (
          <View className="loginBegin-container">
            <Image
              className="close-icon"
              src={close}
              onClick={() => setIsOpen(false)}
            ></Image>
            <View className="welcome-text">{welcomeText}</View>
            <Button className="login-btn" onClick={() => handleClick()}>
              登录
            </Button>
            <View className="agree-container">
              <View
                className={agreeBtnClass}
                onClick={() => setIsAgree(!isAgree)}
              ></View>
              <View className="agree-text">
                阅读并同意《拉风侠用户协议》、《拉风侠用户隐私政策》
              </View>
            </View>
          </View>
        );
      }
      case "get_phone": {
        return <View className="getPhone-container"></View>;
      }
    }
  };

  return (
    <PageContainer
      className="login-window"
      show={isOpen}
      overlay={true}
      overlayStyle="background-color: rgba(0,0,0,0.5)"
      position="bottom"
      customStyle="background-color: transparent;"
      onLeave={() => setIsOpen(false)}
    >
      {renderContent()}
    </PageContainer>
  );
};

export default LoginWindow;
