import { useQuery } from '@tanstack/react-query'
import MainApi from '../../apis/mainApi'

export interface listType {
	balanceId: number
	title1: string
	title2: string
}
export interface responseType {
	subject: string
	list: listType[]
}
export interface getMainDataType {
	status: number
	response: responseType[]
}

const getMainData = async () => {
	const res = await MainApi.getMain()
	return res.data
}

const useGetMainData = () => {
	const { data, isLoading } = useQuery<getMainDataType, boolean>(
		['useGetMainData'],
		() => getMainData(),
	)
	return { data, isLoading }
}

export default useGetMainData
