import { preUrl } from "./request";
import Taro from "@tarojs/taro";
import { userState } from "@/store/userStore";

export const handleLogin = async (
  url: string,
  setUserInfo: userState["setUserInfo"], 
  setLogin: userState["setLogin"],
) => {
  try {
    const { code } = await Taro.login();
    const response = await Taro.request({
      url: `${preUrl}${url}`,
      method: "POST",
      data: {
        code,
      },
      header: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    
    if (data.code !== 0 ) {
      throw new Error("微信登录失败");
    }

    const { username, avatar, token } = data.data; 
    setUserInfo({ username, avatar });
    setLogin(true);
    console.log("登录成功", data.data);
    Taro.setStorageSync("token", token);
  } catch (error) {
    console.error("微信授权登录出错", error);
  }
};
