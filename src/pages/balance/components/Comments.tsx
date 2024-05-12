import styled from "styled-components";
import CommentsTab from "./CommentsTab";
import RecommentsTab from "./RecommentsTab";
// import { useParams } from "react-router-dom";
import { useGetAllComments } from "@/hooks/useGetAllComments";
import { useRecoilValue } from "recoil";
import { currentTabState } from "@/store/comments/atoms";

const Comments = () => {
  // const { id : postId } = useParams();
  const currentTab = useRecoilValue(currentTabState);
  const { isLoading, isError } = useGetAllComments(
    1 /* parseInt(postId as string)*/
  );

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Wrapper>
      <TabContainer $currentTab={currentTab}>
        <CommentsTab />
        <RecommentsTab />
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
