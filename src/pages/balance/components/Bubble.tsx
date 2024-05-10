import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import React, { SetStateAction, useState } from "react";
import BubbleContainer from "./BubbleContainer";
import { BubbleType } from "../../../interface/BubbleInterface";
import { useLikedMutation } from "../../../query/patch/useLikedMutation";
import { useUnlikedMutation } from "../../../query/patch/useUnlikedMutation";

interface BubbleInterface {
  comment: BubbleType;
  currentTab: number;
  setTargetComment?: React.Dispatch<SetStateAction<BubbleType | undefined>>;
  setCurrentTab: React.Dispatch<SetStateAction<number>>;
}

const Bubble = ({
  comment,
  currentTab,
  setCurrentTab,
  setTargetComment,
}: BubbleInterface) => {
  const { id, sideInfo, content, childCount, likeCount } = comment;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likedNum, setLikedNum] = useState(likeCount);
  const { mutate: likedMutation } = useLikedMutation(id as string);
  const { mutate: unlikedMutation } = useUnlikedMutation(id as string);

  const handleClickHeart = () => {
    if (isLiked) {
      unlikedMutation();
      setLikedNum((prev) => prev - 1);
    } else {
      likedMutation();
      setLikedNum((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleClickRecomment = () => {
    if (setTargetComment) setTargetComment(comment);
    setCurrentTab(2);
  };

  return (
    <Container sideInfo={sideInfo}>
      <div className="bubble-box-fit">
        <BubbleContainer sideInfo={sideInfo}>{content}</BubbleContainer>

        <Footer sideInfo={sideInfo}>
          {currentTab === 1 && (
            <div onClick={handleClickRecomment}>
              <span>{childCount}</span>
              <AiOutlineComment />
            </div>
          )}
          <div onClick={handleClickHeart}>
            <span>{likedNum}</span>
            {isLiked ? <AiFillHeart fill="red" /> : <AiOutlineHeart />}
          </div>
        </Footer>
      </div>
    </Container>
  );
};

export const Container = styled.div<{ sideInfo: number }>`
  display: flex;
  justify-content: ${({ sideInfo }) =>
    sideInfo === 0 ? "flex-start" : "flex-end"};

  .bubble-box-fit {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Footer = styled.div<{ sideInfo: number }>`
  display: flex;
  justify-content: ${({ sideInfo }) =>
    sideInfo === 0 ? "flex-end" : "flex-start"};
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
