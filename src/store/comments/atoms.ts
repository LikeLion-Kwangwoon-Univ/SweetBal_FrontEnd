import { BubbleType } from "@/interface/CommentsInterface";
import { atom } from "recoil";

export const currentTabState = atom<number>({
  key: "currentTabState",
  default: 1,
});

export const targetCommentState = atom<BubbleType | undefined>({
  key: "targetCommentState",
  default: undefined,
});

export const isOpenCommentState = atom<boolean>({
  key: "isOpenCommentState",
  default: false,
});

export const commentsState = atom<BubbleType[]>({
  key: "commentsState",
  default: [],
});

export const recommentsState = atom<BubbleType[]>({
  key: "recommentsState",
  default: [],
});

export const selectsState = atom<string>({
  key: "selectsState",
  default: "",
});
