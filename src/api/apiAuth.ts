import axios from 'axios';
import {API_AGRIO} from '../configs/info';

export interface auth {
  username: string;
  password: string;
}

interface resAuth {
  token: string;
  refresh: string;
}

export const authenToken = async (data: auth) => {
  const result = await tokenObtainApi(data);
  return result
};

const tokenObtainApi = async (data: auth) => {
  let url = `${API_AGRIO}/token/obtain`;
  const res = await axios.post<resAuth>(url, data)
    .then(res => {
        if(res.status === 200){
            return res.data
        }
    })
    .catch((err) => {
        console.log('err',err)
      return err;
    })
    return res
};
