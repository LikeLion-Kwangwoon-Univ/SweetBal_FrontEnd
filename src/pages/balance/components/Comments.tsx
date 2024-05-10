import styled from "styled-components";
import { SetStateAction, useState } from "react";
import CommentsTab from "./CommentsTab";
import RecommentsTab from "./RecommentsTab";
import { BubbleType } from "../../../interface/BubbleInterface";
import { useParams } from "react-router-dom";
import { useGetAllComments } from "../../../hooks/useGetAllComments";

interface CommentsProps {
  setIsOpenComment: React.Dispatch<SetStateAction<boolean>>;
}

const Comments = ({ setIsOpenComment }: CommentsProps) => {
  const { params: postId } = useParams();
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [targetComment, setTargetComment] = useState<BubbleType | undefined>(
    undefined
  );
  const { getCommentsData, getRecommentsData, isLoading, isError } =
    useGetAllComments({
      postId: parseInt(postId as string),
      commentId: targetComment?.id,
    });

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Container $currentTab={currentTab}>
      <CommentsTab
        currentTab={currentTab}
        comments={getCommentsData}
        setIsOpenComment={setIsOpenComment}
        setTargetComment={setTargetComment}
        setCurrentTab={setCurrentTab}
      />

      <RecommentsTab
        currentTab={currentTab}
        recomments={getRecommentsData}
        targetComment={targetComment}
        setCurrentTab={setCurrentTab}
      />
    </Container>
  );
};

const Container = styled.div<{ $currentTab: number }>`
  width: 200%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  transition: all 0.3s;
  transform: ${({ $currentTab }) =>
    $currentTab === 2 ? "translateX(-50%)" : "translateX(0%)"};
`;

export default Comments;
