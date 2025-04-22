import { PageContainer, View, Button } from "@tarojs/components";
import { memo } from "react";
import "./style.scss";
import handleChooseImage from "@/common/utils/handleGetImg";

interface props {
  isVisiable: boolean;
  setIsVisible: (value: boolean) => void;
  setImgUrl: (value: string) => void;
  isOverlay: boolean;
  type: "op" | "user";
  setContent?: (content: string) => void;
}

const AlbumWindow: React.FC<props> = memo(({ ...props }) => {
  const { isVisiable, setIsVisible, setImgUrl, isOverlay, type, setContent } =
    props;
  const handleClick = (sourceType: "album" | "camera") => {
    handleChooseImage({
      setIsVisible,
      setImgUrl,
      requestType: type,
      sourceType,
      setContent
    });
  };
  return (
    <PageContainer
      show={isVisiable}
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
