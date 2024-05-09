import { HttpResponse, http } from "msw"

export const getBalanceData = [
    http.get("/balance", () => {
        return HttpResponse.json({
            eyesScore: 12,
            title1: "내 생각 읽기 가능",
            subtitle1:
                "내가 1시간 동안 마음 속으로\n상상한 것을 누군가 읽을 수 있음",
            people1: 0,
            title2: "내 카톡 읽기 가능",
            subtitle2: "5년치 카톡을 누군가 읽을 수 있음",
            people2: 0,
        })
    }),
]
