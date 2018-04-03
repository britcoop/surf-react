import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	myInput = React.createRef();

	// must use the syntax below in order to access keyword this inside
	// of a custom method in react (this is due to how binding works in react)
	goToStore = (event) => {
		// 1. stop the form from submitting:
		event.preventDefault();
		// 2. get the text from that input
		const storeName = this.myInput.value.value;
		// 3. change the page to /store/whatever-the-entered
		this.props.history.push(`/store/${storeName}`);

	}
	render() {
		return (
			<React.Fragment>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>
					<input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
					<button type="submit">Visit Store > </button>
				</form>
			</React.Fragment>
		)
	}
}

export default StorePicker;