import { HttpResponse, http } from "msw";
import { getMainDataType } from "../../../query/get/useGetMain";

const totalMainData: getMainDataType = {
  status: 200,
  allPostList: [],
};
for (let i = 0; i < 3; i++) {
  totalMainData.allPostList.push({
    subject: "최고인기",
    postList: [],
  });
  for (let j = 0; j < 4; j++) {
    totalMainData.allPostList[i].postList.push({
      id: 1,
      leftSideTitle: "내 마음속 읽기 으므음으ㅡㅇㅇㅇㅇ",
      rightSideTitle: "오늘은 피자",
    });
  }
}
export const getMainData = [
  http.get("/goldbalance/home", () => {
    return HttpResponse.json(totalMainData);
  }),
];
