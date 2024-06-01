import listApi from "@/apis/listApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetList = (path: string) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["project", path], listApi, {
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

export default useGetList;
