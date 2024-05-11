import { getMainData } from "./MSWApis/Main/getMain";
import { getBalanceData } from "./MSWApis/Balance/getBalance";
import { postPickData } from "./MSWApis/Balance/postPick";
import { getCommentsData } from "./MSWApis/Comments/getComments";
import { postCommentsData } from "./MSWApis/Comments/postComments";

export const handlers = [
  ...getMainData,
  ...getCommentsData,
  ...postCommentsData,
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
// ];
