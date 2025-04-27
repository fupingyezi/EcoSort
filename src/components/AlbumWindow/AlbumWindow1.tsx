import { View, Button } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
import handleChooseImage from "@/common/utils/handleGetImg";
import useUserStore from "@/store/userStore";

interface props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const AlbumWindow1: React.FC<props> = memo(({ ...props }) => {
  const { isVisible, setIsVisible } = props;
  const userInfo = useUserStore(state => state.userInfo);
  const setUserInfo = useUserStore(state => state.setUserInfo);
  
  const handleClick = (sourceType: "album" | "camera") => {
    handleChooseImage({
      setIsVisible,
      setRes: () => {},
      requestType: "user",
      sourceType,
      userInfo,     
      setUserInfo   
    });
  };
  return (
    <>
      {isVisible && <View className="mask show"></View>}{" "}
      <View className="albumWindow">
        <Button
          className="albumWindow-btn"
          onClick={() => handleClick("camera")}
        >
          拍照
        </Button>
        <Button
          className="albumWindow-btn"
          onClick={() => handleClick("album")}
        >
          上传文件
        </Button>
        <Button
          className="albumWindow-btn"
          onClick={() => setIsVisible(false)}

        >
          取消
        </Button>
      </View>
    </>
  );
});

export default AlbumWindow1;
