import { AiOutlineLeft } from 'react-icons/ai'
import { LiaEyeSolid } from 'react-icons/lia'
import VSImg from '../../assets/imgs/VSImg.svg'
import { useEffect, useState } from 'react'
import SubTitleContent from './SubTitleContent'
import { GameDataType, InitGameData } from '../../interface/BalanceInterface'
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
} from './BalanceStyle'
import BalanceApi from '../../apis/balanceApi'
import useGetBalanceData from '../../query/get/useGetBalance'
import Comments from './components/Comments'
import NewBtn from '../../components/Button/newBtn'
import NavBar from '../../components/navBar/navBar'

function BalancePage({ subject }: { subject: string }) {
    const [gameData, setGameData] = useState<GameDataType>(InitGameData)
    const [select, setSelect] = useState(0)
    const [percent, setPercent] = useState(0)
    const [isOpenComment, setIsOpenComment] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const res = useGetBalanceData()

    useEffect(() => {
        setGameData(res.data ?? InitGameData)
        setIsLoading(res.isLoading)
    }, [res])


    const handleSelect = async (num: number) => {
        if (select === 0) {
            setSelect(num)

            let [people1, people2] = [gameData.people1, gameData.people2]
            num === 1 ? (people1 += 1) : (people2 += 1)

            const total = people1 + people2
            setPercent(Math.round((people1 / total) * 100))

            BalanceApi.postPick(num)
        }
    }

    return isLoading ? (
        <div>로딩중</div>
    ) : (
        <Border>
            <NavBar title={subject} url="/" views={gameData.eyesScore}></NavBar>
            {!isOpenComment ? (
                <Wrapper>
                    <div style={{ height: '87px' }}></div>
                    <TitleBox onClick={() => handleSelect(1)}>
                        {gameData.title1}
                    </TitleBox>
                    {select ? (
                        <PercentWrapper>
                            <PercentBox percent={`${percent}%`}>
                                {percent}
                            </PercentBox>
                        </PercentWrapper>
                    ) : (
                        <div style={{ height: '36px' }}></div>
                    )}
                    <SubTitleContent
                        content={gameData.subtitle1}
                    ></SubTitleContent>
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
                        <div style={{ height: '36px' }}></div>
                    )}
                    <SubTitleContent
                        content={gameData.subtitle2}
                    ></SubTitleContent>
                    <div style={{ height: '108px' }}></div>
                </Wrapper>
            ) : (
                <Comments setIsOpenComment={setIsOpenComment} />
            )}
            <NewBtn setIsOpenComment={setIsOpenComment} />
        </Border>
    )
}

export default BalancePage
