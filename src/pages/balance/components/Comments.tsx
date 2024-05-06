import styled from "styled-components";
import { useState } from "react";
import { useCommentsQuery } from "../../../query/get/useCommentsQuery";
import { useRecommentsQuery } from "../../../query/get/useRecommentsQuery";
import CommentsTab from "./CommentsTab";
import RecommentsTab from "./RecommentsTab";
import { BubbleType } from "../../../interface/BubbleInterface";

const Comments = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [targetComment, setTargetComment] = useState<BubbleType | undefined>(
    undefined
  );
  const { data: commentsQuery, status: commentsStatus } = useCommentsQuery();
  const { data: recommentsQuery, status: recommentsStatus } =
    useRecommentsQuery(targetComment?.id);

  if (commentsStatus === "loading" || recommentsStatus === "loading")
    return null;
  if (commentsStatus === "error" || recommentsStatus === "error") return null;

  return (
    <Container $currentTab={currentTab}>
      <CommentsTab
        currentTab={currentTab}
        comments={commentsQuery}
        setTargetComment={setTargetComment}
        setCurrentTab={setCurrentTab}
      />

      <RecommentsTab
        currentTab={currentTab}
        recomments={recommentsQuery}
        targetComment={targetComment}
        setCurrentTab={setCurrentTab}
      />
    </Container>
  );
};

const Container = styled.div<{ $currentTab: number }>`
  width: 200%;
  height: 100%;
  display: flex;
  transition: all 0.3s;
  transform: ${({ $currentTab }) =>
    $currentTab === 2 ? "translateX(-50%)" : "translateX(0%)"};
`;

export default Comments;