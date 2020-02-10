import { Breadcrumb } from 'antd';
import { LayoutCMS } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import TableCustomer from './libraries/';

export const PageCustomerComponent = (props: any) => {
    const title = 'Customer';
    const layoutCMSProps = {
        breadcrumb: (
            <>
                <Breadcrumb.Item>
                    <Link to="/cutomer">Customer</Link>
                </Breadcrumb.Item>
            </>
        ),
        documentTitle: title,
        history: props.history,
        pageTitle: title,
    };
    return (
        <LayoutCMS {...layoutCMSProps}>
            <TableCustomer />
        </LayoutCMS>
    );
};

export default PageCustomerComponent;
