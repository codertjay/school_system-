import React , { Component } from 'react';
import { Card , Skeleton } from 'antd'

import { connect } from 'react-redux';
import { getASNTSDetail } from "../store/actions/AssignmentDetail";
import Hoc from '../hoc/hoc';
import Choices from '../components/Choices'
import Questions from './Questions'


const cardStyle = {
    marginTop: '20px' ,
    marginBottom: '20px'
}

class AssignmentDetail extends Component {

    state = {
        userAnswers: {}
    }

    componentDidMount () {
        if (this.props.token !== undefined && this.props.token !== null) {
            this.props.getASNTSDetail (this.props.token , this.props.match.params.id);
        }
    }


    UNSAFE_componentWillReceiveProps (newProps) {
        if (newProps.token !== this.props.token) {
            if (newProps.token !== undefined && newProps.token !== null) {
                this.props.getASNTSDetail (newProps.token , this.props.match.params.id);
            }
        }
    }

    onChange = (e , qId) => {
        console.log ('radio checked' , e.target.value);
        const usersAnswers = this.state.userAnswers
        usersAnswers[qId] = e.target.value
        this.setState ({usersAnswers});
    };


    render () {
        const {currentAssignment} = this.props
        const {title} = this.props.currentAssignment
        const usersAnswers = this.state.userAnswers
        return (
            <Hoc>
                {Object.keys (currentAssignment).length > 0 ?
                    <Hoc>{
                        this.props.loading ?
                            <Skeleton active/> :
                            (<Card title={title}>
                                    <Questions questions={
                                        currentAssignment.questions.map (q => {
                                            return <Card type="inner"
                                                         style={cardStyle}
                                                         key={q.id} title={` ${q.order}. ${q.question}`}>
                                                <Choices questionId={q.id}
                                                         choices={q.choices}
                                                         change={this.onChange}
                                                         usersAnswers={usersAnswers}/>
                                            </Card>
                                        })}/>
                                </Card>
                            )
                    }
                    </Hoc>
                    : null
                }
            </Hoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentAssignment: state.assignments.currentAssignment ,
        loading: state.assignments.loading ,
        token: state.auth.token ,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getASNTSDetail: (token , id) => dispatch (getASNTSDetail (token , id)) ,
    }
}
export default connect (mapStateToProps , mapDispatchToProps) (AssignmentDetail);

