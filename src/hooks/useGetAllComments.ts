import { useGetComments } from "@/query/get/useGetComments";
import { useGetRecomments } from "@/query/get/useGetRecomments";
import {
  commentsState,
  recommentsState,
  targetCommentState,
} from "@/store/comments/atoms";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useGetAllComments = (postId: number) => {
  const getComments = useGetComments(postId);
  const targetComment = useRecoilValue(targetCommentState);
  const getRecomments = useGetRecomments({
    postId,
    commentId: targetComment?.id,
  });
  const setCommentsState = useSetRecoilState(commentsState);
  const setReCommentsState = useSetRecoilState(recommentsState);

  const isLoading = getComments.isLoading || getRecomments.isLoading;
  const isError = getComments.isError || getComments.isError;

  useEffect(() => {
    setCommentsState(getComments.data || []);
  }, [getComments, setCommentsState]);

  useEffect(() => {
    setReCommentsState(getRecomments.data || []);
  }, [getRecomments, setReCommentsState]);

  return { isLoading, isError };
};
