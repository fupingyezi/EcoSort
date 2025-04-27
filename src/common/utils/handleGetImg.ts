import Taro from "@tarojs/taro";
import { post } from "./request";
import { fetchToQiniu } from "./qiniu";

interface AlbumProps<Values = any> {
  setIsVisible: (isVisible: boolean) => void;
  setRes?: (Values) => void;
  requestType: "op" | "user";
  sourceType: "album" | "camera";
}

const handleChooseImage = ({
  setIsVisible,
  setRes,
  sourceType,
  requestType,
  userInfo, // 新增参数
  setUserInfo, // 新增参数
}: AlbumProps & {
  userInfo?: any;
  setUserInfo?: (info: any) => void;
}) => {
  // 移除useUserStore调用
  Taro.chooseImage({
    count: 1,
    sizeType: ["original", "compressed"],
    sourceType: [sourceType],
    success: (res) => {
      res.tempFiles.forEach((item) => {
        Taro.showLoading({
          title: "正在处理图片...",
          mask: true,
        });
        console.log(item);
        if (requestType === "user") {
          const imgUrl = fetchToQiniu(item.path);
          const newUserInfo = { username: userInfo.username, avatar: imgUrl };
          post("/user/update", newUserInfo, "application/json", true)
            .then((res) => {
              if (setUserInfo) setUserInfo(res.data);
              setIsVisible(false); // 移到成功回调内
              Taro.hideLoading();
            })
            .catch((err) => {
              // 移除 setIsVisible(false)
              Taro.hideLoading();
              Taro.showToast({
                title: `上传头像失败(${err.errMsg})`,
                duration: 1000,
                icon: "none",
              });
            });
        } else {
          post("/ecosort/detect", { file: item.path }, "multipart/form-data")
            .then((res) => {
              const data = res.data;
              console.log(data);
              const res_data = {
                imgUrl: `http://172.20.10.12:8000${data.image_url}`,
                content: data.content,
                category: data.categories[0],
              };
              if (setRes) setRes(res_data);
              setIsVisible(false); // 移到成功回调内
              Taro.hideLoading();
            })
            .catch((err) => {
              // 移除 setIsVisible(false)
              console.log(err);
              Taro.hideLoading();
              Taro.showToast({
                title: `处理图片失败(${err.errMsg})`,
                duration: 1000,
                icon: "none",
              });
            });
        }
        // 删除外层的 setIsVisible(false)
      });
    },
    fail: (err) => {
      Taro.showToast({
        title: `选择图片失败(${err.errMsg})`,
        duration: 1000,
        icon: "none",
      });
    },
  });
};

export default handleChooseImage;
