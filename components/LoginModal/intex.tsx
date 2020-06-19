import React from "react";
import {Modal, Form, Input, Checkbox, Button} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import styles from "./style.module.scss";

const LoginModal = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="ورود به پنل فروشندگان"
            footer={null}
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onCreate}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="نام کاربری" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="رمز عبور"
                    />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>مرا به خاطر بسپار</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button shape={"round"} type="primary" htmlType="submit" className={styles.submit}>
                        ورود
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default LoginModal;