import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FlexColumnCSS } from "../../styles/common";
import ListPageSingleListBox from "../../components/list/ListPageSingleListBox";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LoadingPage from "../../components/loading/Loading";
import useInfiniteGetList from "./useInfiniteGetList";

type listType = {
  balanceId: number;
  left_side_title: string;
  right_side_title: string;
  viewNum: number;
};

function ListPage() {
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteGetList();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Border>
      <Title>
        <Icon>
          <IoIosArrowBack />
        </Icon>
        최근 등록 밸런스
      </Title>
      <Container>
        {data?.map((list: listType, index: number) => {
          return (
            <ListPageSingleListBox
              key={index}
              balanceId={list.balanceId}
              left_side_title={list.left_side_title}
              right_side_title={list.right_side_title}
              viewNum={list.viewNum}
            />
          );
        })}
        {isFetchingNextPage ? <LoadingPage /> : <div ref={ref} />}
      </Container>
    </Border>
  );
}
export default ListPage;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
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
  padding: none;
  height: fit-content;
  width: 100%;
  top: 14px;
`;

const Border = styled.div`
  ${FlexColumnCSS};
  height: fit-content;
`;
