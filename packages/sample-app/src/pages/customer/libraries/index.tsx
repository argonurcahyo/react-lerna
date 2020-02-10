import React, { Fragment, useEffect, useState } from 'react';
import useAction from '../hooks/useAction';
import Filter from './filter';
import Table from './table';

export default function (props: any) {
  const { data, getData, metaData, isLoader } = useAction();
  const [params, setParams]: any = useState({ page: 1, limit: 10, order_by: "updated_at", sort: "desc" });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (newParams?: any) => {
    const param = {
      ...params,
      ...newParams
    };
    setParams(param);
    getData(param);
  };

  const onSearch = (e: any) => {
    const param = Object.assign({ search: e });
    fetchData(param)
  }

  const onHandleTableChange = (pagination: any, filters: any, sorter: any) => {
    const { current, pageSize } = pagination;
    const sort = sorter.columnKey ? sorter.order : 'desc';
    const orderBy = sorter.columnKey ? sorter.columnKey : 'updated_at';
    const param = {
      ...params,
      limit: pageSize,
      order_by: orderBy,
      page: current,
      sort: sort === 'descend' || sort === 'desc' ? 'desc' : 'asc',
    };
    setParams(param);
    fetchData(param);
  }

  return (
    <Fragment>
      <Filter
        {...props}
        dataSource={data}
        onSearch={onSearch} />
      <Table
        {...props}
        loading={isLoader}
        dataSource={data}
        metaData={metaData}
        onTableChange={onHandleTableChange} />
    </Fragment>
  );
}
