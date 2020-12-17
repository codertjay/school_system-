import React , { Component } from 'react';
import { Form , Input , Button , Spin } from 'antd';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { NavLink , Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


class NormalLoginForm extends Component {
    onFinish = values => {
        this.props.onAuth (values.username , values.password);
        // this.props.history.push ('/');

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

        console.log ('the' , this.props)
        if (this.props.token) {
            return <Redirect to='/'/>
        } else {
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
                        name="password"
                        rules={[
                            {
                                required: true ,
                                message: 'Please input your password!' ,
                            } ,
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                        placeholder='password'/>
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                            Login
                        </Button>
                        Or
                        <NavLink
                            style={{marginRight: '10px'}}
                            to='/signup/'> signup
                        </NavLink>
                    </Form.Item>

                </Form>

            );

        }
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading ,
        error: state.auth.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username , password) => dispatch (actions.authLogin (username , password))
    }
}

export default connect (mapStateToProps , mapDispatchToProps) (NormalLoginForm);




