import { AiOutlineLeft } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import VSImg from "../../assets/imgs/VSImg.svg";
import { useEffect, useState } from "react";
import SubTitleContent from "./SubTitleContent";
import { GameContent, InitGameData } from "../../interface/BalanceInterface";
import {
  Border,
  Wrapper,
  Bar,
  SubjectText,
  SpanWrapper,
  EyesScore,
  SizedBox,
  GameWrapper,
  TitleBox,
  ImgWrapper,
  PercentBox,
  PercentWrapper,
} from "./BalanceStyle";
import { postPickData } from "../../apis/postPickData";
import { getBalanceData } from "../../apis/getBalanceData";
import Comments from "./components/Comments";
import NewBtn from "../../components/Button/newBtn";

function BalancePage({ subject }: { subject: string }) {
  const [gameData, setGameData] = useState<GameContent>(InitGameData);
  const [select, setSelect] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);

  useEffect(() => {
    getBalanceData(setGameData);
  }, [select]);

  const handleSelect = async (num: number) => {
    if (select === 0) {
      setSelect(num);

      let [people1, people2] = [gameData.people1, gameData.people2];
      num === 1 ? (people1 += 1) : (people2 += 1);

      const total = people1 + people2;
      setPercent(Math.round((people1 / total) * 100));

      postPickData(num); // POST game pick data
    }
  };

  return (
    <>
      <Border>
        {!isOpenComment ? (
          <Wrapper>
            <Bar>
              <span>
                <AiOutlineLeft />
                <SubjectText>{subject}</SubjectText>
              </span>
              <SpanWrapper>
                <LiaEyeSolid size="19"></LiaEyeSolid>
                <EyesScore>{gameData.eyesScore}</EyesScore>
              </SpanWrapper>
            </Bar>
            <SizedBox hSize="87px" />
            <GameWrapper>
              <TitleBox onClick={() => handleSelect(1)}>
                {gameData.title1}
              </TitleBox>
              {select ? (
                <PercentWrapper>
                  <PercentBox percent={`${percent}%`}>{percent}</PercentBox>
                </PercentWrapper>
              ) : (
                <SizedBox hSize="43px"></SizedBox>
              )}
              <SubTitleContent content={gameData.subtitle1}></SubTitleContent>
              <ImgWrapper>
                <img src={VSImg}></img>
              </ImgWrapper>
              <TitleBox onClick={() => handleSelect(2)}>
                {gameData.title2}
              </TitleBox>
              {select ? (
                <PercentWrapper>
                  <PercentBox percent={`${100 - percent}%`}>
                    {100 - percent}
                  </PercentBox>
                </PercentWrapper>
              ) : (
                <SizedBox hSize="43px"></SizedBox>
              )}
              <SubTitleContent content={gameData.subtitle2}></SubTitleContent>
            </GameWrapper>
          </Wrapper>
        ) : (
          <Comments />
        )}
      </Border>
      <NewBtn setIsOpenComment={setIsOpenComment} />
    </>
  );
}

export default BalancePage;
