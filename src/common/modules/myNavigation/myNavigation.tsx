import { View, Image } from "@tarojs/components";
import "./style.scss";
import { memo } from "react";
import backimg from "@/common/assets/frequent/arrow.svg";
import { navigateBack, switchTab } from "@tarojs/taro";

interface props {
  type: "tab" | "normal";
  url: string;
  title: string;
}

const MyNavigation: React.FC<props> = memo(({ type, url, title }) => {
  const handleClick = (url) => {
    switchTab({ url: url });
  };
  switch (type) {
    case "tab": {
      return (
        <View className="navigation">
          <View className="navigation-title">{title}</View>
        </View>
      );
    }
    case "normal": {
      return (
        <View className="navigation">
          <View className="navigation-title">
            <Image
              src={backimg}
              mode="heightFix"
              className="navigation-img"
              onClick={() => handleClick(url)}
            ></Image>
            {title}
          </View>
        </View>
      );
    }
  }
});

export default MyNavigation;
