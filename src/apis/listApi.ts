import axiosInstance from "@/apis/@core";
import { QueryFunctionContext } from "@tanstack/react-query";

const EN_PATH = ["balance", "hot", "latest"];
const KO_PATH = ["박빙", "인기", "최근"];

const listApi = async ({
  pageParam = 0,
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const path = EN_PATH[KO_PATH.indexOf(queryKey[1])];
  const url = `goldbalance/posts/${path}?cursor=${pageParam}`;

  const response = await axiosInstance.get(url);
  const list = response.data.postList;

  return {
    postList: list,
    lastCursor: response.data.lastCursor,
  };
};

export default listApi;
