import { useMutation } from "@tanstack/react-query";
import CommentsApi from "../../apis/commentsApi";
import { LikedQueryType } from "../../interface/CommentsInterface";

export const usePostLiked = ({ postId, commentId, like }: LikedQueryType) => {
  const transformed_postId = parseInt(postId as string);
  return useMutation({
    mutationFn: () => {
      return CommentsApi.postLiked({
        postId: transformed_postId,
        commentId,
        like,
      });
    },
  });
};
