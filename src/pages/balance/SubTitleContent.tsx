import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../styles/common'

const Subtitle = styled.div`
	width: 100%;
	height: 47px;
	background-color: ${({ theme }) => theme.COLOR.blue1};
	border-radius: 13px;
	color: ${({ theme }) => theme.COLOR.grey1};
	font-size: 16px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	${FlexCenterCSS}
	text-align: center;
`

function SubTitleContent({ content }: { content: string }) {
	const parseStr = content.split('\n')
	if (parseStr.length === 1) {
		return <Subtitle>{content}</Subtitle>
	} else {
		return (
			<Subtitle>
				{parseStr[0]}
				<br />
				{parseStr[1]}
			</Subtitle>
		)
	}
}

export default SubTitleContent
