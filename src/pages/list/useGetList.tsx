import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const mockServerURL = "https://mock-server-url";
const path = "/list";
const apiEndpoint = `${mockServerURL}${path}`;

const getList = async ({ pageParam }: any) => {
  const url = pageParam
    ? `${apiEndpoint}?next-cursor=${pageParam}`
    : apiEndpoint;
  const response = await axios.get(url);
  const lists = response.data;
  return lists;
};

export const useGetList = ({ pageParam }: any) => {
  return useQuery({
    queryKey: ["list"],
    queryFn: () => getList({ pageParam }),
  });
};
