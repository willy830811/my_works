import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';


class SingleBar extends ReactDOM.Component {
	render() {
		const height = this.props.today_rate;

		const style = {
			backgroundColor: 'red',
			height: height
		}

		return (
			<div style={style}>
			</div>
		)
	}
}

export default SingleBar