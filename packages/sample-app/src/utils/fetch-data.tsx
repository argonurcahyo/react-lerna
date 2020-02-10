
import axios, { AxiosResponse } from 'axios';
import { IFetchData } from 'sample-components';

interface IHeaders {
  Accept: string;
  Authorization: string;
}

export const FetchData = ({ method, uri, params, additionalHeader, baseUrl }: IFetchData) => {
  const baseUri = baseUrl || process.env.REACT_APP_KONG;
  const url: string = `${baseUri}/${uri}`;
  const headers: IHeaders = { ...additionalHeader };
  const dataOrParams = ['GET', 'DELETE'].includes(method.toUpperCase()) ? 'params' : 'data';
  const defaultConfig: object = { method, headers, url };
  const config = { ...defaultConfig, [dataOrParams]: params };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response: AxiosResponse<any>) => {
        resolve(response);
      })
      .catch((error: any) => {
        const { response } = error;
        if (response && response.status === 401) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};

export default FetchData;
