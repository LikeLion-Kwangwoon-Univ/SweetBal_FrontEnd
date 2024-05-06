import { AiOutlineLeft } from "react-icons/ai";
import * as S from "./CommentsStyle";
import InputMessage from "./InputMessage";
import { BubbleType } from "../../../interface/BubbleInterface";
import Bubble from "./Bubble";
import { SetStateAction } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

interface RecommentsTab {
  currentTab: number;
  recomments: BubbleType[];
  targetComment: BubbleType | undefined;
  setCurrentTab: React.Dispatch<SetStateAction<number>>;
}

const RecommentsTab = ({
  currentTab,
  recomments,
  targetComment,
  setCurrentTab,
}: RecommentsTab) => {
  const recommentRef = useScrollToTop(recomments);

  return (
    <S.Container>
      <S.Header>
        <AiOutlineLeft onClick={() => setCurrentTab(1)} />
        <p>대댓글</p>
      </S.Header>

      <S.TargetMessage>{targetComment?.message}</S.TargetMessage>

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

      <InputMessage currentTab={currentTab} />
    </S.Container>
  );
};

export default RecommentsTab;
