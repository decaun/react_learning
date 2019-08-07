import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser,apiRequest} from './actions/user-actions'

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser=this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    this.props.onApiRequest();
  }

  render(){
    console.log(this.props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input onChange={this.onUpdateUser}></input>
      {this.props.user}
    </div>
  );
}}
const mapStateToProps = (state,props) => {

  return {
  products:state.products,
  user:state.user,
  userPlusProp: `${state.user} ${props.aRandomProps}`
}};

const mapActionsToProps =  {
  onUpdateUser:updateUser,
  onApiRequest: apiRequest
};


export default connect(mapStateToProps,mapActionsToProps)(App);
