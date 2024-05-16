import { useQuery } from '@tanstack/react-query'
import MainApi from '../../apis/mainApi'

export interface listType {
	id: number
	leftSideTitle: string
	rightSideTitle: string
}
export interface responseType {
	subject: string
	postList: listType[]
}
export interface getMainDataType {
	status: number
	allPostList: responseType[]
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
