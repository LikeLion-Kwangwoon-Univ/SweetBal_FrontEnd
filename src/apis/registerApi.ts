import { AxiosResponse } from 'axios';
import axiosInstance from './@core';

const PATH = 'goldbalance/posts/make';

type RegisterApiType = {
  postBalance(newBalance: newBalanceType): Promise<AxiosResponse>;
};
export interface newBalanceType {
  leftSideTitle: string;
  rightSideTitle: string;
  leftSideDetail: string;
  rightSideDetail: string;
}

const RegisterApi: RegisterApiType = {
  postBalance(newBalance) {
    return axiosInstance.post(PATH, newBalance);
  },
};

export default RegisterApi;
