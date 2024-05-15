import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const ServerUrl = "https://localhost8080";
const path = "/goldbalance/list/lastest";
const apiEndpoint = `${ServerUrl}${path}`;

const Getlist = async ({ pageParam = 0 }) => {
  const pageSize = 5;
  const url = `${apiEndpoint}?cursor=${pageParam}&pageSize=${pageSize}`;
  const response = await axios.get(url);
  const lists = response.data;
  return lists;
};

const useInfiniteGetList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["project"], Getlist, {
    getNextPageParam: (lastPage) => {
      // Assuming your backend returns -1 for the last page
      return lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor;
    },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
    }),
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
