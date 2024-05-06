import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLikedMutation = (targetId: string) => {
  return useMutation({
    mutationFn: () => {
      return axios.patch(`/comments/1/liked/${targetId}`);
    },
    onSuccess: (res) => {
      console.log("좋아요 추가 성공", res);
    },
    onError: (error) => {
      console.log("좋아요 추가 실패", error);
    },
  });
};
