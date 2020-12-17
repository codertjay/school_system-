import React , { Component } from 'react';
import { Radio } from 'antd';


const radioStyle = {
    display: 'block' ,
    height: '30px' ,
    lineHeight: '30px' ,
};

class Choices extends React.Component {


    render () {
        console.log ('choices ' , this.props)
        const {questionId , value} = this.props
        const {usersAnswers} = this.props
        console.log (usersAnswers[questionId])
        console.log (questionId)
        console.log (usersAnswers)
        return (
            <Radio.Group onChange={(e , qId) => this.props.change (e , questionId)}
                         value={
                             usersAnswers[questionId] !== undefined &&
                             usersAnswers[questionId] !== null
                                 ? usersAnswers[questionId]
                                 : null
                         }>
                {this.props.choices.map ((c , index) => {
                    return (<Radio key={index} style={radioStyle} value={c}>
                        {c}
                    </Radio>)
                })}
            </Radio.Group>
        );
    }
}


export default Choices