import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  children?: any;
  spms?: string;
  match?: any;
}

export const BreadcrumbComponent = (props: IProps) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/app">BPS CMS</Link>
      </Breadcrumb.Item>
      {props.children}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
