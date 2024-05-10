import { getMainData } from "./MSWApis/Main/getMain";
import { getBalanceData } from "./MSWApis/Balance/getBalance";
import { postPickData } from "./MSWApis/Balance/postPick";
import { getCommentsData } from "./MSWApis/Comments/getComments";

export const handlers = [
  ...getMainData,
  ...getCommentsData,
  ...getBalanceData,
  ...postPickData,
];

//   // 댓글 좋아요 추가
//   http.patch("/comments/1/liked/1", async () => {
//     const commentIndex = comments.findIndex((c) => c.id === "1");
//     if (commentIndex !== -1) {
//       comments[commentIndex] = {
//         ...comments[commentIndex],
//         liked: comments[commentIndex].liked + 1,
//       };
//     }
//     return HttpResponse.json(comments);
//   }),

//   // 댓글 좋아요 삭제
//   http.patch("/comments/1/unliked/1", async () => {
//     const commentIndex = comments.findIndex((c) => c.id === "1");
//     if (commentIndex !== -1) {
//       comments[commentIndex] = {
//         ...comments[commentIndex],
//         liked: comments[commentIndex].liked - 1,
//       };
//     }
//     return HttpResponse.json(comments);
//   }),

//   // 댓글 추가
//   http.patch("/comments/1/comment", async ({ request }) => {
//     const newComment: BubbleType = (await request.json()) as BubbleType;
//     comments = [newComment, ...comments];
//     return HttpResponse.json({
//       comments: [...comments, newComment],
//     });
//   }),

//   // 대댓글 추가
//   // `/comments/밸런스게임 id/recomment/target id`
//   http.patch(`/comments/1/recomment/1`, async ({ request }) => {
//     const newRecomment: BubbleType = (await request.json()) as BubbleType;
//     recomments = [newRecomment, ...recomments];
//     return HttpResponse.json({
//       recomments: [...recomments, newRecomment],
//     });
//   }),
// ];
