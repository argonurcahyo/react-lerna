import { TitleSidebar } from "@cms/atoms/title-sidebar";
import { HeaderCMS } from "@cms/organisms/header-cms";
import { Button, Layout } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
const { Content, Sider } = Layout;

interface IProps {
  children?: any;
  history?: any;
  title?: any;
  navigation?: any;
  documentTitle?: any;
  acl?: any;
  role?: string;
  handleChangeAcl?: any;
  username: string;
  onClickLogOut?: any;
}

export const BaseCMSComponent = (props: IProps) => {
  const { acl, role, handleChangeAcl, username, onClickLogOut } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);
  const device = windowWidth >= 992 ? "desktop" : "mobile";
  const toggleMenu = () => setOpenMenu(!openMenu);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const onCollapse = () => setCollapsed(!collapsed);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <Fragment>
      <DocumentTitle title={props.documentTitle} />
      <Layout className={`sample-cms` + (openMenu ? " menu-open" : "")} style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          className="sample-sidebar"
          collapsible={true}
          collapsed={collapsed}
          onCollapse={onCollapse}
          width="240"
          style={{
            height: "100vh",
            left: 0,
            overflow: "auto",
            position: "fixed",
          }}
        >
          <TitleSidebar title={props.title} />
          {props.navigation}
          <small className="sample-copyright-side">
            <p>Hak Cipta &copy; 2019 Badan Pusat Statistik Semua Hak Dilindungi</p>
            <small>&copy; 2019 BPS</small>
          </small>
        </Sider>
        <Layout {...(openMenu ? { onClick: () => toggleMenu() } : {})}>
          <HeaderCMS
            acl={acl}
            role={role}
            handleChangeAcl={handleChangeAcl}
            username={username}
            onClickLogOut={onClickLogOut}
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
            {device === "mobile" && (
              <header>
                <Button icon="menu-fold" onClick={toggleMenu}>
                  Menu
                </Button>
              </header>
            )}
          </HeaderCMS>
          <Content className="sample-content">{props.children}</Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default BaseCMSComponent;
