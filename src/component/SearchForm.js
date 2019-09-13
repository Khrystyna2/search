import React, { Component } from "react";

export default class SearchForm extends Component {
	state = {
		inputValue: ""
	};

	handleOnChange = ({ target: { value } }) =>
		this.setState({
			inputValue: value
		});

	onSubmit = e => {
		const { inputValue } = this.state;
		const { getQuery } = this.props;

		e.preventDefault();

		getQuery(inputValue);
	};

	render() {
		const { inputValue } = this.state;
		return (
			<form onSubmit={this.onSubmit} className="search-form">
				<input type="search" placeholder="Enter text" value={inputValue} onChange={this.handleOnChange} />
				<button type="submit">Search</button>
			</form>
		);
	}
}
