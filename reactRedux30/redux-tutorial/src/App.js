import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser,apiRequest} from './actions/user-actions'
import {createSelector} from 'reselect';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser=this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    setTimeout(()=>{this.props.onApiRequest();
    },1500)
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

const productsSelector = createSelector(
  state => state.products,
  products => products

);

const userSelector = createSelector(
  state =>state.user,
  user => user
);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products,user) => ({
    products,
    user
  })
);


const mapActionsToProps =  {
  onUpdateUser:updateUser,
  onApiRequest: apiRequest
};


export default connect(mapStateToProps,mapActionsToProps)(App);
