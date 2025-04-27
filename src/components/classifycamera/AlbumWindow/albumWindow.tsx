import { PageContainer, View, Button } from "@tarojs/components";
import { memo, useContext } from "react";
import "./style.scss";
import handleChooseImage from "@/common/utils/handleGetImg";
import { CameraIdentifyContext } from "../classifyWindow/classifycamera";

interface props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  isOverlay: boolean;
  type: "op" | "user";
}

const AlbumWindow: React.FC<props> = memo(({ ...props }) => {
  const { isVisible, setIsVisible, isOverlay, type } = props;
  console.log("AlbumWindow", props);
  const { setRes } = useContext(CameraIdentifyContext || {});
  const handleClick = (sourceType: "album" | "camera") => {
    handleChooseImage({
      setIsVisible,
      setRes,
      requestType: type,
      sourceType,
    });
  };
  return (
    <PageContainer
      show={isVisible}
      overlay={isOverlay}
      position="bottom"
      onLeave={() => setIsVisible(false)}
      customStyle="background-color: transparent;"
      overlayStyle="background-color: rgba(0, 0, 0, 0.5);"
    >
      <View className="album-window">
        <Button
          className="album-window-btn"
          onClick={() => handleClick("camera")}
        >
          拍照
        </Button>
        <Button
          className="album-window-btn"
          onClick={() => handleClick("album")}
        >
          上传文件
        </Button>
      </View>
    </PageContainer>
  );
});

export default AlbumWindow;
