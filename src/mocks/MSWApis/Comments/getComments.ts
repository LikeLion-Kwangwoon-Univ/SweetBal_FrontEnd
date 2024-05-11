import { HttpResponse, http } from "msw";
import { BubbleType } from "../../../interface/BubbleInterface";

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

  // 댓글 추가
  http.post("/goldbalance/1/comment/add", async ({ request }) => {
    const { sideInfo, content } = (await request.json()) as {
      sideInfo: number;
      content: string;
    };
    const newComment = {
      id: 1000,
      sideInfo: sideInfo,
      content: content,
      childCount: 0,
      likeCount: 0,
      parentCommentId: -1,
    };
    msw_comments.push(newComment);
    return HttpResponse.json({
      comments: [...msw_comments, newComment],
    });
  }),

  // 대댓글 추가
  // `/comments/밸런스게임 id/recomment/target id`
  http.post(`/goldbalance/1/recomment/add`, async ({ request }) => {
    const { sideInfo, content, parentCommentId } = (await request.json()) as {
      sideInfo: number;
      content: string;
      parentCommentId: number;
    };
    const newRecomment = {
      id: 1000,
      sideInfo: sideInfo,
      content: content,
      childCount: 0,
      likeCount: 0,
      parentCommentId: parentCommentId,
    };
    msw_recomments.push(newRecomment);
    return HttpResponse.json({
      recomments: [...msw_recomments, newRecomment],
    });
  }),
];
