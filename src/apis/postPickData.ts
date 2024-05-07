import axios from "axios";

export const postPickData = async (num: number) => {
    try {
        const response = await axios.post("/balancedata", {
            payload: {
                select: num,
            },
        });
        console.log(response.data.message);
    } catch (error) {
        console.error(error);
    }
};
