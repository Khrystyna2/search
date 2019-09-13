import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import SearchForm from "./SearchForm";
import SearchList from "../pages/SearchList";

export default class App extends Component {
	state = {
		searchQuery: null
	};

	getQuery = searchQuery => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `param=${searchQuery}`
		});
	};

	render() {
		return (
			<div className="container">
				<SearchForm getQuery={this.getQuery} />

				<Switch>
					<Route exact path="/" component={SearchList} />
				</Switch>
			</div>
		);
	}
}
