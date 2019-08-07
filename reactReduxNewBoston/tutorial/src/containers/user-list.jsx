import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class UserList extends Component {
    
    createListItems() {
        return this.props.users.map(user => {
            return (
                <li 
                key={user.id}
                onClick={() => this.props.selectUser(user)}
                >{user.first} {user.last}</li>
            )
        });
    }

    render() { 
        return ( 
            <ul>
                {this.createListItems()}
            </ul>
         );
    }

}

function mapStateToProps(state) {
    return{
        users:state.users
        //1st part comes from reducers 2nd part sends it to component state as props
    }
}

//to pass action to redux we need to declare this function
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser:selectUser
        //1st var from action binds it to function at 2nd var
    },dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(UserList);