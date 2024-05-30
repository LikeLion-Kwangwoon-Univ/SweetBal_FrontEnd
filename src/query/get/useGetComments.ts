import { useQuery } from "@tanstack/react-query";
import CommentsApi from "../../apis/commentsApi";

const getCommentsData = async (postId: number) => {
  try {
    const response = await CommentsApi.getComments(postId);

    return response.data.commentList;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e.response?.data?.message);
  }
};

export const useGetComments = (postId: number) => {
  return useQuery({
    queryKey: ["useGetComments", postId],
    queryFn: () => getCommentsData(postId),
  });
};
