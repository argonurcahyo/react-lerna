import { Breadcrumb, Button, Card, Form, Input, Modal, Skeleton } from 'antd';
import { ButtonAction, formItemLayout } from 'sample-components';
import { LayoutCMS } from 'components';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAction from '@pages/customer/hooks/useAction';
import { IResponseCustomer } from '@interfaces/iresponse-customer';

const { confirm } = Modal;
export const PageCustomerForm = (props: any) => {
    const title = 'Customer'
    const layoutCMSProps = {
        breadcrumb: (
            <>
                <Breadcrumb.Item>
                    {title}
                </Breadcrumb.Item>
            </>
        ),
        documentTitle: title,
        history: props.history,
        pageTitle: title,
    };

    const { isLoader, detail, getDetail, postData, updateData } = useAction();
    const { form, match } = props;
    const { getFieldDecorator } = form;
    const idData = match.params.id;

    useEffect(() => {
        fetchDetail();
    }, [])

    const fetchDetail = () => {
        getDetail(idData);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        form.validateFieldsAndScroll(async (err: any, values: any) => {
            if (!err) {
                confirm({
                    cancelText: 'Tidak',
                    content: 'Apakah Anda yakin untuk menyimpan data ini?',
                    okText: 'Ya',
                    okType: 'danger',
                    onOk: async () => {
                        if (!idData) {
                            postData(values);
                        } else {
                            updateData(values, idData);
                        }
                    },
                    title: 'Konfirmasi',
                });
            }
        });
    };

    const dataDetail: IResponseCustomer = detail;
    return (
        <LayoutCMS {...layoutCMSProps}>
            <Card>
                <Form {...formItemLayout}>
                    <Skeleton loading={isLoader}>
                        <Form.Item label="User Name">
                            {getFieldDecorator('username', {
                                initialValue: idData && dataDetail ? dataDetail.username : null,
                                rules: [
                                    {
                                        message: 'Please input user name',
                                        required: true,
                                    },
                                    {
                                        max: 255,
                                        message: 'max length input 255',
                                    }
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Full Name">
                            {getFieldDecorator('fullname', {
                                initialValue: idData && dataDetail ? dataDetail.fullname : null,
                                rules: [
                                    {
                                        message: 'Please input full name',
                                        required: true,
                                    },
                                    {
                                        max: 255,
                                        message: 'max length input 255',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Email">
                            {getFieldDecorator('email', {
                                initialValue: idData && dataDetail ? dataDetail.email : null,
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'Email tidak valid!',
                                    },
                                    {
                                        max: 255,
                                        message: 'max length input 255',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                    </Skeleton>
                    <ButtonAction
                        left={
                            <Link to="/global-setting/acl">
                                <Button>Cancel</Button>
                            </Link>
                        }
                        right={
                            <Button type="primary" onClick={handleSubmit}>
                                Save
                            </Button>
                        }
                    />
                </Form>
            </Card>
        </LayoutCMS>
    );
};
export const PageCustomerFormComponent = Form.create()(PageCustomerForm);
export default PageCustomerFormComponent;
