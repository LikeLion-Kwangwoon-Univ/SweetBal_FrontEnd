import { useMutation } from "@tanstack/react-query";
import RegisterApi from "@/apis/registerApi";
import { RegisterType } from "@/interface/RegisterInterface";
import { SetStateAction } from "react";

interface PostBalanceType {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  setId: React.Dispatch<SetStateAction<number | null>>;
}
// type PostBalanceType = React.Dispatch<SetStateAction<boolean>>;

export const usePostBalance = ({ setIsModalOpen, setId }: PostBalanceType) => {
  return useMutation({
    mutationFn: (balance: RegisterType) => {
      return RegisterApi.postBalance(balance);
    },
    onSuccess: (res) => {
      setIsModalOpen(true);
      setId(res.data);
    },
  });
};
