import React , { Component } from 'react';
import { List , Skeleton } from 'antd';
import { connect } from 'react-redux';
import * as actions from "../store/actions/assignment";
import Hoc from '../hoc/hoc';
import { Link , Redirect } from 'react-router-dom'

class AssignmentList extends Component {

    componentDidMount () {
        if (this.props.token !== undefined && this.props.token !== null) {
            this.props.getASNTS (this.props.token)
        }
    }

    // UNSAFE_componentWillReceiveProp (newProps) {
    //     if (newProps.token !== undefined && newProps.token !== null) {
    //         this.props.getASNTS (newProps.token)
    //     }
    // }componentDidUpdate


    renderItem (item) {
        return (
            <Link to={`/assignment/${item.id}`}>
                <List.Item>{item.title}</List.Item>
            </Link>)
    }

    render () {
        console.log (this.props)
        if (!this.props.token) {
            return <Redirect to='/login'/>
        } else {
            return (
                <Hoc>
                    {
                        this.props.loading ?
                            <Skeleton active/>
                            :
                            <div>
                                <h3 style={{margin: "16px 0"}}>Assignment List</h3>
                                <List
                                    size="large"
                                    bordered
                                    dataSource={this.props.assignments}
                                    renderItem={item => this.renderItem(item)}
                                />
                            </div>
                    }
                </Hoc>
            )
                ;
        }
    }
}

const mapStateToProps = state => {
    return {
        assignments: state.assignments.assignments ,
        loading: state.assignments.loading ,
        token: state.auth.token ,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getASNTS: (token) => dispatch (actions.getASNTS (token))
    }
}
export default connect (mapStateToProps , mapDispatchToProps) (AssignmentList);



