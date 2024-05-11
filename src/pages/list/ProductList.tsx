import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetList } from "./useGetList";
import { FlexColumnCSS } from "../../styles/common";
import { IoIosArrowBack } from "react-icons/io";
import SingleListBox from "../main/components/singleListBox";
import styled from "styled-components";

const queryKey = ["getlist"];

const Page = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: queryKey,
      queryFn: useGetList,
      getNextPageParam: (lastPage) => {
        return lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor;
      },
      initialPageParam: 0,
      select: (data) => (data.pages ?? []).flatMap((page) => page.lists),
    });

  return (
    <Border>
      <Title>
        <Icon>
          <IoIosArrowBack />
        </Icon>
        최근 등록 밸런스
      </Title>
      <Container>
        {data?.map((lists: LetterType, index: number) => {
          return <SingleListBox key={index} left_title={left_title} />;
        })}
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "로딩 중"
            : hasNextPage
            ? "더 로드하기"
            : "더 로드할 것이 없음!"}
        </button>
      </Container>
    </Border>
  );
};

export default Page;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  ${FlexColumnCSS};
  align-items: center;
  margin: 0 auto;
  height: fit-content;
  top: 14px;
`;

const Border = styled.div`
  ${FlexColumnCSS};
  height: 100vh;
`;
