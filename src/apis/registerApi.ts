import { AxiosResponse } from 'axios';
import axiosInstance from './@core';

const PATH = '/goldbalance/posts/make';

type RegisterApiType = {
  postBalance(newBalance: newBalanceType): Promise<AxiosResponse>;
};
export interface newBalanceType {
  left_Side_Title: string;
  right_Side_Title: string;
  left_Side_Detail: string;
  right_Side_Detail: string;
}

const RegisterApi: RegisterApiType = {
  postBalance(newBalance) {
    return axiosInstance.post(PATH, newBalance);
  },
};

export default RegisterApi;
