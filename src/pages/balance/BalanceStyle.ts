import { styled, keyframes } from 'styled-components'
import { FlexCenterCSS, FlexColumnCSS } from '../../styles/common'

export const Border = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    min-height: calc(100vh - 132px - 20px);
    background-color: white;
    border-radius: 13px;
    ${FlexColumnCSS}
    align-items: center;
`

export const Wrapper = styled.div`
    flex-grow: 1;
    width: 285px;
    ${FlexColumnCSS};
    justify-content: space-between;
    align-items: center;
`

export const Bar = styled.div`
    width: 321px;
    height: 19px;
    display: flex;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`

export const SubjectText = styled.span`
    font-size: 16px;
    padding-left: 5px;
`

export const EyesScore = styled.span`
    font-size: 12px;
    padding-left: 5px;
    margin-top: 2px;
`

export const SizedBox = styled.div<{ hSize: string }>`
    height: ${({ hSize }) => hSize};
`

export const GameWrapper = styled.div`
    width: 285px;
    ${FlexColumnCSS}
    align-items: center;
`

export const TitleBox = styled.div`
    width: 100%;
    height: 107px;
    background-color: ${({ theme }) => theme.COLOR.blue4};
    border-radius: 13px;
    color: white;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: 30px;
    ${FlexCenterCSS}
`

export const ImgWrapper = styled.div`
    width: 73px;
    height: 107px;
`

export const SpanWrapper = styled.span`
    display: flex;
    align-items: center;
`
const fillAnimation = keyframes<{ percent: string }>`
  from {
    width: 0%;
  }
  to {
    width: ${({ percent }) => percent};
  }
`

export const PercentBox = styled.div<{ percent: string }>`
    width: ${({ percent }) => percent};
    animation: ${({ percent }) => fillAnimation} 2s ease-out;
    height: 26px;
    background-color: #f9cccc;
    border-radius: 3px;
    text-align: center;
    font-size: 18px;
    padding-top: 6px;
    box-sizing: border-box;
`

export const PercentWrapper = styled.div`
    width: 100%;
`
