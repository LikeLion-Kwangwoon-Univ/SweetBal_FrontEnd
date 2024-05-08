import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface useSearchProductQueryProps {
  rowsPerPage: number; // 한 페이지당 불러올 상품개수
  queryFn: (context?: QueryFunctionContext) => Promise<TSearchProduct>;
  sessionStorageKey: string;
}

const getList = async () => {
  try {
    const response = await axios.get(`/list`);
    console.log("리스트 가져오기", response);
    return response.data;
  } catch (e: any) {
    console.log("리스트 가오", e);
    throw new Error(e.response?.data?.message);
  }
};

export const useListQuery = () => {
  return useQuery({
    queryKey: ["list"],
    queryFn: () => getList(),
  });
};
