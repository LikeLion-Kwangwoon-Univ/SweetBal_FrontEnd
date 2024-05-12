import styled from "styled-components";
import { SetStateAction } from "react";
import CommentsTab from "./CommentsTab";
import RecommentsTab from "./RecommentsTab";
// import { useParams } from "react-router-dom";
import { useGetAllComments } from "@/hooks/useGetAllComments";
import { useRecoilValue } from "recoil";
import { currentTabState, targetCommentState } from "@/store/comments/atoms";

interface CommentsProps {
  setIsOpenComment: React.Dispatch<SetStateAction<boolean>>;
}

const Comments = ({ setIsOpenComment }: CommentsProps) => {
  // const { id : postId } = useParams();
  const currentTab = useRecoilValue(currentTabState);
  const targetComment = useRecoilValue(targetCommentState);

  const { getCommentsData, getRecommentsData, isLoading, isError } =
    useGetAllComments({
      // 게임 params 설정 시, 수정
      // postId: parseInt(postId as string),
      postId: 1,
      commentId: targetComment?.id,
    });

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Wrapper>
      <TabContainer $currentTab={currentTab}>
        <CommentsTab
          comments={getCommentsData}
          setIsOpenComment={setIsOpenComment}
        />

        <RecommentsTab recomments={getRecommentsData} />
      </TabContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TabContainer = styled.div<{ $currentTab: number }>`
  width: 200%;
  height: 100%;
  display: flex;
  transition: all 0.3s;
  transform: ${({ $currentTab }) =>
    $currentTab === 2 ? "translateX(-50%)" : "translateX(0%)"};
`;

export default Comments;
