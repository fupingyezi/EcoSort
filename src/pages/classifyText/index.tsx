import { View, Input, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import "./index.scss";
import MyNavigation from "@/components/MyNavigation/myNavigation";
import { get, post } from "@/common/utils/request";
import search from "@/common/assets/classify/search2.svg";
import back from "@/common/assets/classify/city.svg";

interface itemProps {
  id: number;
  objname: string;
  classify: string;
  attention: string;
}

const Index = () => {
  const [searchDocument, setSearchDocument] = useState<itemProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  useEffect(() => {
    get("/ecosort/search-list", true)
      .then((res) => {
        const formattedData = res.data.map((item) => ({
          ...item,
          objname: item.keyword,
          id: item.id,
          classify: item.classify,
          attention: item.attention,
        }));
        setSearchDocument(formattedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = () => {
    if (searchValue === "") {
      get("/ecosort/search-list", true)
        .then((res) => {
          const formattedData = res.data.map((item) => ({
            ...item,
            objname: item.keyword,
            id: item.id,
            classify: item.classify,
            attention: item.attention,
          }));
          setSearchDocument(formattedData);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsSearch(false);
      return;
    }
    post("/ecosort/text", { text: searchValue }, "application/json", true)
      .then((res) => {
        // const formattedData = res.data.map((item) => ({
        //   ...item,
        //   objname: item.keyword,
        // }));
        setSearchDocument(res.data);
        setIsSearch(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const placehoderText = "请输入你要查询的垃圾名称......";
  return (
    <>
      <MyNavigation
        title="文字查询"
        url="/pages/classifyHome/index"
        type="normal"
      ></MyNavigation>
      <View className="classifyText">
        <View className="classifyText-search">
          <View className="classifyText-search-input">
            <Input
              placeholder={placehoderText}
              placeholderClass="placeholder-Style"
              className="classifyText-search-inputStyle"
              style={"font-size:30rpx; color: #1A1A1A"}
              value={searchValue}
              onInput={(e) => setSearchValue(e.detail.value)}
            ></Input>
          </View>
          <View
            className="classifyText-search-btn"
            onClick={() => handleSearch()}
          >
            <Image src={search} mode="heightFix" style={"height:39rpx"}></Image>
          </View>
        </View>
        {!isSearch && (
          <View className="classifyText-titleall">总查询记录</View>
        )}
        {isSearch && <View className="classifyText-title">查询结果</View>}
        <View className="classifyText-form">
          <View className="classifyText-form-meter">
            <View className="meter1">序号</View>
            <View className="meter2">名称</View>
            <View className="meter3">类别</View>
            <View className="meter4">注意事项</View>
          </View>
          <View className="classifyText-form-content">
            {searchDocument.map((item, index) => {
              return (
                <View className="container" key={index}>
                  <View className="container-content1">{item.id}</View>
                  <View className="container-content2">{item.objname}</View>
                  <View className="container-content3">{item.classify}</View>
                  <View className="container-content4">{item.attention}</View>
                </View>
              );
            })}
          </View>
        </View>
        <Image src={back} mode="widthFix" className="classifyText-back"></Image>
      </View>
    </>
  );
};

export default Index;
