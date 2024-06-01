import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { FlexColumnCSS } from "@/styles/common";
import strAddDots from "@/utils/strAddDots";
import { AiOutlineInbox } from "react-icons/ai";

interface ListPageSingleListBoxProps {
  list: {
    id: number;
    leftSideTitle: string;
    rightSideTitle: string;
    leftSideVote: number;
    rightSideVote: number;
  };
}

const ListPageSingleListBox = ({ list }: ListPageSingleListBoxProps) => {
  const { id, leftSideTitle, rightSideTitle, leftSideVote, rightSideVote } =
    list;
  const navigate = useNavigate();
  const navigateToBalance = () => navigate(`/balance/${id}`);

  return (
    <Container onClick={navigateToBalance}>
      <BalanceContainer>
        <Title>{strAddDots(leftSideTitle)}</Title>
        <VS>VS</VS>
        <Title>{strAddDots(rightSideTitle)}</Title>
      </BalanceContainer>
      <ViewContainer>
        <AiOutlineInbox />
        <ViewCountSpan>{leftSideVote + rightSideVote}</ViewCountSpan>
      </ViewContainer>
    </Container>
  );
};

export default ListPageSingleListBox;

const Container = styled.div`
  ${FlexColumnCSS};
  background-color: white;
  width: 100%;
  padding: 5px 0;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 14px;
`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const VS = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ViewContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 8px;
  margin-right: 5px;
`;

const ViewCountSpan = styled.span`
  display: flex;
  padding: 0px;
  padding-top: 1px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: light;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
`;
