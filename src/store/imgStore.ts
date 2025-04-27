import { create } from "zustand";
import {
  indexImgProps,
  classifyImgProps,
  mineImgProps,
  feedbackImgProps,
} from "@/common/type/loadingImg";

export interface imgStoreState {
  indexImg: indexImgProps;
  classifyImg: classifyImgProps;
  mineImg: mineImgProps;
  feedbackImg: feedbackImgProps;
  setIndexImg: (img: indexImgProps) => void;
  setClassifyImg: (img: classifyImgProps) => void;
  setMineImg: (img: mineImgProps) => void;
  setFeedbackImg: (img: feedbackImgProps) => void;
}

const useImgStore = create<imgStoreState>((set) => ({
  indexImg: {
    pageImg: [],
    classifyImg: {
      recyclable: "",
      other: "",
      hazardous: "",
      kitchen: "",
    },
    policyImg: [],
    activityImg: [],
    exchange: [],
  },
  classifyImg: {
    pageImg: [],
    classifyImg: {
      recyclable: "",
      other: "",
      hazardous: "",
      kitchen: "",
    },
  },
  mineImg: {
    pageImg: [],
  },
  feedbackImg: {
    pageImg: [],
  },
  setIndexImg: (img: indexImgProps) => set(() => ({ indexImg: img })),
  setClassifyImg: (img: classifyImgProps) => set(() => ({ classifyImg: img })),
  setMineImg: (img: mineImgProps) => set(() => ({ mineImg: img })),
  setFeedbackImg: (img: feedbackImgProps) => set(() => ({ feedbackImg: img })),
}));

export default useImgStore;
