export const preUrl = "http://172.20.10.12:8000/api/v1";
import Taro from "@tarojs/taro";

const getToken = () => {
  return new Promise((resolve, reject) => {
    void Taro.getStorage({
      key: "token",
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

export const get = async (url: string, isToken: boolean = false) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (isToken) {
    const token = await getToken();
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await Taro.request({
      url: `${preUrl}${url}`,
      method: "GET",
      header: headers,
    });
    if (response.data.code === 0) return response.data;
    else {
      throw new Error(response.data.msg);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const post = async (
  url: string,
  data: any,
  contentType: string = "application/json",
  isToken: boolean = false,
) => {
  if (contentType === "multipart/form-data") {
    const response = await Taro.uploadFile({
      url: `${preUrl}${url}`,
      filePath: data.file,
      name: "file",
      success: (uploadRes) => {
        console.log("上传成功", uploadRes);
      },
      fail: (err) => {
        console.error("上传失败", err);
      },
    });
    return JSON.parse(response.data);
  };

  const headers = {
    "Content-Type": "application/json",
  };

  if (isToken) {
    const token = await getToken();
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await Taro.request({
      url: `${preUrl}${url}`,
      method: "POST",
      header: headers,
      data: JSON.stringify(data)
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.data;
    }
    throw new Error(`请求失败: ${response.statusCode}`);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getImg = async (url: string) => {
  const response = await Taro.request({
    url: `${preUrl}${url}`,
    method: "GET",
  });
  if (response.data.code !== 0) return response.data;
};
