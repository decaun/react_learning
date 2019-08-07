import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetail extends Component {

    render() { 
        //this is for initial case checking since it is null or Undefined it can create issues
        if(!this.props.user){
            return (<h4>Select a user...</h4>)
        }
        return ( 
            <div>
                <img src={this.props.user.thumbnail}/>
            <h2>{this.props.user.first} {this.props.user.last}</h2>
            <h3>Age: {this.props.user.age}</h3>
            <h3>Description: {this.props.user.description}</h3>
            </div>
         );
    }
}

function mapStateToProps(state) {
    return{
        user:state.activeUser
        //instead of users used user because we want only active one so sending user from component state to redux in this case
    };
}


export default connect(mapStateToProps)(UserDetail);