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
    PercentBox,
    PercentWrapper,
} from "./BalanceStyle";

function BalancePage({ subject, eyesScore }: BalancePageProps) {
    let [myData, setMyData] = useState<GameContent>({
        title1: "",
        subtitle1: "",
        people1: 0,
        title2: "",
        subtitle2: "",
        people2: 0,
    });
    let [select, setSelect] = useState(0);
    let [percent1, setPercent1] = useState("");
    let [percent2, setPercent2] = useState("");

    useEffect(() => {
        axios.get("/balancedata").then((res) => {
            setMyData({
                title1: res.data.title1,
                subtitle1: res.data.subtitle1,
                people1: res.data.people1,
                title2: res.data.title2,
                subtitle2: res.data.subtitle2,
                people2: res.data.people2,
            });
        });
    }, [select]);

    const handleSelect = async (num: number) => {
        if (select === 0) {
            setSelect(num);

            let people1 = myData.people1;
            let people2 = myData.people2;
            if (num === 1) {
                people1 += 1;
            } else {
                people2 += 1;
            }
            const total = people1 + people2;
            setPercent1(`${Math.round((people1 / total) * 100)}%`);
            setPercent2(`${Math.round((people2 / total) * 100)}%`);

            try {
                const response = await axios.post("/balancedata", {
                    payload: {
                        select: num,
                    },
                });
                console.log(response.data.message);
            } catch (error) {
                console.error(error);
            }
        }
    };

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
                <SizedBox hSize="87px" />
                <GameWrapper>
                    <TitleBox onClick={() => handleSelect(1)}>
                        {myData.title1}
                    </TitleBox>
                    {select ? (
                        <PercentWrapper>
                            <PercentBox percent={percent1}>
                                {percent1}
                            </PercentBox>
                        </PercentWrapper>
                    ) : (
                        <SizedBox hSize="43px"></SizedBox>
                    )}
                    <SubTitleContent
                        content={myData.subtitle1}
                    ></SubTitleContent>
                    <ImgWrapper>
                        <img src={VSImg}></img>
                    </ImgWrapper>
                    <TitleBox onClick={() => handleSelect(2)}>
                        {myData.title2}
                    </TitleBox>
                    {select ? (
                        <PercentWrapper>
                            <PercentBox percent={percent2}>
                                {percent2}
                            </PercentBox>
                        </PercentWrapper>
                    ) : (
                        <SizedBox hSize="43px"></SizedBox>
                    )}
                    <SubTitleContent
                        content={myData.subtitle2}
                    ></SubTitleContent>
                </GameWrapper>
            </Wrapper>
        </Border>
    );
}

export default BalancePage;
