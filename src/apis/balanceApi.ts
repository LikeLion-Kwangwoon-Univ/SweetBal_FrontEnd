import { AxiosResponse } from 'axios'
import axiosInstance from './@core'

const balancePath = '/goldbalance/posts'
const selectPath = '/goldbalance/select'

type BalanceApiType = {
    getBalance(id: number): Promise<AxiosResponse>
    postPick(id: number, select: string): Promise<AxiosResponse>
}

const BalanceApi: BalanceApiType = {
    getBalance(id: number) {
        return axiosInstance.get(`${balancePath}/${id}`)
    },
    postPick(id: number, select: string) {
        return axiosInstance.post(`${selectPath}/${id}/${select}`)
    },
}

export default BalanceApi
