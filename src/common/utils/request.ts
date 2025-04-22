export const preUrl = "https://www.curryking123.online/api/v1";
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

export const get = async (url: string) => {
  // const token = await getToken();
  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  };
  try {
    const response = await Taro.request({
      url: `${preUrl}${url}`,
      // url: 'https://curryking123.online/docs#/garbage/search_garbage_api_v1_ecosort_search_list_get',
      method: "GET",
      header: headers,
      // timeout: 15000,
    });
    if (response.data.code !== 0) return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const post = async (url: string, data: any) => {
    // const token = await getToken();
    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    }
    try {
        const response = await Taro.request({
            url: `${preUrl}${url}`,
            method: "POST",
            header: headers,
            data: JSON.stringify(data),
        })
        if (response.data.code!== 0) return response.data; 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getImg = async (url: string) => {
  const response = await Taro.request({
    url: `${preUrl}${url}`,
    method: "GET",
  });
  if (response.data.code!== 0) return response.data;
}
