import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { usePostComment } from "../../../query/post/usePostComment";
import { usePostRecomment } from "../../../query/post/usePostRecomment";

interface InputMessageProps {
  currentTab: number;
  parentCommentId: number;
}

const InputMessage = ({ currentTab, parentCommentId }: InputMessageProps) => {
  const postId = 1;
  // const {params: postId} = useParams();
  const [content, setContent] = useState<string>("");
  const { mutate: postComment } = usePostComment(postId);
  const { mutate: postRecomment } = usePostRecomment(postId);

  const handleClickSend = () => {
    if (content !== "") {
      currentTab === 1
        ? postComment({
            sideInfo: 0,
            content: content,
          })
        : postRecomment({
            sideInfo: 0,
            content: content,
            parentCommentId: parentCommentId,
          });
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
