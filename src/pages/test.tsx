import { styled } from 'styled-components'

function Test() {
  return (
    <>
      <Test1>dd</Test1>
    </>
  )
}

const Test1 = styled.div`
  color: ${({ theme }) => theme.COLOR.red};
`
