import { AiOutlineLeft } from "react-icons/ai";
import * as S from "./CommentsStyle";
import InputMessage from "./InputMessage";
import {
  BubbleType,
  RecommentsTabType,
} from "../../../interface/CommentsInterface";
import Bubble from "./Bubble";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const RecommentsTab = ({
  currentTab,
  recomments,
  targetComment,
  setCurrentTab,
}: RecommentsTabType) => {
  const recommentRef = useScrollToTop(recomments);

  return (
    <S.Container>
      <S.Header>
        <AiOutlineLeft onClick={() => setCurrentTab(1)} />
        <p>대댓글</p>
      </S.Header>

      <S.TargetMessage>{targetComment?.content}</S.TargetMessage>

      <S.Content ref={recommentRef}>
        {recomments.map((comment: BubbleType, index) => (
          <Bubble
            key={index}
            // key={comment.id}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            comment={comment}
          />
        ))}
      </S.Content>

      <InputMessage
        currentTab={currentTab}
        parentCommentId={targetComment?.id as number}
      />
    </S.Container>
  );
};

export default RecommentsTab;
