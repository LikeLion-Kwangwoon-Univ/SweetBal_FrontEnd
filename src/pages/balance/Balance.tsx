import { AiOutlineLeft } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import VSImg from "../../assets/imgs/VSImg.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import SubTitleContent from "./SubTitleContent";
import {
    GameContent,
    BalancePageProps,
} from "../../interface/BalanceInterface";
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
} from "./BalanceStyle";

function BalancePage({ subject, eyesScore }: BalancePageProps) {
    const [myData, setMyData] = useState<GameContent>({
        title1: "",
        subtitle1: "",
        title2: "",
        subtitle2: "",
    });

    useEffect(() => {
        axios.get("/balancedata").then((res) => {
            setMyData({
                title1: res.data.title1,
                subtitle1: res.data.subtitle1,
                title2: res.data.title2,
                subtitle2: res.data.subtitle2,
            });
        });
    }, []);

    return (
        <Border>
            <Wrapper>
                <Bar>
                    <span>
                        <AiOutlineLeft />
                        <SubjectText>{subject}</SubjectText>
                    </span>
                    <SpanWrapper>
                        <LiaEyeSolid size="19"></LiaEyeSolid>
                        <EyesScore>{eyesScore}</EyesScore>
                    </SpanWrapper>
                </Bar>
                <SizedBox />
                <GameWrapper>
                    <TitleBox>{myData.title1}</TitleBox>
                    <SubTitleContent
                        content={myData.subtitle1}
                    ></SubTitleContent>
                    <ImgWrapper>
                        <img src={VSImg}></img>
                    </ImgWrapper>
                    <TitleBox>{myData.title2}</TitleBox>
                    <SubTitleContent
                        content={myData.subtitle2}
                    ></SubTitleContent>
                </GameWrapper>
            </Wrapper>
        </Border>
    );
}

export default BalancePage;
