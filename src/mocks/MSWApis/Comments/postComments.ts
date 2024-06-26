import { HttpResponse, http } from "msw";
import { msw_comments, msw_recomments } from "./getComments";

export const postCommentsData = [
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
      msw_comments,
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
      msw_recomments,
    });
  }),

  // 좋아요 추가 및 삭제
  http.post("/goldbalance/1/comment/1/liked/0", async () => {
    const commentIndex = msw_comments.findIndex((c) => c.id === 1);
    if (commentIndex !== -1) {
      msw_comments[commentIndex] = {
        ...msw_comments[commentIndex],
        likeCount: msw_comments[commentIndex].likeCount + 1,
      };
    }
    return HttpResponse.json(msw_comments);
  }),
];
