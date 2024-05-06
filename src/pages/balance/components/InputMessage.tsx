import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { useCommentSendMutation } from "../../../query/patch/useCommentSendMutation";
import { useRecommentSendMutation } from "../../../query/patch/useRecommentSendMutation";
// import { v4 as uuidv4 } from "uuid";

interface InputMessageProps {
  currentTab: number;
}

const InputMessage = ({ currentTab }: InputMessageProps) => {
  // const uuid = uuidv4();
  const [comment, setComment] = useState<string>("");
  const { mutate: commentSendMutation } = useCommentSendMutation();
  const { mutate: recommentSendMutation } = useRecommentSendMutation("1");

  const handleClickSend = () => {
    if (comment !== "") {
      const sendMessage = {
        id: `1`,
        position: "left",
        message: comment,
        recomment: 0,
        liked: 0,
      };

      currentTab === 1
        ? commentSendMutation(sendMessage)
        : recommentSendMutation(sendMessage);
    }
    setComment("");
  };

  return (
    <Container>
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
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
