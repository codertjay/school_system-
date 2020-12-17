import React from "react";
import {  Skeleton } from "antd";
import { connect } from "react-redux";
import Hoc from '../hoc/hoc'

class Profile extends React.Component {

    render () {
        console.log ('the',this.props)
        console.log ('dgddfdfdf')
       return (
            <div>
                <h1>Hi {this.props.username}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps ,mapDispatchToProps)(Profile);
