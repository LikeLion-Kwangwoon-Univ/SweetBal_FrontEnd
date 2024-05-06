import { HttpResponse, http } from "msw";
import { BubbleType } from "../interface/BubbleInterface";

let comments: BubbleType[] = [];
let recomments: BubbleType[] = [];

export const handlers = [
  http.get("/comments/1", () => {
    return HttpResponse.json(comments);
    // return HttpResponse.json([
    //   { id: "1", position: "left", message: "comment", recomment: 0, liked: 0 },
    //   { id: "2", position: "left", message: "hello", recomment: 13, liked: 4 },
    //   { id: "3", position: "right", message: "??", recomment: 11, liked: 54 },
    //   { id: "5", position: "left", message: "nope", recomment: 32, liked: 3 },
    // ]);
  }),
  http.get("/comments/1/1", () => {
    return HttpResponse.json(recomments);
    // return HttpResponse.json([
    //   {
    //     id: "1",
    //     position: "left",
    //     message: "recomment",
    //     recomment: 0,
    //     liked: 0,
    //   },
    //   { id: "2", position: "left", message: "hello", recomment: 13, liked: 4 },
    //   { id: "3", position: "right", message: "??", recomment: 11, liked: 54 },
    //   { id: "5", position: "left", message: "nope", recomment: 32, liked: 3 },
    // ]);
  }),
  http.patch("/comments/1/comment", async ({ request }) => {
    const newComment: BubbleType = (await request.json()) as BubbleType;
    comments = [newComment, ...comments];
    return HttpResponse.json({
      comments: [...comments, newComment],
    });
  }),
  // `/comments/밸런스게임 id/recomment/target id`
  http.patch(`/comments/1/recomment/1`, async ({ request }) => {
    const newRecomment: BubbleType = (await request.json()) as BubbleType;
    recomments = [newRecomment, ...recomments];
    return HttpResponse.json({
      recomments: [...recomments, newRecomment],
    });
  }),
];
