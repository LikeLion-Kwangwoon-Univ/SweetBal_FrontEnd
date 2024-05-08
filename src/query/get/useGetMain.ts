import { useQuery } from '@tanstack/react-query'
import MainApi from '../../apis/mainApi'

export interface getMainDataType {
	subject: string
	title1: string
	title2: string
	balanceId: number
}

const getMainData = async () => {
	const res = await MainApi.getMain()
	return res.data
}

const useGetMainData = () => {
	const { data, isLoading } = useQuery<getMainDataType[], boolean>(
		['useGetMainData'],
		() => getMainData(),
	)
	return { data, isLoading }
}

export default useGetMainData