import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import mock from "../mock";

const getParamFromProps = props => queryString.parse(props.location.search).param;

class SearchList extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		const searchQuery = getParamFromProps(this.props);
		if (!searchQuery) return;

		this.setState({ articles: mock.filter(({ title }) => title.search(searchQuery) >= 0) });
	}

	componentDidUpdate(prevProps) {
		const prevSearchQuery = getParamFromProps(prevProps);
		const nextSearchQuery = getParamFromProps(this.props);

		if (prevSearchQuery === nextSearchQuery) return;

		this.setState({ articles: mock.filter(({ title }) => title.search(nextSearchQuery) >= 0) });
	}

	render() {
		const { articles } = this.state;
		return (
			<div>
				<ul className="search-list">
					{articles.map(({ id, title, text }) => (
						<li key={id}>
							<a href="/" download>
								{title}
							</a>
							<p>{text}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withRouter(SearchList);
