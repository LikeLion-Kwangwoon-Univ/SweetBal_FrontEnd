import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostCommentType } from "../../interface/BubbleInterface";
import CommentsApi from "../../apis/commentsApi";

export const usePostRecomment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: PostCommentType) => {
      return CommentsApi.postRecomment({ postId, comment });
    },
    onSuccess: (res) => {
      console.log("대댓글 추가 성공", res);
      queryClient.invalidateQueries({
        queryKey: ["useGetRecomments", postId],
      });
    },
    onError: (error) => {
      console.log("댓글 추가 실패", error);
    },
  });
};
