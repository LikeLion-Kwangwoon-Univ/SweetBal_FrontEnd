import { AiOutlineDown } from "react-icons/ai";
import * as S from "./CommentsStyle";
import Bubble from "./Bubble";
import { BubbleType } from "../../../interface/CommentsInterface";
import InputMessage from "./InputMessage";
import React, { SetStateAction } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

interface CommentsTabType {
  currentTab: number;
  comments: BubbleType[];
  setIsOpenComment: React.Dispatch<SetStateAction<boolean>>;
  setTargetComment: React.Dispatch<SetStateAction<BubbleType | undefined>>;
  setCurrentTab: React.Dispatch<SetStateAction<number>>;
}

const CommentsTab = ({
  currentTab,
  comments,
  setIsOpenComment,
  setTargetComment,
  setCurrentTab,
}: CommentsTabType) => {
  const commentRef = useScrollToTop(comments);

  return (
    <S.Container>
      <S.Header>
        <AiOutlineDown onClick={() => setIsOpenComment(false)} />
        <p>댓글</p>
      </S.Header>

      <S.Content ref={commentRef}>
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
