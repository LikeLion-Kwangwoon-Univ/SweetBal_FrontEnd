import { useQuery } from '@tanstack/react-query'
import BalanceApi from '../../apis/balanceApi'
import { GameDataType } from '../../interface/BalanceInterface'

const getBalanceData = async (id: number): Promise<GameDataType> => {
    const res = await BalanceApi.getBalance(id)
    return res.data
}

const useGetBalanceData = (id: number) => {
    const { data, isLoading } = useQuery<GameDataType, boolean>(
        ['useGetBalanceData'],
        () => getBalanceData(id)
    )
    return { data, isLoading }
}

export default useGetBalanceData
