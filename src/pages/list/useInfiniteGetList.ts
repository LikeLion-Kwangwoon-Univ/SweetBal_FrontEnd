import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/@core";

const EN_PATH = ["hot", "balance", "latest"];
const KO_PATH = ["박빙", "인기", "최근"];

const Getlist = async ({
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

const useInfiniteGetList = (path: string) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["project", path], Getlist, {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      return lastPage.lastCursor === -1 ? undefined : nextPage;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteGetList;
