import React, { Component } from "react";
import queryString from "query-string";

import mock from "../mock";

const getParamFromProps = props => queryString.parse(props.location.search).param;

export default class SearchList extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		const searchQuery = getParamFromProps(this.props);
		this.setState({ articles: mock.filter(a => a.title === searchQuery) });
	}

	componentDidUpdate(prevProps) {
		const prevSearchQuery = getParamFromProps(prevProps);
		const nextSearchQuery = getParamFromProps(this.props);

		if (prevSearchQuery === nextSearchQuery) return;

		this.setState({ articles: mock.filter(a => a.title === nextSearchQuery) });
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
