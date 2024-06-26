import { styled } from "styled-components";
import Group4x4ListBox from "./components/group4x4ListBox";
import useGetMainData from "../../query/get/useGetMain";
import LoadingPage from "../../components/loading/Loading";

function MainPage() {
  const { data: mainData, isLoading } = useGetMainData();

  return (
    <Container>
      {isLoading && (
        <LoadingPage $width="100%" $height="calc(100svh - 132px - 20px)" />
      )}
      {mainData &&
        mainData?.allPostList.map((el, idx) => (
          <Group4x4ListBox
            key={idx}
            subject={el.subject}
            postList={el.postList}
          />
        ))}
    </Container>
  );
}
export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
