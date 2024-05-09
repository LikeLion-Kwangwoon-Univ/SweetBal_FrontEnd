import { AxiosResponse } from 'axios'
import axiosInstance from './@core'

const balancePATH = '/balance'
const pickPATH = '/pick'

type BalanceApiType = {
    getBalance(): Promise<AxiosResponse>
    postPick(num: number): Promise<AxiosResponse>
}

const BalanceApi: BalanceApiType = {
    getBalance() {
        return axiosInstance.get(balancePATH)
    },
    postPick(num: number) {
        return axiosInstance.post(pickPATH, {
            select: num,
        })
    },
}

export default BalanceApi
