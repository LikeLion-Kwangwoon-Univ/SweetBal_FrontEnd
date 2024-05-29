import VSImg from '../../assets/imgs/VSImg.svg'
import { useEffect, useState } from 'react'
import SubTitleContent from './SubTitleContent'
import { styled, keyframes } from 'styled-components'
import { FlexCenterCSS, FlexColumnCSS } from '../../styles/common'
import { GameDataType, InitGameData } from '../../interface/BalanceInterface'
import BalanceApi from '../../apis/balanceApi'
import useGetBalanceData from '../../query/get/useGetBalance'
import Comments from './components/Comments'
import NewBtn from '../../components/Button/newBtn'
import NavBar from '../../components/navBar/navBar'
import { useRecoilValue } from 'recoil'
import { isOpenCommentState } from '@/store/comments/atoms'
import { useParams, useSearchParams } from 'react-router-dom'

function BalancePage() {
    const [gameData, setGameData] = useState<GameDataType>(InitGameData)
    const [select, setSelect] = useState(0)
    const [percent, setPercent] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const isOpenComment = useRecoilValue(isOpenCommentState)
    const id: number = Number(useParams<{ id: string }>().id)
    const [searchParams, _] = useSearchParams()

    const res = useGetBalanceData(id)

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

    if (isOpenComment) return <Comments />
    return isLoading ? (
        <div>로딩중</div>
    ) : (
        <Border>
            <NavBar
                title={searchParams.get('type') || ''}
                url="/"
                views={gameData.eyesScore}
            ></NavBar>
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
                    <div style={{ height: '36px' }}></div>
                )}
                <SubTitleContent content={gameData.subtitle2}></SubTitleContent>
                <div style={{ height: '108px' }}></div>
            </Wrapper>
            <NewBtn />
        </Border>
    )
}

export default BalancePage

const Border = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    min-height: calc(100vh - 132px - 20px);
    background-color: white;
    border-radius: 13px;
    ${FlexColumnCSS}
    align-items: center;
`

const Wrapper = styled.div`
    flex-grow: 1;
    width: 285px;
    ${FlexColumnCSS};
    justify-content: space-between;
    align-items: center;
`

const TitleBox = styled.div`
    width: 100%;
    height: 107px;
    background-color: ${({ theme }) => theme.COLOR.blue4};
    border-radius: 13px;
    color: white;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: 30px;
    ${FlexCenterCSS}
`

const ImgWrapper = styled.div`
    width: 73px;
    height: 107px;
`

const fillAnimation = keyframes<{ percent: string }>`
  from {
    width: 0%;
  }
  to {
    width: ${({ percent }) => percent};
  }
`

const PercentBox = styled.div<{ percent: string }>`
    width: ${({ percent }) => percent};
    animation: ${({ percent }) => fillAnimation} 2s ease-out;
    margin: 5px 0px;
    height: 26px;
    background-color: #f9cccc;
    border-radius: 3px;
    text-align: center;
    font-size: 18px;
    padding-top: 6px;
    box-sizing: border-box;
`

const PercentWrapper = styled.div`
    width: 100%;
`
