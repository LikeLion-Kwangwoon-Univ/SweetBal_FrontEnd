import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const ServerUrl = "http://localhost:8080"; // URL 형식을 확인
const path = "/posts/latest";
const apiEndpoint = `${ServerUrl}${path}`;

const Getlist = async ({ pageParam = 0 }) => {
  const url = `${apiEndpoint}?cursor=${pageParam}`;
  const response = await axios.get(url);
  const list = response.data.postList; // postList 배열을 추출
  console.log(list);
  return {
    postList: list,
    nextCursor: response.data.nextCursor,
  };
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
