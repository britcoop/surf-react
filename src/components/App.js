import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = (fish) => {
		//1. Take a copy of the existing state
		const fishes = { ...this.state.fishes };
		//2. Add our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		//3. Set the new fishes object to state (this takes 1. and 2. and updates fishes object on state)
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		//what part of start do we want to update? (fishes) what do we want to update it with? (sampleFishes)
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = (key) => {
		//1. take a copy of state
		const order = { ...this.state.order };
		//2. either add to the order, or update the number in our order
		//if order.key already exists this will increment it, if not it will = 1
		//[key] is just fish1, fish2, etc...
		order[key] = order[key] + 1 || 1;
		//3. call setState to update our state object
		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				 <Header tagline="Fresh Seafood Market"/>
				 <ul className="fishes">
				{/* whenever there is something in state, we will map over it : */}
				 	{Object.keys(this.state.fishes).map(key => (
				 		<Fish
				 		key={key}
				 		index={key}
				 		details={this.state.fishes[key]}
				 		addToOrder={this.addToOrder}
				 		/> 
				 	))}
				 </ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				 />
			</div>
		)
	}
}

export default App;