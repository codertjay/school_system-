import React , { Component } from 'react';
import { Form , Input , Button , Space } from 'antd';
import { MinusCircleOutlined , PlusOutlined , UserOutlined } from '@ant-design/icons';

class AssignmentCreate extends Component {

    render () {
        const onFinish = values => {
            console.log ('Received values of form:' , values);
        };

        return (
    <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.List name="users">
            {(fields , {add , remove}) => {
                return (
                    <div>
                        {fields.map (field => (
                            <Space key={field.key} style={{display: 'flex' , marginBottom: 8}}>
                                <Form.Item
                                    {...field}
                                    name={[field.name , 'Questions']}
                                    fieldKey={[field.fieldKey , 'Questions']}
                                    rules={[{required: true , message: 'Missing title'}]}
                                >
                                    <Input placeholder="Assignment title"/>
                                </Form.Item>

                                <MinusCircleOutlined
                                    onClick={() => {
                                        remove (field.name);
                                    }}
                                />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => {
                                    Add Question ();
                                }}
                                block
                            >
                                <PlusOutlined/> Add field
                            </Button>
                        </Form.Item>
                    </div>
                );
            }}
        </Form.List>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
    };
}


export default AssignmentCreate