import { styled } from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineInbox } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

interface NavBarPropsType {
    title: string
    url: string
    views: number
}
function NavBar({ title, url, views }: NavBarPropsType) {
    const navigate = useNavigate()

    const HandleNavClick = () => {
        navigate(url)
    }
    return (
        <Container>
            <Side>
                <EventIoIosArrowBack onClick={HandleNavClick} />
                <Back>{title}</Back>
            </Side>
            <Side>
                <AiOutlineInbox />
                <Views>{views}</Views>
            </Side>
        </Container>
    )
}
export default NavBar

const Container = styled.div`
    height: 40px;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const Side = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    height: 100%;
`

const Back = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`
const Views = styled.div`
    font-size: 12px;
    margin-left: 6px;
    font-weight: bold;
`
const EventIoIosArrowBack = styled(IoIosArrowBack)`
    cursor: pointer;
`
