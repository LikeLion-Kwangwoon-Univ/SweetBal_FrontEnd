import { styled } from "styled-components";
import SingleListBox from "./singleListBox";
import { IoIosArrowForward } from "react-icons/io";
import { responseType } from "../../../query/get/useGetMain";
import { useNavigate } from "react-router-dom";

function Group4x4ListBox({ subject, postList }: responseType) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title onClick={() => navigate(`/list/${subject.split(" ")[0]}`)}>
        {subject}
        <IoIosArrowForward />
      </Title>

      <ListContainer>
        {postList.length === 0 ? (
          <p className="no-data">아직 {subject} 게임이 없어요.</p>
        ) : (
          postList.map((item, idx) => (
            <SingleListBox
              key={idx}
              item={item}
              subject={subject.split(" ")[0]}
            />
          ))
        )}
      </ListContainer>
    </Container>
  );
}
export default Group4x4ListBox;

const Container = styled.div`
  padding: 12px;
  border-radius: 15px;
  background-color: white;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;

  .no-data {
    padding: 12px;
    text-align: center;
    font-size: 14px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  * {
    margin-left: 5px;
  }
  cursor: pointer;

  width: fit-content;
`;
