// imrc > import react component snippet
// cc > create component snippet

import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:this.props.value,
        tags: ['tag1','tag2','tag3']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // use above to use .this as object inside methods locally or use = () => at method definition

    handleIncrement = product => {
        //console.log('Increment Clicked',this);
        //this.state.count++; is not used since VDOM is not notified
        this.setState({ count: this.state.count + 1 })
        console.log(product);
    }

    renderTags () {
        if (this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    getClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
    }
    
    formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}

    render () {
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
            <button onClick={ () => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

}

export default Counter;