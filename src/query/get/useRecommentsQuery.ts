import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getRecomments = async (commentId: string | undefined) => {
  console.log(commentId);
  if (commentId === undefined) return [];
  try {
    const response = await axios.get(`/comments/1/${commentId}`);
    console.log("대댓글 가져오기 성공", response);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log("대댓글 가져오기 실패", e);
    throw new Error(e.response?.data?.message);
  }
};

export const useRecommentsQuery = (targetId: string | undefined) => {
  return useQuery({
    queryKey: ["balance", "recomments", targetId],
    queryFn: () => getRecomments(targetId),
  });
};
