import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import useInfiniteGetList from "./useInfiniteGetList";

import styled from "styled-components";
import { FlexColumnCSS } from "@/styles/common";
import ListPageSingleListBox from "@/components/list/ListPageSingleListBox";
import { useNavigate, useParams } from "react-router-dom";

type listType = {
  id: number;
  leftSideTitle: string;
  rightSideTitle: string;
};

function ListPage() {
  const { subject } = useParams<{ subject: string }>();
  const validType = subject || "defaultType";
  const { data, fetchNextPage, isFetchingNextPage } =
    useInfiniteGetList(validType);
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Border>
      <Title>
        <Icon onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </Icon>
        {subject + " 등록 밸런스"}
      </Title>
      <Container>
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.postList.map((list: listType) => (
              <ListPageSingleListBox key={list.id} list={list} />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage ? "Loading..." : <div ref={ref} />}
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
  padding: none;
  height: fit-content;
  width: 100%;
  top: 14px;
`;

const Border = styled.div`
  ${FlexColumnCSS};
  height: fit-content;
`;
