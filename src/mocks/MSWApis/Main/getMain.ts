import { HttpResponse, http } from "msw";
import { getMainDataType } from "../../../query/get/useGetMain";

const totalMainData: getMainDataType = {
  status: 200,
  response: [],
};
for (let i = 0; i < 3; i++) {
  totalMainData.response.push({
    subject: "최고인기",
    list: [],
  });
  for (let j = 0; j < 4; j++) {
    totalMainData.response[i].list.push({
      balanceId: 1,
      title1: "내 마음속 읽기 으므음으ㅡㅇㅇㅇㅇ",
      title2: "오늘은 피자",
    });
  }
}
export const getMainData = [
  http.get("/goldbalance/home", () => {
    return HttpResponse.json(totalMainData);
  }),
];
