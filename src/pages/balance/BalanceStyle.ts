import { styled } from "styled-components";
import { FlexCenterCSS, FlexColumnCSS } from "../../styles/common";

export const Border = styled.div`
    ${FlexCenterCSS}
    height: calc(100vh - 200px); /* 수정 필요 */
`;

export const Wrapper = styled.div`
    ${FlexColumnCSS};
    align-items: center;
    width: 350px;
    height: 655px;
    border-radius: 13px;
    background-color: white;
    padding-top: 16px;
`;

export const Bar = styled.div`
    width: 321px;
    height: 19px;
    display: flex;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const SubjectText = styled.span`
    font-size: 16px;
    padding-left: 5px;
`;

export const EyesScore = styled.span`
    font-size: 12px;
    padding-left: 5px;
    margin-top: 2px;
`;

export const SizedBox = styled.div`
    height: 96px;
`;

export const GameWrapper = styled.div`
    width: 285px;
    ${FlexColumnCSS}
    align-items: center;
`;

export const TitleBox = styled.div`
    width: 100%;
    height: 107px;
    margin-bottom: 9px;
    background-color: ${({ theme }) => theme.COLOR.blue4};
    border-radius: 13px;
    color: white;
    font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: 30px;
    ${FlexCenterCSS}
`;

export const ImgWrapper = styled.div`
    width: 73px;
    height: 107px;
`;

export const SpanWrapper = styled.span`
    display: flex;
    align-items: center;
`;
