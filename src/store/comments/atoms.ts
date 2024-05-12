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
