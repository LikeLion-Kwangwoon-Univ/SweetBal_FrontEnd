import axios from "axios";

export const getBalanceData = async (setGameData: any) => {
    axios.get("/balancedata").then((res) => {
        setGameData({
            eyesScore: res.data.eyesScore,
            title1: res.data.title1,
            subtitle1: res.data.subtitle1,
            people1: res.data.people1,
            title2: res.data.title2,
            subtitle2: res.data.subtitle2,
            people2: res.data.people2,
        });
    });
};
