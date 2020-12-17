import React , { Component } from 'react';
import { Form , Input , Button , Space } from 'antd';
import { MinusCircleOutlined , PlusOutlined , UserOutlined } from '@ant-design/icons';

class QuestionForm extends Component {

    render () {
        const onFinish = values => {
            console.log ('Received values of form:' , values);
        };

        return (

        <Form.List name="users">
            {(fields , {add , remove}) => {
                return (
                    <div>
                        {fields.map (field => (
                            <Space key={field.key} style={{display: 'flex' , marginBottom: 8}}>
                                <Form.Item
                                    {...field}
                                    name={[field.name , 'Choices']}
                                    fieldKey={[field.fieldKey , 'Choices']}
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
                                    add ();
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


);
    };
}


export default QuestionForm