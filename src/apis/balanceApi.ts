import { AxiosResponse } from 'axios'
import axiosInstance from './@core'

const balancePATH = '/balance'
const pickPATH = '/pick'

type BalanceApiType = {
    getBalance(id: number): Promise<AxiosResponse>
    postPick(num: number): Promise<AxiosResponse>
}

const BalanceApi: BalanceApiType = {
    getBalance(id: number) {
        return axiosInstance.get(balancePATH + `/${id}`)
    },
    postPick(num: number) {
        return axiosInstance.post(pickPATH, {
            select: num,
        })
    },
}

export default BalanceApi
