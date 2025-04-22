import { create } from "zustand";

export interface userState {
  userInfo: {
    avatar: string;
    nickname: string;
  };
  isLogin: boolean;
  setUserInfo: (user: { avatar: string; nickname: string }) => void;
  setLogin: (isLogin: boolean) => void;
}

const useUserStore = create<userState>((set) => ({
  userInfo: {
    avatar: "",
    nickname: "",
  },
  isLogin: false,
  setUserInfo: (user: { avatar: string; nickname: string }) =>
    set(() => ({ userInfo: user })),
  setLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));

export default useUserStore;
