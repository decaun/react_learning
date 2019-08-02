import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
		counters: [
			{ id: 1, value: 10 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		]
    };

    constructor(props) {
      super(props);
      console.log('App - Constructor', this.props);
      //this.state =  this.props.sth
      //can not use .setState here
      }

    componentDidMount(){
      console.log('App - Mounted');
    }
    
    handleIncrement = counter => {
        const counters = [...this.state.counters];//this copies state.counters
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({counters});
    };

	handleDelete = counterId => {
		console.log("Event Handler Called", counterId);
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
    };
    
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
        });
        this.setState({counters});
    };


	render() {
    console.log('App - Rendered');
    //place to do AJAX calls and get data from server
		return (
			<React.Fragment>
				<NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
				<main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
