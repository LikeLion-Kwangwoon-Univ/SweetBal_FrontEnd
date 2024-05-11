import { AiOutlineDown } from "react-icons/ai";
import * as S from "./CommentsStyle";
import Bubble from "./Bubble";
import {
  BubbleType,
  CommentsTabType,
} from "../../../interface/CommentsInterface";
import InputMessage from "./InputMessage";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

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

      <InputMessage currentTab={currentTab} parentCommentId={-1} />
    </S.Container>
  );
};

export default CommentsTab;
