import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
	state = {
		inputValue: ""
	};

	handleOnChange = ({ target: { value } }) =>
		this.setState({
			inputValue: value
		});

	onSubmit = e => {
		const { inputValue } = this.state;

		e.preventDefault();

		if (!inputValue) return;

		this.props.history.push(`?param=${inputValue}`);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="search-form">
				<input type="search" placeholder="Enter text" onChange={this.handleOnChange} />
				<button type="submit">Search</button>
			</form>
		);
	}
}

export default withRouter(SearchForm);
