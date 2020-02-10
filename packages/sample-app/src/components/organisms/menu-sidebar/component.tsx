import { Menu } from 'antd';
import { SampleIcon } from 'sample-components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuSidebarComponent = () => {
  const [selectedKey, setSelectedKey] = useState(['']);

  const onClickMenu = (key: string) => {
    const arrKey: any[] = [];
    arrKey.push(key);
    setSelectedKey(arrKey);
  };

  const setMenuActive = () => {
    const pathname: string = location.pathname;
    const clicked = pathname.replace("/", "");
    onClickMenu(clicked);
  };

  useEffect(() => {
    setMenuActive();
  }, []);

  return <Menu
    mode="inline"
    theme="dark"
    selectedKeys={selectedKey}
    defaultSelectedKeys={['customer']}
    // tslint:disable-next-line:jsx-no-lambda
    onClick={(e: any) => onClickMenu(e.key)}
  >
    <Menu.Item key="customer">
      <Link to="/customer">
        <SampleIcon icon="dashboard" />
        <span className="nav-text">Customer</span>
      </Link>
    </Menu.Item>
  </Menu>;
};

export default MenuSidebarComponent;
