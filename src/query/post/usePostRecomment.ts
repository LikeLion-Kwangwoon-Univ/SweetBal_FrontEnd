import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostCommentType } from "../../interface/CommentsInterface";
import CommentsApi from "../../apis/commentsApi";

export const usePostRecomment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: PostCommentType) => {
      return CommentsApi.postRecomment({ postId, comment });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["useGetRecomments", postId],
      });
    },
  });
};
