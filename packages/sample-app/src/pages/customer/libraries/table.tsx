import { Button, Icon, Table, Tooltip } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  defaultPageSize,
  pageSizeOptions,
  showSizeChanger,
} from 'sample-components';

export default function (props: any) {
  const { dataSource, metaData, onTableChange } = props;
  const columns: Array<ColumnProps<any>> = [
    {
      dataIndex: 'username',
      key: 'username',
      title: 'User Name',
    },
    {
      dataIndex: 'email',
      key: 'email',
      title: 'Email',
    },
    {
      dataIndex: 'fullname',
      key: 'fullname',
      title: 'Full Name',
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: any) => {
        return (
          <div className="bt-table__action">
            <Tooltip placement="top" title="Edit">
              <Link to={`/customer/form/${record.id}`}>
                <Button>
                  <Icon type="edit" />
                </Button>
              </Link>
            </Tooltip>
          </div>
        );
      },
      title: 'Action',
    },
  ];

  return (
    <Fragment>
      <Table
        dataSource={dataSource}
        columns={columns}
        className="sample-table"
        loading={props.loading}
        pagination={{
          current: metaData.page,
          defaultPageSize,
          pageSizeOptions,
          showSizeChanger,
          total: metaData.total_records,
        }}
        rowKey="id"
        onChange={onTableChange}
      />
    </Fragment>
  );
}
