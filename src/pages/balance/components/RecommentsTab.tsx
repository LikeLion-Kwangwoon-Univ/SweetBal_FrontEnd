import { AiOutlineLeft } from "react-icons/ai";
import * as S from "./CommentsStyle";
import InputMessage from "./InputMessage";
import { BubbleType, RecommentsTabType } from "@/interface/CommentsInterface";
import Bubble from "./Bubble";
import { useScrollToBottom } from "@/hooks/useScrollToBottom";
import { useSetRecoilState } from "recoil";
import { currentTabState } from "@/store/comments/atoms";

const RecommentsTab = ({ recomments, targetComment }: RecommentsTabType) => {
  const recommentRef = useScrollToBottom(recomments);
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
