import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

import { SingleBar } from './SingleBar';

class BarGraph extends ReactDOM.Component {

	render() {
		let list = [];

		for (let i=0; i<30; i++) {
			list.push(<SingleBar today_rate={this.props.month_rate.i} />)
		}

		return (
			<div>
				{list}
			</div>
		)
	}
}

export default BarGraph