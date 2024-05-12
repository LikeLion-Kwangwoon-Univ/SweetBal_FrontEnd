import { AiOutlineDown } from "react-icons/ai";
import * as S from "./CommentsTabStyle";
import Bubble from "./Bubble";
import { BubbleType } from "@/interface/CommentsInterface";
import InputMessage from "./InputMessage";
import { useScrollToBottom } from "@/hooks/useScrollToBottom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { commentsState, isOpenCommentState } from "@/store/comments/atoms";

const CommentsTab = () => {
  const comments = useRecoilValue(commentsState);
  const commentRef = useScrollToBottom(comments);
  const setIsOpenComment = useSetRecoilState(isOpenCommentState);

  return (
    <S.Container>
      <S.Header>
        <AiOutlineDown onClick={() => setIsOpenComment(false)} />
        <p>댓글</p>
      </S.Header>

      <S.Content ref={commentRef}>
        {comments.map((comment: BubbleType) => (
          <Bubble key={comment.id} comment={comment} />
        ))}
      </S.Content>

      <InputMessage parentCommentId={-1} />
    </S.Container>
  );
};

export default CommentsTab;
