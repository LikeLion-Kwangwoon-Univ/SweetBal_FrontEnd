import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { usePostComment } from "@/query/post/usePostComment";
import { usePostRecomment } from "@/query/post/usePostRecomment";
import { useRecoilValue } from "recoil";
import { currentTabState } from "@/store/comments/atoms";
import { useParams } from "react-router-dom";

interface InputMessageProps {
  parentCommentId: number;
}

const InputMessage = ({ parentCommentId }: InputMessageProps) => {
  const { id: postId } = useParams();
  const currentTab = useRecoilValue(currentTabState);
  const [content, setContent] = useState<string>("");
  const { mutate: postComment } = usePostComment(parseInt(postId as string));
  const { mutate: postRecomment } = usePostRecomment(
    parseInt(postId as string)
  );

  const sendData = { sideInfo: 0, content: content };

  const handleClickSend = () => {
    if (content !== "") {
      currentTab === 1
        ? postComment({ ...sendData, parentCommentId: -1 })
        : postRecomment({ ...sendData, parentCommentId: parentCommentId });
    }
    setContent("");
  };

  return (
    <Container>
      <Input
        value={content}
        size={10}
        onChange={(e) => setContent(e.target.value)}
        placeholder={"댓글을 입력해주세요."}
      />
      <AiOutlineSend onClick={handleClickSend} />
    </Container>
  );
};

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 43px;
  margin-top: 5px;
  padding: 0 10px;
  background-color: white;
  font-size: 18px;
  border-radius: 7px;
  color: ${({ theme }) => theme.COLOR.grey1};

  & > svg {
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  font-size: 18px;
  margin-right: 5px;
  border: none;
  outline: none;

  &::placeholder {
    text-align: center;
    font-weight: bold;
  }
`;

export default InputMessage;
