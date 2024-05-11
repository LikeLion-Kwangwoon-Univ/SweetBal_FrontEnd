import { CommentsQueryType } from "@/interface/CommentsInterface";
import { useGetComments } from "@/query/get/useGetComments";
import { useGetRecomments } from "@/query/get/useGetRecomments";

export const useGetAllComments = ({ postId, commentId }: CommentsQueryType) => {
  const getComments = useGetComments(postId);
  const getRecomments = useGetRecomments({ postId, commentId });

  const isLoading = getComments.isLoading || getRecomments.isLoading;
  const isError = getComments.isError || getComments.isError;

  return {
    getCommentsData: getComments.data,
    getRecommentsData: getRecomments.data,
    isLoading,
    isError,
  };
};
