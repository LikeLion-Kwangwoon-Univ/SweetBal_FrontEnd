import styled from "styled-components";
import CommentsTab from "./CommentsTab";
import RecommentsTab from "./RecommentsTab";
import { useGetAllComments } from "@/hooks/useGetAllComments";
import { useRecoilValue } from "recoil";
import { currentTabState } from "@/store/comments/atoms";
import { useParams } from "react-router-dom";
import LoadingPage from "@/components/loading/Loading";

const Comments = () => {
  const { id: postId } = useParams();
  const currentTab = useRecoilValue(currentTabState);
  const { isLoading, isError } = useGetAllComments(parseInt(postId as string));

  if (isLoading) return <LoadingPage $width="100%" $height="100%" />;
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
