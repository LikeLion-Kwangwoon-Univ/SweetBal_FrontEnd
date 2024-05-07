import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getComments = async () => {
  try {
    const response = await axios.get("/comments/1");
    console.log("댓글 가져오기 성공", response.data);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log("댓글 가져오기 실패", e);
    throw new Error(e.response?.data?.message);
  }
};

export const useCommentsQuery = () => {
  return useQuery({
    queryKey: ["balance", "comments"],
    queryFn: () => getComments(),
  });
};
