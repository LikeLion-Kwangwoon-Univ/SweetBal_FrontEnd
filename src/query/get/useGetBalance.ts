import { useQuery } from '@tanstack/react-query'
import BalanceApi from '../../apis/balanceApi'
import { GameDataType } from '../../interface/BalanceInterface'

const getBalanceData = async (): Promise<GameDataType> => {
    const res = await BalanceApi.getBalance()
    return res.data
}

const useGetBalanceData = () => {
    const { data, isLoading } = useQuery<GameDataType, boolean>(
        ['useGetBalanceData'],
        () => getBalanceData()
    )
    return { data, isLoading }
}

export default useGetBalanceData
