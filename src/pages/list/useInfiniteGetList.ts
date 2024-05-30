import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import axiosInstance from "@/apis/@core";

const Getlist = async ({
  pageParam = 0,
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const path = queryKey[1];
  const url = `${path}?cursor=${pageParam}`;
  const response = await axiosInstance.get(url);
  const list = response.data.postList;
  console.log(list);
  return {
    postList: list,
    nextCursor: response.data.nextCursor,
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
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor;
    },
  });

  return {
    data,
    error,
    fetchNextPage: () => {
      const nextPageCursor =
        data?.pages[data?.pages.length - 1]?.nextCursor ?? 0;
      fetchNextPage({ pageParam: nextPageCursor });
    },
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteGetList;
