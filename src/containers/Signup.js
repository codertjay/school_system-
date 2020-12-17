import React , { Component } from 'react';
import { Form , Input , Button , Select } from 'antd';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { NavLink } from "react-router-dom";
import { UserOutlined , LockOutlined , MailOutlined } from '@ant-design/icons';

class RegistrationForm extends Component {
    onFinish = values => {
        let is_student = false
        if (values.userType === 'student') is_student = true
        this.props.onAuth (
            values.username ,
            values.email ,
            values.password1 ,
            values.password1 ,
            is_student
        );

    };
    onFinishFailed = errorInfo => {
        console.log ('Failed:' , errorInfo);
    };

    render () {

        const layout = {
            labelCol: {
                span: 8 ,
            } ,
            wrapperCol: {
                span: 16 ,
            } ,
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8 ,
                span: 16 ,
            } ,
        };


        return (

            <Form
                {...layout}
                name="basic"
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >

                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true ,
                            message: 'Please input your username!' ,
                        } ,
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="username"/>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true ,
                            message: 'Please input your email!' ,
                            type: 'email',
                        } ,
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Mail"/>
                </Form.Item>
                <Form.Item
                    name="userType"
                    rules={[
                        {
                            required: true ,
                            message: 'Please select a user!' ,
                        } ,
                    ]}
                >
                    <Select placeholder="please select a user type">
                        <Select.Option value="student">Student</Select.Option>
                        <Select.Option value="teacher">Teacher</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="password1"
                    rules={[
                        {
                            required: true ,
                            message: 'Please input your password!' ,
                        } ,
                    ]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder='password'/>
                </Form.Item>
                <Form.Item
                    name="password2"
                    rules={[
                        {
                            required: true ,
                            message: 'please confirm your password!' ,
                        } ,
                    ]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                    placeholder='confirm password'/>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        Signup
                    </Button>
                    Or
                    <NavLink
                        style={{marginRight: '10px'}}
                        to='/login/'> Login
                    </NavLink>
                </Form.Item>

            </Form>

        );

    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading ,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username , email , password1 , password2 , is_student) =>
            dispatch (actions.authSignup (username ,
            email ,
            password1 ,
            password2 ,
            is_student))
    }
}

export default connect (mapStateToProps , mapDispatchToProps) (RegistrationForm);



