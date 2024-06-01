import VSImg from "../../assets/imgs/VSImg.svg";
import { useEffect, useState } from "react";
import RegisterModal from "./modal/modal";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/navBar/navBar";
import styled from "styled-components";
import { FlexCenterCSS, FlexColumnCSS } from "@/styles/common";
import TitleInput from "./components/TitleInput";
import DetailInput from "./components/DetailInput";
import { usePostBalance } from "@/query/post/usePostBalance";

function RegisterPage() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { mutate: postBalance } = usePostBalance(setIsModalOpen);
  const navigate = useNavigate();

  useEffect(() => {
    if (title1.length === 0 || title2.length === 0) setBtnDisable(true);
    else setBtnDisable(false);
  }, [title1, title2]);

  const handleSubmit = () => {
    postBalance({
      leftSideTitle: title1,
      leftSideDetail: subtitle1,
      rightSideTitle: title2,
      rightSideDetail: subtitle2,
    });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Border>
        <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} />
        <NavBar title={`나만의 밸런스 게임`} url="/"></NavBar>

        <LayoutWrapper>
          <GameWrapper>
            <TitleInput onChange={(e) => setTitle1(e.currentTarget.value)} />
            <DetailInput
              onChange={(e) => setSubtitle1(e.currentTarget.value)}
            />

            <ImgWrapper>
              <img src={VSImg} />
            </ImgWrapper>

            <TitleInput onChange={(e) => setTitle2(e.currentTarget.value)} />
            <DetailInput
              onChange={(e) => setSubtitle2(e.currentTarget.value)}
            />
          </GameWrapper>
        </LayoutWrapper>
        <AddButton onClick={handleSubmit} disabled={btnDisable}>
          등록
        </AddButton>
      </Border>
    </>
  );
}

export const Border = styled.div`
  ${FlexColumnCSS};
  box-sizing: border-box;
  position: relative;
  min-height: calc(100vh - 132px - 20px);
  background-color: white;
  border-radius: 13px;
`;

export const LayoutWrapper = styled.div`
  flex-grow: 1;
  ${FlexCenterCSS};
  padding: 20px;
`;

export const GameWrapper = styled.div`
  flex-grow: 1;
  ${FlexColumnCSS}
  gap: 11px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  ${FlexCenterCSS}
  height: 107px;
`;

export const AddButton = styled.button`
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  margin: 20px;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: white;
  background-color: ${(props) =>
    props.disabled ? "#D9D9D9" : ({ theme }) => theme.COLOR.blue4};
  border: none;
`;

export default RegisterPage;
