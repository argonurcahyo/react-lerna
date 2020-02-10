import { BaseCMS, PageHeader } from 'sample-components';
import { Breadcrumb, MenuSidebar } from 'components';
import React, { Fragment } from 'react';

interface IProps {
  breadcrumb?: any;
  children?: any;
  history?: any;
  documentTitle?: string;
  pageTitle?: string;
}

export const LayoutCMSComponent = (props: IProps) => {
  const title = (
    <Fragment>
      <span>BPS CMS</span>
    </Fragment>
  );
  return (
    <BaseCMS
      title={title}
      documentTitle={props.documentTitle}
      navigation={<MenuSidebar />}
      history={props.history}
      username={"user"}
    >
      <PageHeader title={props.pageTitle} />
      <Breadcrumb>{props.breadcrumb}</Breadcrumb>
      {props.children}
    </BaseCMS>
  );
};

export default LayoutCMSComponent;
