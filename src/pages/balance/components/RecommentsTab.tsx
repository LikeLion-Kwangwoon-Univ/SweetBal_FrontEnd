import { AiOutlineLeft } from "react-icons/Ai";
import * as S from "./CommentsStyle";
import InputMessage from "./InputMessage";
import { BubbleType } from "../../../interface/BubbleInterface";
import Bubble from "./Bubble";
import { SetStateAction } from "react";

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
  return (
    <S.Container>
      <S.Header>
        <AiOutlineLeft onClick={() => setCurrentTab(1)} />
        <p>대댓글</p>
      </S.Header>

      <S.TargetMessage>{targetComment?.message}</S.TargetMessage>

      <S.Content>
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
