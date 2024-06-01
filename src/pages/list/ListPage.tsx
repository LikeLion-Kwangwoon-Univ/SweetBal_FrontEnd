import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import useInfiniteGetList from "./useInfiniteGetList";

import styled from "styled-components";
import { FlexColumnCSS } from "@/styles/common";
import ListPageSingleListBox from "@/components/list/ListPageSingleListBox";
import { useNavigate, useParams } from "react-router-dom";
import NewBtn from "@/components/Button/newBtn";
import LoadingPage from "@/components/loading/Loading";

type listType = {
  id: number;
  leftSideTitle: string;
  rightSideTitle: string;
  leftSideVote: number;
  rightSideVote: number;
};

function ListPage() {
  const { subject } = useParams<{ subject: string }>();
  const validType = subject || "defaultType";
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteGetList(validType);
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  console.log(inView, hasNextPage);
  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("inView was detected");
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
              <ListPageSingleListBox
                key={list.id}
                list={list}
                subject={subject}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage ? (
          <LoadingPage $width="100%" $height="20px" />
        ) : (
          hasNextPage && <div ref={ref} style={{ height: "20px" }} />
        )}
      </Container>
      <NewBtn />
    </Border>
  );
}

export default ListPage;

const Title = styled.div`
  font-weight: bold;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 5px;
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
