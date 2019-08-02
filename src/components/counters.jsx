import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	
	

	render() {
		console.log('Counters - Rendered');
		//object destructring. Could add all props.
		const {onReset, counters, onDelete, onIncrement}=this.props
		return (
			<div>
                <button 
                onClick={onReset} 
                className="btn btn-primary btn-sm m-2">Reset</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						value={counter.value}
                        id={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
					>
						<h4>Counter #{counter.id} from parent</h4>
					</Counter>
				))}
			</div>
		);
	}
}

export default Counters;
