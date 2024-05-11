import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FlexColumnCSS } from "../../styles/common";
import ListPageSingleListBox from "../../components/list/ListPageSingleListBox";

function ListPage() {
  return (
    <Border>
      <Title>
        <Icon>
          <IoIosArrowBack />
        </Icon>
        최근 등록 밸런스
      </Title>
      <Container>
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
        <ListPageSingleListBox />
      </Container>
    </Border>
  );
}
export default ListPage;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  ${FlexColumnCSS};
  align-items: center;
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  top: 14px;
`;

const Border = styled.div`
  ${FlexColumnCSS};
  height: fit-content;
`;
