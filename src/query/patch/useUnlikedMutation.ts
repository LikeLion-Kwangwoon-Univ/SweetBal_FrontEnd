import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useUnlikedMutation = (targetId: string) => {
  return useMutation({
    mutationFn: () => {
      return axios.patch(`/comments/1/unliked/${targetId}`);
    },
    onSuccess: (res) => {
      console.log("좋아요 삭제 성공", res);
    },
    onError: (error) => {
      console.log("좋아요 삭제 실패", error);
    },
  });
};
