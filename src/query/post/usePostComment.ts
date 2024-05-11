import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostCommentType } from "../../interface/BubbleInterface";
import CommentsApi from "../../apis/commentsApi";

export const usePostComment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: PostCommentType) => {
      return CommentsApi.postComment({ postId, comment });
    },
    onSuccess: (res) => {
      console.log("댓글 추가 성공", res);
      queryClient.invalidateQueries({
        queryKey: ["useGetComments", postId],
      });
    },
    onError: (error) => {
      console.log("댓글 추가 실패", error);
    },
  });
};
