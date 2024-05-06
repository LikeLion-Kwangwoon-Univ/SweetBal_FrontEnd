import { styled } from 'styled-components'
import Group4x4ListBox from './components/group4x4ListBox'

function MainPage() {
  return (
    <>
      <h1>MainPage</h1>
    </>
  );
}
export default MainPage;


	return (
		<Container>
			{Array(3)
				.fill(0)
				.map(() => (
					<Group4x4ListBox />
				))}
		</Container>
	)
}
export default MainPage

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

