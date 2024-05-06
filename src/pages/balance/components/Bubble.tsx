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
  const { id, position, message, recomment, liked } = comment;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likedNum, setLikedNum] = useState(liked);
  const { mutate: likedMutation } = useLikedMutation(id);
  const { mutate: unlikedMutation } = useUnlikedMutation(id);

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
    <Container position={position}>
      <div className="bubble-box-fit">
        <BubbleContainer position={position}>{message}</BubbleContainer>

        <Footer position={position}>
          {currentTab === 1 && (
            <div onClick={handleClickRecomment}>
              <span>{recomment}</span>
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

export const Container = styled.div<{ position: string }>`
  display: flex;
  justify-content: ${({ position }) =>
    position === "left" ? "flex-start" : "flex-end"};

  .bubble-box-fit {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Footer = styled.div<{ position: string }>`
  display: flex;
  justify-content: ${({ position }) =>
    position === "left" ? "flex-end" : "flex-start"};
  gap: 7px;
  font-size: 10px;
  color: ${({ theme }) => theme.COLOR.grey1};

  & > div {
    display: flex;
    align-items: center;
    gap: 1px;
    cursor: pointer;
  }
`;

export default Bubble;
