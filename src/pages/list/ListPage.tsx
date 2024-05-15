import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import useInfiniteGetList from "./useInfiniteGetList";
import LoadingPage from "@/components/loading/Loading";
import styled from "styled-components";
import { FlexColumnCSS } from "@/styles/common";
import SingleListBox from "../main/components/singleListBox";
import ListPageSingleList from "@/components/ListPageSingleList";

type listType = {
  id: number;
  leftSideTitle: string;
  rightSideTitle: string;
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
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((list: listType) => (
              <ListPageSingleList key={list.id} list={list} />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage ? "Loading..." : <div ref={ref} />}
      </Container>
    </Border>
  );
}

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
