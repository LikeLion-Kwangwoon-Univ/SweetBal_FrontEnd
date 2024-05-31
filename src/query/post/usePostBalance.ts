import { useMutation } from "@tanstack/react-query";
import RegisterApi from "@/apis/registerApi";
import { RegisterType } from "@/interface/RegisterInterface";
import { SetStateAction } from "react";

type PostBalanceType = React.Dispatch<SetStateAction<boolean>>;

export const usePostBalance = (setIsModalOpen: PostBalanceType) => {
  return useMutation({
    mutationFn: (balance: RegisterType) => {
      return RegisterApi.postBalance(balance);
    },
    onSuccess: () => {
      setIsModalOpen(true);
    },
  });
};
