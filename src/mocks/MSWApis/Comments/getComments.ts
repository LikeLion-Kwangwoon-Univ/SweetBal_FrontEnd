import { HttpResponse, http } from "msw";
import { BubbleType } from "../../../interface/BubbleInterface";

const comments: BubbleType[] = [];
const recomments: BubbleType[] = [];

for (let i = 0; i < 20; i++) {
  comments.push({
    id: i,
    sideInfo: 0,
    content: "댓글",
    childCount: i,
    likeCount: i,
    parentCommentId: -1,
  });
}

for (let i = 0; i < 20; i++) {
  recomments.push({
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
    return HttpResponse.json(comments);
  }),

  // 대댓글 가져오기
  http.get("/goldbalance/1/recomment/0", () => {
    return HttpResponse.json(recomments);
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
    comments.push(newComment);
    return HttpResponse.json({
      comments: [...comments, newComment],
    });
  }),

  // 대댓글 추가
  // `/comments/밸런스게임 id/recomment/target id`
  http.post(`/goldbalance/1/recomment/add`, async ({ request }) => {
    const { sideInfo, comment, parentCommentId } = (await request.json()) as {
      sideInfo: number;
      comment: string;
      parentCommentId: number;
    };
    const newRecomment = {
      id: 1000,
      sideInfo: sideInfo,
      content: comment,
      childCount: 0,
      likeCount: 0,
      parentCommentId: parentCommentId,
    };
    return HttpResponse.json({
      recomments: [...recomments, newRecomment],
    });
  }),
];
