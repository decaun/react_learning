// imrc > import react component snippet
// cc > create component snippet

import React, { Component } from 'react';



class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        //if (prevProps.counter.value != this.props.counter.value) {
            //AJAX call to server for new data etc.
        //}
    }
    
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    state={
        tags: ['tag1','tag2','tag3']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // use above to use .this as object inside methods locally or use = () => at method definition


    renderTags () {
        if (this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    getClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
    }
    
    formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

    render () {
        console.log('Counter - Rendered');
        console.log(this.props)
        return ( 
        <div>
            {this.props.children}

            {/* Find why is this not working ? */}
            <h4>Counter #{this.props.id} from child</h4>

            <span style={this.styles} className={this.getClasses()}>
				{this.formatCount()}
			</span>
            {this.state.tags.length===0 && "Please create tags"}
            {this.renderTags()}
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

}

export default Counter;