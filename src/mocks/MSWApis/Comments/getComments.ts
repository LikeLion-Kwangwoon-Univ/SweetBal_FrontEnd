import { HttpResponse, http } from "msw";
import { BubbleType } from "@/interface/CommentsInterface";

export const msw_comments: BubbleType[] = [];
export const msw_recomments: BubbleType[] = [];

for (let i = 0; i < 20; i++) {
  msw_comments.push({
    id: i,
    sideInfo: 0,
    content: "댓글",
    childCount: i,
    likeCount: i,
    parentCommentId: -1,
  });
}

for (let i = 0; i < 20; i++) {
  msw_recomments.push({
    id: i,
    sideInfo: 0,
    content: "대댓글",
    likeCount: i,
    parentCommentId: 1,
  });
}

export const getCommentsData = [
  // 댓글 가져오기
  http.get("/goldbalance/1/comment", () => {
    return HttpResponse.json(msw_comments);
  }),

  // 대댓글 가져오기
  http.get("/goldbalance/1/recomment/0", () => {
    return HttpResponse.json(msw_recomments);
  }),
];
