import React from 'react';
import { View, Image } from "@tarojs/components";
import img1 from "@/common/assets/index/index1.svg";

interface IndexContentProps {
  // 若后续有需要传递的属性，可以在这里定义
}

const IndexContent: React.FC<IndexContentProps> = React.memo(() => {
  return (
    <View className="index-content">
      <Image
        src={img1}
        className="index-header-img"
        mode="widthFix"
      ></Image>
      <View className="index-header-text">
        <View className="index-header-text-item index-header-text-item-large">
          正在答题......
        </View>
        <View className="index-header-text-item index-header-text-item-medium">
          垃圾分类的重要性
        </View>
        <View className="index-header-text-item index-header-text-item-small">
          你已经超过80%的用户了!
        </View>
      </View>
    </View>
  );
});

export default IndexContent;