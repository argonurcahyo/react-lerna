import { Button, Form, Input } from 'antd';
import { FilterBar, SampleIcon } from 'sample-components';
import React from 'react';
import { Link } from 'react-router-dom';
const Search = Input.Search;
export default function (props: any) {
  const { onSearch } = props;
  return (
    <FilterBar>
      <Form.Item label="Kata Kunci Pencarian">
        <Search onSearch={onSearch} allowClear={false} placeholder="Masukan kata kunci..." />
      </Form.Item>
      <Form.Item className="bps-filter-bar__right">
        <Link to="customer/form">
          <Button type="primary">
            <SampleIcon icon="plus" />
            Tambah
                </Button>
        </Link>
      </Form.Item>
    </FilterBar>
  );
}
