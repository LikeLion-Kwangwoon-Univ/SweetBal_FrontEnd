import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import BubbleContainer from "./BubbleContainer";
import { BubbleTabType } from "@/interface/CommentsInterface";
import { usePostLiked } from "@/query/post/usePostLiked";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentTabState, targetCommentState } from "@/store/comments/atoms";

const Bubble = ({ comment }: BubbleTabType) => {
  const postId = 1;
  // const { id: postId } = useParams();
  const { id: commentId, sideInfo, content, childCount, likeCount } = comment;
  // 0일때 빈 하트, 1일때 빨간 하트
  const [currentTab, setCurrentTab] = useRecoilState(currentTabState);
  const [like, setLike] = useState<number>(0);
  const [likedNum, setLikedNum] = useState(likeCount);
  const { mutate: postLiked } = usePostLiked({ postId, commentId, like });
  const setTargetComment = useSetRecoilState(targetCommentState);

  const handleClickHeart = () => {
    setLikedNum((prev) => (like === 0 ? prev + 1 : prev - 1));
    setLike(like === 0 ? 1 : 0);
    postLiked();
  };

  const handleClickRecomment = () => {
    if (setTargetComment) setTargetComment(comment);
    setCurrentTab(2);
  };

  return (
    <Container $sideInfo={sideInfo}>
      <div className="bubble-box-fit">
        <BubbleContainer sideInfo={sideInfo}>{content}</BubbleContainer>

        <Footer $sideInfo={sideInfo}>
          {currentTab === 1 && (
            <div onClick={handleClickRecomment}>
              <span>{childCount}</span>
              <AiOutlineComment />
            </div>
          )}
          <div onClick={handleClickHeart}>
            <span>{likedNum}</span>
            {like === 1 ? <AiFillHeart fill="red" /> : <AiOutlineHeart />}
          </div>
        </Footer>
      </div>
    </Container>
  );
};

export const Container = styled.div<{ $sideInfo: number }>`
  display: flex;
  justify-content: ${({ $sideInfo }) =>
    $sideInfo === 0 ? "flex-start" : "flex-end"};

  .bubble-box-fit {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Footer = styled.div<{ $sideInfo: number }>`
  display: flex;
  justify-content: ${({ $sideInfo }) =>
    $sideInfo === 0 ? "flex-end" : "flex-start"};
  gap: 7px;
  font-size: 12px;
  color: ${({ theme }) => theme.COLOR.grey1};

  & > div {
    display: flex;
    align-items: center;
    gap: 1px;
    cursor: pointer;
  }
`;

export default Bubble;
