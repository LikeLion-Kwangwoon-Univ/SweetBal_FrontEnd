import VSImg from '../../assets/imgs/VSImg.svg';
import { AiOutlineLeft } from 'react-icons/ai';
import {
  Bar,
  Border,
  Wrapper,
  SubjectText,
  GameWrapper,
  ImgWrapper,
} from '../balance/BalanceStyle';
import { Hspace, TitleInput, DetailInput, AddButton } from './registerStyle';
import { useEffect, useState } from 'react';
import RegisterModal from './modal/modal';
import RegisterApi from '../../apis/registerApi';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [subtitle1, setSubtitle1] = useState('');
  const [subtitle2, setSubtitle2] = useState('');
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleTitle1 = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle1(event.currentTarget.value);
  };
  const handleTitle2 = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle2(event.currentTarget.value);
  };
  const handleSubtitle1 = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setSubtitle1(event.currentTarget.value);
  };
  const handleSubtitle2 = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setSubtitle2(event.currentTarget.value);
  };
  useEffect(() => {
    if (title1.length === 0 || title2.length === 0) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [title1, title2, subtitle1, subtitle2]);

  const handleSubmit = () => {
    RegisterApi.postBalance({
      leftSideTitle: title1,
      leftSideDetail: subtitle1,
      rightSideTitle: title2,
      rightSideDetail: subtitle2,
    }).then((res) => {
      if (res.status === 200) {
        setIsModalOpen(true);
      } else {
        return;
      }
    });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <Border>
        <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} />
        <Wrapper>
          <Bar>
            <span>
              <AiOutlineLeft />
              <SubjectText>나만의 밸런스 게임</SubjectText>
            </span>
          </Bar>
          <Hspace />
          <GameWrapper>
            <TitleInput
              onChange={handleTitle1}
              placeholder='내용을 적어주세요.'
            />
            <DetailInput
              onChange={handleSubtitle1}
              placeholder='내용을 적어주세요.'
            />
            <ImgWrapper>
              <img src={VSImg} />
            </ImgWrapper>
            <TitleInput
              onChange={handleTitle2}
              placeholder='내용을 적어주세요.'
            />
            <DetailInput
              onChange={handleSubtitle2}
              placeholder='내용을 적어주세요.'
            />
          </GameWrapper>
          <Hspace />
          <AddButton onClick={handleSubmit} disabled={btnDisable}>
            등록
          </AddButton>
        </Wrapper>
      </Border>
    </>
  );
}

export default RegisterPage;
