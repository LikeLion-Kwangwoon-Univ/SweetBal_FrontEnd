import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { listType } from "../../../query/get/useGetMain";
import strAddDots from "../../../utils/strAddDots";

function SingleListBox({ item, subject }: { item: listType; subject: string }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/balance/${subject}/${item.id}`)}>
      <>
        <Title>{strAddDots(item.leftSideTitle)}</Title>
        <VS>VS</VS>
        <Title>{strAddDots(item.rightSideTitle)}</Title>
      </>
    </Container>
  );
}
export default SingleListBox;

const Container = styled.div`
  background-color: ${({ theme }) => theme.COLOR.blue1};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 12px;
  width: 100%;
  text-align: center;
`;
const VS = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
