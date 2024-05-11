import { useMutation } from "@tanstack/react-query";
import CommentsApi from "../../apis/commentsApi";
import { LikedQueryType } from "../../interface/CommentsInterface";

export const usePostLiked = ({ postId, commentId, like }: LikedQueryType) => {
  return useMutation({
    mutationFn: () => {
      return CommentsApi.postLiked({ postId, commentId, like });
    },
    onSuccess: (res) => {
      like === 1
        ? console.log("좋아요 추가 성공", res)
        : console.log("좋아요 삭제 성공", res);
    },
    onError: (error) => {
      like === 1
        ? console.log("좋아요 추가 실패", error)
        : console.log("좋아요 삭제 실패", error);
    },
  });
};
