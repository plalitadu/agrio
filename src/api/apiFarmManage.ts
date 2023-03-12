import axios, {AxiosRequestHeaders, AxiosResponse} from 'axios';

import {API_AGRIO_MAIN} from '../configs/info';

export interface farm {
  user_id: string;
  farm_name: string;
  farm_lat: number;
  farm_long: number;
  farm_img: any;
}

interface ResFarm {
  code: number;
  message: string;
  count: number;
  total: number;
  data?: [];
  error?: any;
}

export const farmCreate = (data:farm) =>{
    return postCreateFarm(data)
}

async function postCreateFarm(data: farm): Promise<AxiosResponse<ResFarm>> {
  let url = `${API_AGRIO_MAIN}/farm`;

  const formData = new FormData();

  formData.append('user_id', data.user_id);
  formData.append('farm_name', data.farm_name);
  formData.append('farm_lat', data.farm_lat.toLocaleString());
  formData.append('farm_long', data.farm_long.toLocaleString());

  if (data.farm_img) {
    formData.append('farm_img', {
      uri: data.farm_img.uri,
      type: data.farm_img.type,
      name: data.farm_img.fileName,
    });
  }

  return axios.post<ResFarm>(url, formData, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  //   return AxiosApiInstance.post<ResJourneyDetail>(url, formData, {
  //     headers: myHeaders
  //   })
}
