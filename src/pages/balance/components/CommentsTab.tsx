import { AiOutlineDown } from "react-icons/Ai";
import * as S from "./CommentsStyle";
import Bubble from "./Bubble";
import { BubbleType } from "../../../interface/BubbleInterface";
import InputMessage from "./InputMessage";
import React, { SetStateAction } from "react";

interface CommentsTabType {
  currentTab: number;
  comments: BubbleType[];
  setTargetComment: React.Dispatch<SetStateAction<BubbleType | undefined>>;
  setCurrentTab: React.Dispatch<SetStateAction<number>>;
}

const CommentsTab = ({
  currentTab,
  comments,
  setTargetComment,
  setCurrentTab,
}: CommentsTabType) => {
  return (
    <S.Container>
      <S.Header>
        <AiOutlineDown />
        <p>댓글</p>
      </S.Header>

      <S.Content>
        {comments.map((comment: BubbleType, index) => (
          <Bubble
            key={index}
            // key={comment.id}
            currentTab={currentTab}
            setTargetComment={setTargetComment}
            setCurrentTab={setCurrentTab}
            comment={comment}
          />
        ))}
      </S.Content>

      <InputMessage currentTab={currentTab} />
    </S.Container>
  );
};

export default CommentsTab;
