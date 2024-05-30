import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostCommentType } from "../../interface/CommentsInterface";
import CommentsApi from "../../apis/commentsApi";

export const usePostComment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: PostCommentType) => {
      return CommentsApi.postComment({ postId, comment });
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["useGetComments", postId],
      });
    },
    onError: (error) => {},
  });
};
