import { Dropdown, Icon, Layout, Menu, Select } from "antd";
import React from "react";
import { SampleIcon } from "src";
const { Header } = Layout;
const { Option } = Select;

export const HeaderCMSComponent = (props: any) => {
  const {
    acl,
    role,
    handleChangeAcl,
    username,
    onClickLogOut,
    collapsed,
    onCollapse,
    children,
  } = props;
  const menu = (
    <Menu className="sample-dropdown-header">
      <Menu.Item>
        <a href="/">
          <SampleIcon icon="user" />
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#" onClick={onClickLogOut}>
          <SampleIcon icon="log-out" />
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="sample-header" style={{ zIndex: 1, width: "100%" }}>
      <Icon
        className="trigger"
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={onCollapse}
      />
      {children}
      <div className="sample-header-user">
        {acl && (
          <Select defaultValue={role} onChange={handleChangeAcl} style={{ width: 100 }}>
            {acl.map((item: any, index: number) => (
              <Option key={index} value={item} disabled={role === item.role}>
                {item.role}
              </Option>
            ))}
          </Select>
        )}
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <div className="bs-header-user__avatar">
            {username ? username.slice(0, 2).toUpperCase() : ""}
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderCMSComponent;
