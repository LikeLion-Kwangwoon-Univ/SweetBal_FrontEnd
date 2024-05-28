import { AxiosResponse } from 'axios'
import axiosInstance from './@core'

const PATH = '/goldbalance/home'

type MainApiType = {
	getMain(): Promise<AxiosResponse>
}

const MainApi: MainApiType = {
	getMain() {
		return axiosInstance.get(PATH)
	},
}

export default MainApi
