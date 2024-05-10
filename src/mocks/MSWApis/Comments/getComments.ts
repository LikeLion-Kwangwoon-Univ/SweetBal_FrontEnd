import { HttpResponse, http } from "msw";
import { BubbleType } from "../../../interface/BubbleInterface";

const comments: BubbleType[] = [];
const recomments: BubbleType[] = [];

for (let i = 0; i < 20; i++) {
  comments.push({
    id: i,
    sideInfo: 0,
    content: "....",
    childCount: i,
    likeCount: i,
    parentCommnetId: -1,
  });
}

for (let i = 0; i < 20; i++) {
  recomments.push({
    id: i,
    sideInfo: 0,
    content: "....",
    likeCount: i,
    parentCommnetId: 1,
  });
}

export const getCommentsData = [
  http.get("/goldbalance/1/comment", () => {
    return HttpResponse.json(comments);
  }),
  http.get("/goldbalance/1/recomment/1", () => {
    return HttpResponse.json(recomments);
  }),
];
