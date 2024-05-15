import { AiOutlineLeft } from "react-icons/ai";
import * as S from "./CommentsTabStyle";
import InputMessage from "./InputMessage";
import { BubbleType } from "@/interface/CommentsInterface";
import Bubble from "./Bubble";
import { useScrollToBottom } from "@/hooks/useScrollToBottom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentTabState,
  recommentsState,
  targetCommentState,
} from "@/store/comments/atoms";

const RecommentsTab = () => {
  const recomments = useRecoilValue(recommentsState);
  const recommentRef = useScrollToBottom(recomments);
  const targetComment = useRecoilValue(targetCommentState);
  const setCurrentTab = useSetRecoilState(currentTabState);

  return (
    <S.Container>
      <S.Header>
        <AiOutlineLeft onClick={() => setCurrentTab(1)} />
        <p>대댓글</p>
      </S.Header>

      <S.TargetMessage>{targetComment?.content}</S.TargetMessage>

      <S.Content ref={recommentRef}>
        {recomments.map((comment: BubbleType) => (
          <Bubble key={comment.id} comment={comment} />
        ))}
      </S.Content>

      <InputMessage parentCommentId={targetComment?.id as number} />
    </S.Container>
  );
};

export default RecommentsTab;
