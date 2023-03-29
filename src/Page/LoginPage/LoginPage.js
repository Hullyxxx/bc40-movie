import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { userServ } from '../../services/userServices';
import { localServ } from '../../services/localServices';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../../redux/constants/userConstant';
import { setLoginAction, setLoginActionServices } from '../../redux/action/userAction';
import Lottie from "lottie-react";
import bgAnimate from '../../assets/login_animate.json'

export default function LoginPage() {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    // const onFinish = (values) => {
    //     console.log('Success:', values);
    //     userServ.postLogin(values)
    //         .then(res => {
    //             message.success('Đăng nhập thành công')
    //             // lưu thông tin user vào localstorage
    //             localServ.set(res.data.content)
    //             dispatch(setLoginAction(res.data.content))
    //             // chuyển hướng user tới hompage
    //             navigate("/")
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             message.error('Đăng nhập thất bại')
    //             console.log(err)
    //         })
    // };
    const onFinishThunk = (value) => {
        console.log(value)
        let onSuccess = () => {
            message.success('Đăng nhập thành công')
            // lưu thông tin user vào localstorage
            
            // chuyển hướng user tới hompage
            navigate("/")
        }
        dispatch(setLoginActionServices(value, onSuccess))
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div class="h-screen w-screen flex bg-orange-500 justify-center items-center">
            <div class="container mx-auto p-5 bg-white rounded flex">
                <div className='w-1/2 h-full'>
                    <Lottie animationData={bgAnimate} loop={true} />;
                </div>
                <div className='w-1/2 h-full'>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        style={{
                            width: '100%'
                        }}
                        layout="vertical"
                        initialValues={{
                            layout: "vertical",
                        }}
                        onFinish={onFinishThunk}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                            className='flex justify-center items-center'
                        >
                            <Button className='bg-orange-500 hover:text-orange-500 hover:border-hidden' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    )
}
