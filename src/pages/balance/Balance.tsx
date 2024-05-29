import VSImg from '../../assets/imgs/VSImg.svg'
import { useState } from 'react'
import SubTitleContent from './SubTitleContent'
import { styled, keyframes } from 'styled-components'
import { FlexCenterCSS, FlexColumnCSS } from '../../styles/common'
import BalanceApi from '../../apis/balanceApi'
import useGetBalanceData from '../../query/get/useGetBalance'
import Comments from './components/Comments'
import NewBtn from '../../components/Button/newBtn'
import NavBar from '../../components/navBar/navBar'
import { useRecoilValue } from 'recoil'
import { isOpenCommentState } from '@/store/comments/atoms'
import { useParams, useSearchParams } from 'react-router-dom'

function BalancePage() {
    const id: number = Number(useParams<{ id: string }>().id)
    const [searchParams, _] = useSearchParams()
    const { data: gameData, status } = useGetBalanceData(id)
    const [select, setSelect] = useState('')
    const [percent, setPercent] = useState(0)
    const isOpenComment = useRecoilValue(isOpenCommentState)

    const handleSelect = async (userSelect: string) => {
        if (select === '') {
            setSelect(userSelect)
            await BalanceApi.postPick(id, userSelect)
            const total = gameData!.leftSideVote + gameData!.rightSideVote + 1
            const leftVote =
                userSelect === 'left'
                    ? gameData!.leftSideVote + 1
                    : gameData!.leftSideVote
            setPercent(Math.round((leftVote / total) * 100))
        }
    }

    if (isOpenComment) return <Comments />
    if (status === 'loading') return <div>로딩중</div>
    if (status === 'error') return <div>에러가 발생했습니다</div>

    return (
        <Border>
            <NavBar
                title={searchParams.get('type') || ''}
                url="/"
                views={gameData.leftSideVote + gameData.rightSideVote}
            ></NavBar>
            <Wrapper>
                <TitleBox onClick={() => handleSelect('left')}>
                    {gameData.leftSideTitle}
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
                    content={gameData.leftSideDetail}
                ></SubTitleContent>
                <ImgWrapper>
                    <img src={VSImg}></img>
                </ImgWrapper>
                <TitleBox onClick={() => handleSelect('right')}>
                    {gameData.rightSideTitle}
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
                    content={gameData.rightSideDetail}
                ></SubTitleContent>
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
    padding: 87px 0 108px 0;
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
