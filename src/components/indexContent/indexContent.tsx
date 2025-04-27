import React from 'react';
import { View, Image } from "@tarojs/components";
import useImgStore from '@/store/imgStore';

const IndexContent: React.FC= React.memo(() => {
  const { indexImg } = useImgStore(); // 从状态管理获取
  
  return (
    <View className="index-content">
      <Image
        src={indexImg?.pageImg?.[0] || ""} // 使用状态中的图片
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