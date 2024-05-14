import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import axios from "axios";

const mockServerURL = "https://mock-server-url";
const path = "/list";
const apiEndpoint = `${mockServerURL}${path}`;

const Getlist = async ({ pageParam = 0 }) => {
  const url = pageParam
    ? `${apiEndpoint}?next-cursor=${pageParam}`
    : apiEndpoint;
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
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteGetList;
