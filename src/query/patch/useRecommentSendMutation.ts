import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BubbleType } from "../../interface/BubbleInterface";

export const useRecommentSendMutation = (targetId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: BubbleType) => {
      return axios.patch(`/comments/1/recomment/${targetId}`, comment);
    },
    onSuccess: (res) => {
      console.log("대댓글 추가 성공", res);
      queryClient.invalidateQueries({
        queryKey: ["balance", "recomments", targetId],
      });
    },
    onError: (error) => {
      console.log("댓글 추가 실패", error);
    },
  });
};
