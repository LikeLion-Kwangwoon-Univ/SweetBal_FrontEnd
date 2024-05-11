import { useQuery } from "@tanstack/react-query";
import CommentsApi from "../../apis/commentsApi";
import { CommentsQueryType } from "../../interface/CommentsInterface";

const getRecommentsData = async ({ postId, commentId }: CommentsQueryType) => {
  if (commentId === undefined) return [];

  try {
    const response = await CommentsApi.getRecomments({ postId, commentId });
    console.log("대댓글 가져오기 성공", response);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log("대댓글 가져오기 실패", e);
    throw new Error(e.response?.data?.message);
  }
};

export const useGetRecomments = ({ postId, commentId }: CommentsQueryType) => {
  return useQuery({
    queryKey: ["useGetRecomments", postId, commentId],
    queryFn: () => getRecommentsData({ postId, commentId }),
  });
};
