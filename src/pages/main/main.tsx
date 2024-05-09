import { styled } from 'styled-components'
import Group4x4ListBox from './components/group4x4ListBox'
import useGetMainData from '../../query/get/useGetMain'
import LoadingPage from '../../components/loading/Loading'

function MainPage() {
	const { data, isLoading } = useGetMainData()

	if (isLoading)
		return (
			<Container>
				<LoadingPage />
			</Container>
		)

	if (data?.length === 0) return <Container>데이터가없네요?</Container>

	return (
		<Container>
			{data?.map(() => (
				<Group4x4ListBox />
			))}
		</Container>
	)
}
export default MainPage

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
