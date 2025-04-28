import { create } from "zustand";

export interface userState {
  userInfo: {
    avatar: string;
    username: string;
    name: string;
    community: string;
  };
  isLogin: boolean;
  setUserInfo: (
    user: Partial<Pick<userState["userInfo"], "avatar" | "username">>,
  ) => void;
  setLogin: (isLogin: boolean) => void;
}

const useUserStore = create<userState>((set) => ({
  userInfo: {
    avatar:
      "http://image.curryking123.online/%E7%9B%B4%E6%8E%A5%E7%BB%99%E9%93%BE%E6%8E%A5/%E5%A4%B4%E5%83%8F%20%E7%94%B7%E5%AD%A9.png",
    username: "",
    name: "未实名",
    community: "未认证",
  },
  isLogin: false,
  setUserInfo: (user) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...user,
      },
    })),
  setLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));

export default useUserStore;
