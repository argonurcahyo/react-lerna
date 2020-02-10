import CollectionPayload from '@libraries/api/customer';
import FetchData from '@utils/fetch-data';
import { notification } from 'antd';
import { getAdditionalHeader, IFetchData, initialList } from 'sample-components';
import { Dispatch, SetStateAction, useState } from 'react';
import { IResponseCustomer } from '@interfaces/iresponse-customer';

const initialData = initialList.data;
const initialMeta = initialList.meta;
const defaultPage: number = 1;

export default function useAction() {
    const [isLoader, setIsLoader]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [file, setFile]: [any, Dispatch<SetStateAction<any>>] = useState();

    const [data, setData]: [
        IResponseCustomer[],
        Dispatch<SetStateAction<IResponseCustomer[]>>,
    ] = useState(initialData);

    const [metaData, setMeta]: [
        any,
        Dispatch<SetStateAction<any>>,
    ] = useState(initialMeta);

    const [detail, setDetail]: [
        any,
        Dispatch<SetStateAction<any>>,
    ] = useState(initialMeta);

    const getData = async (params: any) => {
        const additionalHeader = getAdditionalHeader();
        const payload: IFetchData = CollectionPayload.read(params);

        setIsLoader(true);

        try {
            const response: any = await FetchData({ ...payload, additionalHeader });
            setData(response.data.data);
            setMeta(response.data.meta);
            setIsLoader(false);
        } catch (error) {
            const { response } = error;
            setData(initialData);
            setMeta(initialMeta);
            setIsLoader(false);
            notification.error({
                description: response ? response.data.message : "gagal mengambil data",
                duration: 5,
                message: 'Failed',
            });
        }
    };

    const getDetail = async (id: string) => {
        const additionalHeader = getAdditionalHeader();
        const payload: IFetchData = CollectionPayload.readOne(id);

        setIsLoader(true);

        try {
            const response: any = await FetchData({ ...payload, additionalHeader });
            setDetail(response.data.data);
            setIsLoader(false);
        } catch (error) {
            const { response } = error;
            setData(initialData);
            setIsLoader(false);
            notification.error({
                description: response ? response.data.message : "gagal mengambil data",
                duration: 5,
                message: 'Failed',
            });
        }
    };



    const postData = async (params: any) => {
        const additionalHeader = getAdditionalHeader();
        const payload: IFetchData = CollectionPayload.post(params);

        setIsLoader(true);

        try {
            await FetchData({ ...payload, additionalHeader });
            setIsLoader(false);
            notification.success({
                message: 'Berhasil',
                duration: 5,
                description: 'Berhasil simpan data!',
            });
        } catch (error) {
            const { response } = error;
            setIsLoader(false);
            notification.error({
                description: response ? response.data.message : "gagal menyimpan data",
                duration: 5,
                message: 'Failed',
            });
        }
    };

    const updateData = async (params: any, id: string) => {
        const additionalHeader = getAdditionalHeader();
        const payload: IFetchData = CollectionPayload.put(params, id);

        setIsLoader(true);

        try {
            await FetchData({ ...payload, additionalHeader });
            setIsLoader(false);
            notification.success({
                message: 'Berhasil',
                duration: 5,
                description: 'Berhasil simpan data!',
            });
        } catch (error) {
            const { response } = error;
            setIsLoader(false);
            notification.error({
                description: response ? response.data.message : "gagal menyimpan data",
                duration: 5,
                message: 'Failed',
            });
        }
    };

    return {
        data,
        defaultPage,
        getData,
        isLoader,
        setIsLoader,
        postData,
        file,
        setFile,
        metaData,
        getDetail,
        detail,
        updateData
    };
}
