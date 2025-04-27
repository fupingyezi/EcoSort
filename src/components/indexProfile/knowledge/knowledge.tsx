import { View, Image } from "@tarojs/components";
import { useState } from "react";
import { memo } from "react";
import "./style.scss";
import useImgStore from "@/store/imgStore";

const list: ("可回收物" | "其他垃圾" | "有害垃圾" | "厨余垃圾")[] = [
  "可回收物",
  "其他垃圾",
  "有害垃圾",
  "厨余垃圾",
];

const Knowledge: React.FC = memo(() => {
  const { classifyImg } = useImgStore((state) => state.indexImg);
  const [selectedFile, setSelectFile] = useState<
    "可回收物" | "其他垃圾" | "有害垃圾" | "厨余垃圾"
  >("可回收物");

  const imgMap = {
    "可回收物": classifyImg?.recyclable || '',
    "其他垃圾": classifyImg?.other || '',
    "有害垃圾": classifyImg?.hazardous || '',
    "厨余垃圾": classifyImg?.kitchen || ''
  };

  return (
    <View className="knowledge">
      <View className="knowledge-sidebar">
        {list.map((item, index) => {
          const itemTop = 21 + index * 82;
          const tag = selectedFile === item;
          return (
            <>
              <View
                className="knowledge-sidebar-item"
                key={index}
                onClick={() => setSelectFile(item)}
              >
                {item}
              </View>
              {tag && (
                <View
                  className="side-active"
                  style={`top:${itemTop}rpx`}
                ></View>
              )}
            </>
          );
        })}
      </View>
      <View className="knowledge-content">
        <Image 
          src={imgMap[selectedFile]} 
          mode="aspectFit"
          className="konowledge-content-img"
        />
      </View>
    </View>
  );
});

export default Knowledge;
