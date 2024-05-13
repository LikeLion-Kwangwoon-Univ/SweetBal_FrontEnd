import {
  Border,
  Wrapper,
  Bar,
  SubjectText,
  GameWrapper,
  ImgWrapper,
} from '../balance/BalanceStyle';
import { SizedBox1, TitleInput, DetailInput, AddButton } from './registerStyle';
import VSImg from '../../assets/imgs/VSImg.svg';
import { AiOutlineLeft } from 'react-icons/ai';

function RegisterPage() {
  return (
    <>
      <Border>
        <Wrapper>
          <Bar>
            <span>
              <AiOutlineLeft />
              <SubjectText>나만의 밸런스 게임</SubjectText>
            </span>
          </Bar>
          <SizedBox1 />
          <GameWrapper>
            <TitleInput placeholder='내용을 적어주세요.' />
            <DetailInput placeholder='내용을 적어주세요.' />
            <ImgWrapper>
              <img src={VSImg} />
            </ImgWrapper>
            <TitleInput placeholder='내용을 적어주세요.' />
            <DetailInput placeholder='내용을 적어주세요.' />
          </GameWrapper>
          <SizedBox1 />
          <AddButton>등록</AddButton>
        </Wrapper>
      </Border>
    </>
  );
}

export default RegisterPage;
