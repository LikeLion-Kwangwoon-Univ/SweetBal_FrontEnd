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

	return (
		<Container>
			{data?.response.map(el => (
				<Group4x4ListBox subject={el.subject} list={el.list} />
			))}
		</Container>
	)
}
export default MainPage

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
